# Cravy

## Run the app with Gemini food analysis

The app uses a small Node.js server for both the website and Gemini requests. Node.js 18 or newer is required.

1. Create a Gemini API key in Google AI Studio.
2. Set `GEMINI_API_KEY` in your terminal environment. In PowerShell:

   ```powershell
   $env:GEMINI_API_KEY = "your-key"
   ```

3. Start the app:

   ```powershell
   npm start
   ```

4. Open <http://localhost:3000>.

The key is only read by the server and is never sent to the browser. The food analyzer expects a text description; it is not medical or allergy advice. If the key is not configured, the rest of the app still runs and food analysis displays a setup error.
