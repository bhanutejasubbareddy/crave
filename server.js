const http = require("node:http");
const { readFile } = require("node:fs/promises");
const path = require("node:path");

const port = Number(process.env.PORT) || 3000;
const apiKey = process.env.GEMINI_API_KEY;
const maxBodyLength = 4096;
const staticFiles = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/app.js": ["app.js", "text/javascript; charset=utf-8"],
  "/style.css": ["style.css", "text/css; charset=utf-8"],
};

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(body));
}

async function readJsonBody(request) {
  const chunks = [];
  let length = 0;
  for await (const chunk of request) {
    length += chunk.length;
    if (length > maxBodyLength) {
      const error = new Error("Request body is too large.");
      error.status = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    const error = new Error("Request body must be valid JSON.");
    error.status = 400;
    throw error;
  }
}

async function analyzeFood(request, response) {
  if (!request.headers["content-type"]?.includes("application/json")) {
    sendJson(response, 415, { error: "Send the food description as JSON." });
    return;
  }

  const body = await readJsonBody(request);
  const food = typeof body?.food === "string" ? body.food.trim() : "";
  if (food.length < 2 || food.length > 500) {
    sendJson(response, 400, { error: "Enter a food description between 2 and 500 characters." });
    return;
  }
  if (!apiKey) {
    sendJson(response, 503, { error: "Gemini is not configured. Set GEMINI_API_KEY on the server and restart the app." });
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Analyze this food item: "${food}". Briefly describe what it is, likely ingredients and flavor, and general nutrition considerations. Clearly label nutrition as an estimate, mention that ingredients and allergies can vary, and do not give medical advice.`,
            }],
          }],
          generationConfig: { maxOutputTokens: 512 },
        }),
        signal: controller.signal,
      },
    );
    const result = await geminiResponse.json();
    const analysis = result.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .filter(Boolean)
      .join("\n")
      .trim();

    if (!geminiResponse.ok || !analysis) {
      console.error("Gemini food analysis returned an error.", {
        status: geminiResponse.status,
        message: result.error?.message || "No analysis was returned.",
      });
      sendJson(response, 502, { error: "Gemini couldn't analyze that food item. Please try again." });
      return;
    }
    sendJson(response, 200, { analysis });
  } catch (error) {
    if (error.name === "AbortError") {
      sendJson(response, 504, { error: "Gemini took too long to respond. Please try again." });
      return;
    }
    console.error("Gemini food analysis request failed.", error);
    sendJson(response, 502, { error: "Couldn't reach Gemini. Check your connection and try again." });
  } finally {
    clearTimeout(timeout);
  }
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  if (requestUrl.pathname === "/api/analyze-food") {
    if (request.method !== "POST") {
      response.setHeader("Allow", "POST");
      sendJson(response, 405, { error: "Use POST to analyze a food item." });
      return;
    }
    try {
      await analyzeFood(request, response);
    } catch (error) {
      sendJson(response, error.status || 500, {
        error: error.status ? error.message : "The analysis request could not be processed.",
      });
      if (!error.status) console.error("Food analysis request could not be processed.", error);
    }
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  const file = staticFiles[requestUrl.pathname];
  if (!file) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const contents = await readFile(path.join(__dirname, file[0]));
    response.writeHead(200, {
      "Content-Type": file[1],
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : contents);
  } catch (error) {
    console.error(`Could not serve ${file[0]}.`, error);
    response.writeHead(500);
    response.end("Could not load the app.");
  }
});

server.listen(port, () => {
  console.log(`Crave is running at http://localhost:${port}`);
  if (!apiKey) console.warn("Set GEMINI_API_KEY to enable Gemini food analysis.");
});
