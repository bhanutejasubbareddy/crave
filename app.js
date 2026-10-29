const restaurants = [
  {
    id: "saffron-table",
    name: "The Saffron Table",
    cuisine: "North Indian · Mughlai · Biryani",
    rating: 4.8,
    delivery: 28,
    cost: 350,
    offer: "20% off up to ₹125",
    category: "North Indian",
    veg: false,
    image: "photo-1585937421612-70a008356fbe",
    dishes: [
      { id: "butter-chicken", name: "Butter Chicken", description: "Slow-cooked tomato gravy, cream, and tender chicken.", price: 329, veg: false, popular: true, image: "photo-1603894584373-5ac82b2ae398" },
      { id: "paneer-tikka", name: "Paneer Tikka Masala", description: "Char-grilled paneer in a rich, silky spiced sauce.", price: 279, veg: true, popular: true, image: "photo-1631452180519-c014fe946bc7" },
      { id: "dal-makhani", name: "Dal Makhani", description: "Black lentils simmered overnight with butter and spice.", price: 229, veg: true, popular: false, image: "photo-1546833999-b9f581a1996d" },
      { id: "chicken-biryani", name: "Chicken Dum Biryani", description: "Fragrant basmati rice, saffron, and dum-cooked chicken.", price: 319, veg: false, popular: false, image: "photo-1563379091339-03246963d51a" },
    ],
  },
  {
    id: "little-italy",
    name: "Little Italy",
    cuisine: "Italian · Pizza · Pasta",
    rating: 4.6,
    delivery: 32,
    cost: 450,
    offer: "Flat ₹100 off",
    category: "Pizza",
    veg: true,
    image: "photo-1513104890138-7c749659a591",
    dishes: [
      { id: "margherita", name: "Classic Margherita", description: "San Marzano tomato, fresh mozzarella, basil.", price: 349, veg: true, popular: true, image: "photo-1579751626657-72bc17010498" },
      { id: "truffle-pasta", name: "Truffle Cream Pasta", description: "Handmade fettuccine with a parmesan cream sauce.", price: 399, veg: true, popular: true, image: "photo-1473093295043-cdd812d0e601" },
      { id: "farmhouse-pizza", name: "Garden Farmhouse", description: "Roasted vegetables, olives, and basil pesto.", price: 429, veg: true, popular: false, image: "photo-1571407970349-bc81e7e96d47" },
      { id: "tiramisu", name: "Tiramisu", description: "Espresso-soaked sponge with mascarpone cream.", price: 199, veg: true, popular: false, image: "photo-1571877227200-a0d98ea607e9" },
    ],
  },
  {
    id: "bowl-and-soul",
    name: "Bowl & Soul",
    cuisine: "Healthy bowls · Salads · Asian",
    rating: 4.7,
    delivery: 22,
    cost: 300,
    offer: "Free dessert on ₹499",
    category: "Healthy",
    veg: true,
    image: "photo-1512621776951-a57141f2eefd",
    dishes: [
      { id: "buddha-bowl", name: "Rainbow Buddha Bowl", description: "Avocado, chickpeas, crunchy greens, tahini dressing.", price: 329, veg: true, popular: true, image: "photo-1512621776951-a57141f2eefd" },
      { id: "teriyaki-bowl", name: "Teriyaki Chicken Bowl", description: "Sticky teriyaki chicken, brown rice, sesame greens.", price: 369, veg: false, popular: true, image: "photo-1547592180-85f173990554" },
      { id: "falafel-wrap", name: "Falafel Power Wrap", description: "Herb falafel, pickled veggies, house hummus.", price: 249, veg: true, popular: false, image: "photo-1540420773420-3366772f4999" },
      { id: "mango-smoothie", name: "Mango Sunshine Smoothie", description: "Alphonso mango, banana, and a hint of ginger.", price: 179, veg: true, popular: false, image: "photo-1505252585461-04db1eb84625" },
    ],
  },
  {
    id: "wok-this-way",
    name: "Wok This Way",
    cuisine: "Chinese · Asian · Noodles",
    rating: 4.5,
    delivery: 25,
    cost: 320,
    offer: "15% off your order",
    category: "Asian",
    veg: false,
    image: "photo-1563245372-f21724e3856d",
    dishes: [
      { id: "chilli-paneer", name: "Chilli Paneer", description: "Crispy paneer tossed in a sweet and spicy sauce.", price: 269, veg: true, popular: true, image: "photo-1567188040759-fb8a883dc6d8" },
      { id: "hakka-noodles", name: "Veg Hakka Noodles", description: "Wok-tossed noodles with fresh market vegetables.", price: 229, veg: true, popular: true, image: "photo-1585032226651-759b368d7246" },
      { id: "crispy-chicken", name: "Crispy Chilli Chicken", description: "Golden chicken bites with peppers and green chilli.", price: 319, veg: false, popular: false, image: "photo-1603133872878-684f208fb84b" },
      { id: "veg-momos", name: "Steamed Veg Momos", description: "Hand-folded dumplings with a fiery house chutney.", price: 189, veg: true, popular: false, image: "photo-1541696432-82c6da8ce7bf" },
    ],
  },
  {
    id: "burger-barn",
    name: "Burger Barn",
    cuisine: "Burgers · American · Fast food",
    rating: 4.4,
    delivery: 19,
    cost: 280,
    offer: "Buy 1 get 1 free",
    category: "Burgers",
    veg: false,
    image: "photo-1568901346375-23c9450c58cd",
    dishes: [
      { id: "smash-burger", name: "Double Smash Burger", description: "Two smashed patties, cheddar, pickles, secret sauce.", price: 349, veg: false, popular: true, image: "photo-1568901346375-23c9450c58cd" },
      { id: "classic-fries", name: "Sea Salt Fries", description: "Golden, crispy fries with a sprinkle of sea salt.", price: 149, veg: true, popular: true, image: "photo-1573080496219-bb080dd4f877" },
      { id: "veggie-burger", name: "Garden Crunch Burger", description: "A crispy veggie patty with fresh lettuce and slaw.", price: 279, veg: true, popular: false, image: "photo-1520072959219-c595dc870360" },
      { id: "brownie", name: "Warm Fudge Brownie", description: "A rich, gooey chocolate brownie, baked in-house.", price: 169, veg: true, popular: false, image: "photo-1606313564200-e75d5e30476c" },
    ],
  },
  {
    id: "dosai-house",
    name: "Dosai House",
    cuisine: "South Indian · Dosa · Breakfast",
    rating: 4.7,
    delivery: 24,
    cost: 220,
    offer: "₹75 off above ₹299",
    category: "South Indian",
    veg: true,
    image: "photo-1630383249896-424e482df921",
    dishes: [
      { id: "masala-dosa", name: "Ghee Masala Dosa", description: "Paper-crisp dosa with spiced potato and coconut chutney.", price: 179, veg: true, popular: true, image: "photo-1630383249896-424e482df921" },
      { id: "idli-sambar", name: "Idli Sambar", description: "Fluffy steamed idlis, dunked in homemade sambar.", price: 129, veg: true, popular: true, image: "photo-1589301760014-d929f3979dbc" },
      { id: "medu-vada", name: "Medu Vada", description: "Crisp lentil doughnuts with a side of fresh chutney.", price: 119, veg: true, popular: false, image: "photo-1601050690597-df0568f70950" },
      { id: "filter-coffee", name: "Filter Kaapi", description: "Strong, sweet South Indian filter coffee.", price: 89, veg: true, popular: false, image: "photo-1461023058943-07fcbe16d735" },
    ],
  },
  {
    id: "sweet-crumbs",
    name: "Sweet Crumbs",
    cuisine: "Desserts · Bakery · Cakes",
    rating: 4.9,
    delivery: 27,
    cost: 250,
    offer: "Free delivery",
    category: "Desserts",
    veg: true,
    image: "photo-1488477181946-6428a0291777",
    dishes: [
      { id: "strawberry-cake", name: "Strawberry Cloud Cake", description: "Soft vanilla sponge layered with fresh berries.", price: 249, veg: true, popular: true, image: "photo-1578985545062-69928b1d9587" },
      { id: "choco-cookie", name: "Double Choc Cookie", description: "A soft-centred cookie with pools of dark chocolate.", price: 119, veg: true, popular: true, image: "photo-1499636136210-6f4ee915583e" },
      { id: "blueberry-cheesecake", name: "Blueberry Cheesecake", description: "Creamy baked cheesecake with a blueberry swirl.", price: 229, veg: true, popular: false, image: "photo-1533134242443-d4fd215305ad" },
      { id: "cinnamon-roll", name: "Warm Cinnamon Roll", description: "Flaky, buttery layers with a vanilla glaze.", price: 149, veg: true, popular: false, image: "photo-1509365465985-25d11c17e812" },
    ],
  },
  {
    id: "taco-fiesta",
    name: "Taco Fiesta",
    cuisine: "Mexican · Tacos · Tex-Mex",
    rating: 4.6,
    delivery: 30,
    cost: 340,
    offer: "20% off above ₹399",
    category: "Mexican",
    veg: false,
    image: "photo-1551504734-5ee1c4a1479b",
    dishes: [
      { id: "fish-tacos", name: "Baja Fish Tacos", description: "Crispy fish, slaw, and a squeeze of lime.", price: 329, veg: false, popular: true, image: "photo-1551504734-5ee1c4a1479b" },
      { id: "bean-burrito", name: "Smoky Bean Burrito", description: "Black beans, rice, pico de gallo, and guacamole.", price: 279, veg: true, popular: true, image: "photo-1565299585323-38d6b0865b47" },
      { id: "loaded-nachos", name: "Loaded Nachos", description: "Corn chips with salsa, beans, and creamy queso.", price: 249, veg: true, popular: false, image: "photo-1513456852971-30c0b8199d4d" },
      { id: "churros", name: "Cinnamon Sugar Churros", description: "Freshly fried churros with chocolate dipping sauce.", price: 179, veg: true, popular: false, image: "photo-1624371414361-e670edf4898d" },
    ],
  },
];

const categories = [
  { name: "All", icon: "✦" },
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "North Indian", icon: "🍛" },
  { name: "South Indian", icon: "🥞" },
  { name: "Asian", icon: "🥡" },
  { name: "Healthy", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
  { name: "Mexican", icon: "🌮" },
];

const keys = { cart: "crave-cart", favorites: "crave-favorites", location: "crave-location", orders: "crave-orders" };

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.warn(`Could not read saved ${key} data. Using defaults.`, error);
    return fallback;
  }
}

const state = {
  cart: readStorage(keys.cart, {}),
  favorites: readStorage(keys.favorites, []),
  orders: readStorage(keys.orders, []),
  location: readStorage(keys.location, "Indiranagar, Bengaluru"),
  category: "All",
  query: "",
  vegOnly: false,
  topRated: false,
  offersOnly: false,
  favoritesOnly: false,
  sort: "recommended",
  activeRestaurant: null,
};

const $ = (selector) => document.querySelector(selector);
const restaurantGrid = $("#restaurant-grid");
const dialog = $("#app-dialog");
const overlay = $("#overlay");

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Could not save ${key} data. Your changes will not persist after refresh.`, error);
    showToast("Your browser couldn't save this change.");
  }
}

function money(amount) {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

function foodImage(id, width = 700) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function renderCategories() {
  $("#category-list").innerHTML = categories.map((category) => `
    <button class="category-button ${state.category === category.name ? "selected" : ""}" type="button" data-category="${category.name}" aria-pressed="${state.category === category.name}">
      <span class="category-icon">${category.icon}</span><span>${category.name}</span>
    </button>
  `).join("");
}

function visibleRestaurants() {
  const query = state.query.trim().toLowerCase();
  let matches = restaurants.filter((restaurant) => {
    const dishMatches = restaurant.dishes.some((dish) => `${dish.name} ${dish.description}`.toLowerCase().includes(query));
    const matchesSearch = !query || `${restaurant.name} ${restaurant.cuisine} ${restaurant.category}`.toLowerCase().includes(query) || dishMatches;
    return matchesSearch
      && (state.category === "All" || restaurant.category === state.category)
      && (!state.vegOnly || restaurant.veg)
      && (!state.topRated || restaurant.rating >= 4.5)
      && (!state.offersOnly || restaurant.offer)
      && (!state.favoritesOnly || state.favorites.includes(restaurant.id));
  });

  if (state.sort === "rating") matches = matches.sort((a, b) => b.rating - a.rating);
  if (state.sort === "delivery") matches = matches.sort((a, b) => a.delivery - b.delivery);
  if (state.sort === "cost-low") matches = matches.sort((a, b) => a.cost - b.cost);
  return matches;
}

function renderRestaurants() {
  const matches = visibleRestaurants();
  $("#result-count").textContent = `${matches.length} ${matches.length === 1 ? "place" : "places"}`;
  $("#empty-state").classList.toggle("hidden", matches.length > 0);
  restaurantGrid.classList.toggle("hidden", matches.length === 0);
  restaurantGrid.innerHTML = matches.map((restaurant) => `
    <article class="restaurant-card">
      <button class="restaurant-image-button" type="button" data-open-restaurant="${restaurant.id}" aria-label="View ${restaurant.name} menu">
        <img class="restaurant-image" src="${foodImage(restaurant.image)}" alt="${restaurant.name} dishes" loading="lazy">
        <span class="offer-badge">${restaurant.offer}</span>
        <span class="delivery-time">${restaurant.delivery} min</span>
      </button>
      <button class="favorite-toggle ${state.favorites.includes(restaurant.id) ? "is-favorite" : ""}" type="button" data-favorite="${restaurant.id}" aria-label="${state.favorites.includes(restaurant.id) ? "Remove from" : "Add to"} favorites" aria-pressed="${state.favorites.includes(restaurant.id)}">${state.favorites.includes(restaurant.id) ? "♥" : "♡"}</button>
      <button class="restaurant-details" type="button" data-open-restaurant="${restaurant.id}">
        <span class="restaurant-title-row"><strong>${restaurant.name}</strong><span class="rating"><span aria-hidden="true">★</span> ${restaurant.rating}</span></span>
        <span class="restaurant-cuisine">${restaurant.cuisine}</span>
        <span class="restaurant-meta"><span>${money(restaurant.cost)} for two</span><span class="meta-dot">·</span><span>${restaurant.veg ? "Pure veg" : "Popular pick"}</span></span>
      </button>
    </article>
  `).join("");
}

function renderCart() {
  const entries = Object.entries(state.cart).filter(([, quantity]) => quantity > 0);
  const quantity = entries.reduce((sum, [, count]) => sum + count, 0);
  $("#cart-count").textContent = quantity;
  $("#cart-title-count").textContent = `(${quantity})`;
  $("#cart-footer").classList.toggle("hidden", quantity === 0);

  if (!entries.length) {
    $("#cart-content").innerHTML = `<div class="cart-empty"><span aria-hidden="true">🛍️</span><h3>Your cart is waiting</h3><p>Add something delicious to get started.</p><button class="primary-button" type="button" data-close-cart>Browse restaurants</button></div>`;
    return;
  }

  const cartItems = entries.map(([key, count]) => {
    const [restaurantId, dishId] = key.split(":");
    const restaurant = restaurants.find((item) => item.id === restaurantId);
    const dish = restaurant?.dishes.find((item) => item.id === dishId);
    return dish && restaurant ? { key, count, dish, restaurant } : null;
  }).filter(Boolean);

  if (!cartItems.length) {
    state.cart = {};
    saveStorage(keys.cart, state.cart);
    renderCart();
    return;
  }

  $("#cart-content").innerHTML = `<div class="cart-restaurant-name">From ${cartItems[0].restaurant.name}</div>
    ${cartItems.map(({ key, count, dish }) => `
      <div class="cart-item">
        <div class="veg-mark ${dish.veg ? "" : "non-veg"}" aria-label="${dish.veg ? "Vegetarian" : "Non-vegetarian"}"></div>
        <div class="cart-item-info"><strong>${dish.name}</strong><span>${money(dish.price)}</span></div>
        <div class="quantity-control"><button type="button" data-quantity="-1" data-key="${key}" aria-label="Remove one ${dish.name}">−</button><span>${count}</span><button type="button" data-quantity="1" data-key="${key}" aria-label="Add one ${dish.name}">+</button></div>
      </div>
    `).join("")}`;

  const subtotal = cartItems.reduce((sum, item) => sum + item.dish.price * item.count, 0);
  const delivery = subtotal >= 499 ? 0 : 35;
  const taxes = Math.round(subtotal * 0.05);
  $("#item-total").textContent = money(subtotal);
  $("#delivery-fee").textContent = delivery === 0 ? "FREE" : money(delivery);
  $("#tax-total").textContent = money(taxes);
  $("#grand-total").textContent = money(subtotal + delivery + taxes);
}

function showDialog(content) {
  $("#dialog-content").innerHTML = content;
  if (!dialog.open) dialog.showModal();
}

function openRestaurant(restaurantId) {
  const restaurant = restaurants.find((item) => item.id === restaurantId);
  if (!restaurant) return;
  state.activeRestaurant = restaurantId;
  showDialog(`
    <div class="menu-cover"><img src="${foodImage(restaurant.image, 1000)}" alt="${restaurant.name}" fetchpriority="high"><div class="menu-cover-gradient"></div><span class="menu-cover-tag">${restaurant.offer}</span></div>
    <div class="menu-header"><p class="section-kicker">A LOCAL FAVORITE</p><h2 id="dialog-title">${restaurant.name}</h2><p>${restaurant.cuisine}</p><div class="menu-facts"><span class="rating"><span aria-hidden="true">★</span> ${restaurant.rating}</span><span>◷ ${restaurant.delivery} min</span><span>${money(restaurant.cost)} for two</span></div></div>
    <div class="menu-label"><h3>Customer favorites</h3><span>Freshly made, just for you</span></div>
    <div class="menu-list">${restaurant.dishes.map((dish) => `
      <article class="menu-item">
        <div class="menu-item-copy"><span class="veg-mark ${dish.veg ? "" : "non-veg"}" aria-label="${dish.veg ? "Vegetarian" : "Non-vegetarian"}"></span>${dish.popular ? '<span class="popular-label">BESTSELLER</span>' : ""}
          <h4>${dish.name}</h4><strong>${money(dish.price)}</strong><p>${dish.description}</p></div>
        <div class="menu-item-art"><img src="${foodImage(dish.image, 360)}" alt="" loading="lazy"><button class="add-item-button" type="button" data-add-item="${restaurant.id}:${dish.id}">ADD <span aria-hidden="true">+</span></button></div>
      </article>
    `).join("")}</div>`);
}

function openCart() {
  renderCart();
  $("#cart-drawer").classList.add("open");
  $("#cart-drawer").setAttribute("aria-hidden", "false");
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  $(".close-cart-button").focus();
}

function closeCart() {
  $("#cart-drawer").classList.remove("open");
  $("#cart-drawer").setAttribute("aria-hidden", "true");
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function addToCart(key) {
  const restaurantId = key.split(":")[0];
  const currentRestaurant = Object.keys(state.cart)[0]?.split(":")[0];
  if (currentRestaurant && currentRestaurant !== restaurantId) {
    showDialog(`<div class="simple-dialog"><span class="dialog-emoji">🛍️</span><p class="section-kicker">ONE ORDER AT A TIME</p><h2 id="dialog-title">Clear your cart?</h2><p>Your cart has items from another restaurant. Clear it to add something from this one?</p><div class="dialog-actions"><button class="secondary-button" type="button" data-close-dialog>Keep my cart</button><button class="primary-button" type="button" data-replace-cart="${key}">Clear &amp; add item</button></div></div>`);
    return;
  }
  state.cart[key] = (state.cart[key] || 0) + 1;
  saveStorage(keys.cart, state.cart);
  renderCart();
  showToast("Added to your cart!");
}

function openFilters() {
  showDialog(`
    <div class="simple-dialog filters-dialog"><p class="section-kicker">MAKE IT YOURS</p><h2 id="dialog-title">Filters</h2><p>Find exactly what you're in the mood for.</p>
      <label class="filter-option"><span><span class="veg-mark"></span> Pure vegetarian</span><input type="checkbox" data-filter-option="vegOnly" ${state.vegOnly ? "checked" : ""}></label>
      <label class="filter-option"><span>★ Rated 4.5 and above</span><input type="checkbox" data-filter-option="topRated" ${state.topRated ? "checked" : ""}></label>
      <label class="filter-option"><span>％ Restaurants with offers</span><input type="checkbox" data-filter-option="offersOnly" ${state.offersOnly ? "checked" : ""}></label>
      <div class="dialog-actions"><button class="secondary-button" type="button" data-reset-filters>Clear all</button><button class="primary-button" type="button" data-close-dialog>Show restaurants</button></div>
    </div>`);
}

function openCheckout() {
  const firstItem = Object.keys(state.cart)[0];
  if (!firstItem) return;
  showDialog(`
    <div class="simple-dialog checkout-dialog"><p class="section-kicker">ALMOST THERE</p><h2 id="dialog-title">Where should we bring it?</h2><p>You're just one step away from something delicious.</p>
      <form id="checkout-form" class="checkout-form">
        <label>Your name<input name="name" type="text" autocomplete="name" placeholder="e.g. Alex Morgan" required minlength="2"></label>
        <label>Phone number<input name="phone" type="tel" autocomplete="tel" placeholder="10-digit mobile number" pattern="[0-9]{10}" required></label>
        <label>Delivery address<textarea name="address" autocomplete="street-address" rows="2" placeholder="House / flat, street, area" required minlength="5"></textarea></label>
        <label>Payment method<select name="payment"><option>Pay on delivery</option><option>UPI (demo)</option><option>Credit / debit card (demo)</option></select></label>
        <div class="checkout-total"><span>Order total</span><strong>${$("#grand-total").textContent}</strong></div>
        <button class="primary-button checkout-submit" type="submit">Place demo order <span aria-hidden="true">→</span></button>
        <p class="demo-disclaimer">This is a demo. No payment will be collected.</p>
      </form>
    </div>`);
}

function placeOrder(form) {
  const formData = new FormData(form);
  const items = Object.entries(state.cart).map(([key, count]) => {
    const [restaurantId, dishId] = key.split(":");
    const restaurant = restaurants.find((item) => item.id === restaurantId);
    const dish = restaurant?.dishes.find((item) => item.id === dishId);
    return dish && restaurant ? { name: dish.name, count, restaurant: restaurant.name } : null;
  }).filter(Boolean);
  const orderNumber = `CR${Date.now().toString().slice(-6)}`;
  const order = { id: orderNumber, name: formData.get("name"), location: formData.get("address"), items, total: $("#grand-total").textContent, createdAt: new Date().toISOString() };
  state.orders.unshift(order);
  saveStorage(keys.orders, state.orders);
  state.cart = {};
  saveStorage(keys.cart, state.cart);
  renderCart();
  const safeName = String(order.name).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  showDialog(`<div class="simple-dialog order-success"><span class="success-icon" aria-hidden="true">✓</span><p class="section-kicker">ORDER CONFIRMED</p><h2 id="dialog-title">You're all set, ${safeName}!</h2><p>Your demo order <strong>#${orderNumber}</strong> is being prepared. Get comfy—we'll have it at your door in about 30 minutes.</p>
    <div class="order-progress"><span class="progress-step done"><b>✓</b><span>Confirmed</span></span><i></i><span class="progress-step active"><b>2</b><span>Preparing</span></span><i></i><span class="progress-step"><b>3</b><span>On the way</span></span></div>
    <div class="order-receipt">${items.map((item) => `<div><span>${item.count} × ${item.name}</span><strong>${item.restaurant}</strong></div>`).join("")}<div class="receipt-total"><span>Total (demo)</span><strong>${order.total}</strong></div></div>
    <button class="primary-button full-button" type="button" data-close-dialog>Back to browsing</button></div>`);
}

function setQuery(value) {
  state.query = value;
  $("#search-input").value = value;
  $("#hero-search-input").value = value;
  renderRestaurants();
  $("#restaurants").scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncFilters() {
  $("#filter-veg").setAttribute("aria-pressed", String(state.vegOnly));
  $("#filter-rating").setAttribute("aria-pressed", String(state.topRated));
  $("#filter-offers").setAttribute("aria-pressed", String(state.offersOnly));
  $("#favorites-button").classList.toggle("active", state.favoritesOnly);
  renderRestaurants();
}

function resetFilters() {
  state.vegOnly = false;
  state.topRated = false;
  state.offersOnly = false;
  state.favoritesOnly = false;
  state.category = "All";
  state.query = "";
  $("#search-input").value = "";
  $("#hero-search-input").value = "";
  renderCategories();
  syncFilters();
}

function openLocationDialog() {
  showDialog(`<div class="simple-dialog"><p class="section-kicker">FRESH FOOD, RIGHT TO YOU</p><h2 id="dialog-title">Set your location</h2><p>We'll find the best bites near your door.</p><form id="location-form" class="checkout-form"><label>Delivery area<input name="location" type="text" value="${state.location.replace(/[&<>"']/g, "")}" placeholder="Area, city" required minlength="3"></label><button class="primary-button checkout-submit" type="submit">Save location</button></form></div>`);
}

function openAccountDialog() {
  showDialog(`<div class="simple-dialog"><div class="account-avatar">A</div><p class="section-kicker">WELCOME TO CRAVE</p><h2 id="dialog-title">Good food is closer.</h2><p>Sign in is a demo feature. No account or personal information is stored.</p><form id="account-form" class="checkout-form"><label>Email or phone<input name="contact" type="text" placeholder="you@example.com" required></label><button class="primary-button checkout-submit" type="submit">Continue</button></form></div>`);
}

renderCategories();
renderRestaurants();
renderCart();
$("#current-location").textContent = state.location;

$("#category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategories();
  renderRestaurants();
});

restaurantGrid.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    const restaurantId = favorite.dataset.favorite;
    state.favorites = state.favorites.includes(restaurantId)
      ? state.favorites.filter((id) => id !== restaurantId)
      : [...state.favorites, restaurantId];
    saveStorage(keys.favorites, state.favorites);
    renderRestaurants();
    if (state.favoritesOnly && !state.favorites.includes(restaurantId)) showToast("Removed from favorites.");
    else showToast("Saved to your favorites.");
    return;
  }
  const openButton = event.target.closest("[data-open-restaurant]");
  if (openButton) openRestaurant(openButton.dataset.openRestaurant);
});

$("#category-list").addEventListener("keydown", (event) => {
  if (event.key === "Escape") $("#search-input").focus();
});

$("#search-input").addEventListener("input", (event) => {
  state.query = event.target.value;
  $("#hero-search-input").value = event.target.value;
  renderRestaurants();
});
$("#hero-search-input").addEventListener("input", (event) => {
  $("#search-input").value = event.target.value;
  state.query = event.target.value;
  renderRestaurants();
});
$("#hero-search-button").addEventListener("click", () => setQuery($("#hero-search-input").value));
$("#hero-search-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") setQuery(event.target.value);
});

$("#sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderRestaurants();
});
$("#filter-all").addEventListener("click", openFilters);
$("#filter-veg").addEventListener("click", () => { state.vegOnly = !state.vegOnly; syncFilters(); });
$("#filter-rating").addEventListener("click", () => { state.topRated = !state.topRated; syncFilters(); });
$("#filter-offers").addEventListener("click", () => { state.offersOnly = !state.offersOnly; syncFilters(); });
$("#clear-filters-button").addEventListener("click", resetFilters);
$("#favorites-button").addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  syncFilters();
  if (state.favoritesOnly) $("#restaurants").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#all-categories-button").addEventListener("click", () => {
  state.category = "All";
  renderCategories();
  renderRestaurants();
});
$("#banner-browse-button").addEventListener("click", () => $("#restaurants").scrollIntoView({ behavior: "smooth" }));
$("#location-button").addEventListener("click", openLocationDialog);
$("#account-button").addEventListener("click", openAccountDialog);
$("#cart-button").addEventListener("click", openCart);
$(".close-cart-button").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
$("#checkout-button").addEventListener("click", openCheckout);
$("#footer-help").addEventListener("click", (event) => {
  event.preventDefault();
  showDialog(`<div class="simple-dialog"><p class="section-kicker">WE'RE HERE FOR YOU</p><h2 id="dialog-title">A little help?</h2><p>Crave is a front-end demo. Orders are not sent to restaurants and payments are not processed. Your saved cart and favorites stay in this browser.</p><button class="primary-button full-button" type="button" data-close-dialog>Got it</button></div>`);
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-item]");
  if (addButton) addToCart(addButton.dataset.addItem);

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const key = quantityButton.dataset.key;
    state.cart[key] = (state.cart[key] || 0) + Number(quantityButton.dataset.quantity);
    if (state.cart[key] <= 0) delete state.cart[key];
    saveStorage(keys.cart, state.cart);
    renderCart();
  }

  const replaceButton = event.target.closest("[data-replace-cart]");
  if (replaceButton) {
    const key = replaceButton.dataset.replaceCart;
    state.cart = {};
    state.activeRestaurant = null;
    dialog.close();
    addToCart(key);
  }

  if (event.target.closest("[data-close-dialog]")) dialog.close();
  if (event.target.closest("[data-close-cart]")) closeCart();

  const filterInput = event.target.closest("[data-filter-option]");
  if (filterInput) {
    state[filterInput.dataset.filterOption] = filterInput.checked;
    syncFilters();
  }

  if (event.target.closest("[data-reset-filters]")) {
    state.vegOnly = false;
    state.topRated = false;
    state.offersOnly = false;
    syncFilters();
    dialog.close();
  }
});

$("#dialog-content").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  if (event.target.id === "checkout-form") placeOrder(event.target);
  if (event.target.id === "location-form") {
    const location = new FormData(event.target).get("location").trim();
    if (!location) return;
    state.location = location;
    saveStorage(keys.location, state.location);
    $("#current-location").textContent = state.location;
    dialog.close();
    showToast("Delivery location updated.");
  }
  if (event.target.id === "account-form") {
    dialog.close();
    showToast("Thanks! Sign-in is not enabled in this demo.");
  }
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => { state.activeRestaurant = null; });

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    $("#search-input").focus();
  }
  if (event.key === "Escape" && $("#cart-drawer").classList.contains("open")) closeCart();
});
