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

## Routes and delivery location

The app uses client-side History API routing for the home page (`/`) and Cravy Flash (`/flash`). Both routes can be opened directly or refreshed.

Choosing **Use my current location** uses the browser's geolocation permission and sends the coordinates to BigDataCloud's reverse-geocoding service to display a locality name. If address lookup fails, enter a delivery area manually.

The Cravy Flash vegetable catalog contains 30 Indian-market vegetables with English and Telugu names. Its distinct vegetable photos are bundled under `assets/flash-vegetables/`, so the vegetable cards do not depend on live image searches. Image credits and licenses are listed in `assets/flash-vegetables/ATTRIBUTION.txt`. Search matches both English and Telugu names; cart controls and responsive product cards use the existing catalog behavior.

Cravy Flash is a responsive quick-commerce storefront with 24 clickable categories, curated product shelves, instant search, price sorting, offer filtering, a persistent wishlist, and a cart with delivery charges and checkout. Demo profiles, saved addresses, and order history stay in browser storage; checkout does not collect real payments or place real orders. Product and category seed data is organized in `app.js` (`flashCatalogCategories`, `flashVegetableProducts`, `flashExtraGroceryProducts`, and `flashProductsByCategory`) so the catalog can be extended in one place. Other categories load product-specific photos from Wikimedia Commons as cards approach the viewport.
