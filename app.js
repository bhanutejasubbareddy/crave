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
  {
    id: "cocoa-corner",
    name: "Cocoa Corner",
    cuisine: "Chocolate · Truffles · Brownies",
    rating: 4.8,
    delivery: 25,
    cost: 300,
    offer: "15% off chocolate boxes",
    category: "Chocolate",
    veg: true,
    image: "photo-1511381939415-e44015466834",
    dishes: [
      { id: "chocolate-truffle-box", name: "Chocolate Truffle Box", description: "A box of rich, hand-rolled dark chocolate truffles.", price: 299, veg: true, popular: true, image: "photo-1511381939415-e44015466834" },
      { id: "hazelnut-chocolate-bar", name: "Hazelnut Chocolate Bar", description: "Creamy milk chocolate with roasted hazelnut pieces.", price: 179, veg: true, popular: true, image: "photo-1526081347589-7fa3cb41b4b2" },
      { id: "chocolate-lava-cake", name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey molten center.", price: 199, veg: true, popular: false, image: "photo-1606313564200-e75d5e30476c" },
      { id: "chocolate-covered-strawberries", name: "Chocolate Strawberries", description: "Fresh strawberries dipped in smooth dark chocolate.", price: 249, veg: true, popular: false, image: "photo-1511381939415-e44015466834" },
    ],
  },
  {
    id: "scoop-station",
    name: "Scoop Station",
    cuisine: "Ice cream · Sundaes · Shakes",
    rating: 4.7,
    delivery: 20,
    cost: 220,
    offer: "Free topping with every sundae",
    category: "Ice Cream",
    veg: true,
    image: "photo-1560008581-09826d1de69e",
    dishes: [
      { id: "vanilla-bean-scoop", name: "Vanilla Bean Scoop", description: "Classic Madagascan vanilla bean ice cream.", price: 99, veg: true, popular: true, image: "photo-1560008581-09826d1de69e" },
      { id: "chocolate-fudge-sundae", name: "Chocolate Fudge Sundae", description: "Chocolate ice cream, warm fudge, and crunchy nuts.", price: 189, veg: true, popular: true, image: "photo-1563805042-7684c019e1cb" },
      { id: "mango-ice-cream", name: "Mango Ice Cream", description: "Creamy mango ice cream made with ripe fruit.", price: 129, veg: true, popular: false, image: "photo-1501446529957-6226bd447c46" },
      { id: "strawberry-milkshake", name: "Strawberry Milkshake", description: "A thick strawberry shake topped with whipped cream.", price: 169, veg: true, popular: false, image: "photo-1572490122747-3968b75cc699" },
    ],
  },
  {
    id: "nutty-nook",
    name: "Nutty Nook",
    cuisine: "Dry fruits · Nuts · Trail mixes",
    rating: 4.6,
    delivery: 26,
    cost: 400,
    offer: "10% off orders above ₹499",
    category: "Dry Fruits",
    veg: true,
    image: "photo-1505576399279-565b52d4ac71",
    dishes: [
      { id: "premium-dry-fruit-box", name: "Premium Dry Fruit Box", description: "A balanced mix of almonds, cashews, pistachios, and raisins.", price: 499, veg: true, popular: true, image: "photo-1505576399279-565b52d4ac71" },
      { id: "roasted-almonds", name: "Roasted Almonds", description: "Lightly roasted almonds with a touch of sea salt.", price: 249, veg: true, popular: true, image: "photo-1505576399279-565b52d4ac71" },
      { id: "cashew-pistachio-mix", name: "Cashew & Pistachio Mix", description: "Crunchy whole cashews and pistachios, ready to snack.", price: 329, veg: true, popular: false, image: "photo-1511499767150-a48a237f0083" },
      { id: "fruit-and-nut-trail-mix", name: "Fruit & Nut Trail Mix", description: "Dried fruit, seeds, and nuts for an easy snack.", price: 199, veg: true, popular: false, image: "photo-1490645935967-10de6ba17061" },
    ],
  },
  {
    id: "stone-oven-pizza",
    name: "Stone Oven Pizza Co.",
    cuisine: "Wood-fired pizza · Italian",
    rating: 4.7,
    delivery: 29,
    cost: 400,
    offer: "Free garlic bread above ₹599",
    category: "Pizza",
    veg: true,
    image: "photo-1579751626657-72bc17010498",
    dishes: [
      { id: "four-cheese-pizza", name: "Four Cheese Pizza", description: "Mozzarella, parmesan, gorgonzola, and a golden crust.", price: 399, veg: true, popular: true, image: "photo-1579751626657-72bc17010498" },
      { id: "pepperoni-pizza", name: "Pepperoni Pizza", description: "Classic pepperoni, mozzarella, and tomato sauce.", price: 449, veg: false, popular: true, image: "photo-1513104890138-7c749659a591" },
      { id: "pesto-veggie-pizza", name: "Pesto Garden Pizza", description: "Basil pesto, peppers, olives, and fresh mozzarella.", price: 379, veg: true, popular: false, image: "photo-1571407970349-bc81e7e96d47" },
      { id: "garlic-bread", name: "Cheesy Garlic Bread", description: "Oven-baked bread with garlic butter and melted cheese.", price: 169, veg: true, popular: false, image: "photo-1579751626657-72bc17010498" },
    ],
  },
  {
    id: "grill-and-bun",
    name: "Grill & Bun",
    cuisine: "Gourmet burgers · Loaded fries",
    rating: 4.5,
    delivery: 23,
    cost: 320,
    offer: "Free fries with burger combo",
    category: "Burgers",
    veg: false,
    image: "photo-1550547660-d9450f859349",
    dishes: [
      { id: "bbq-smoky-burger", name: "Smoky BBQ Burger", description: "Grilled patty, smoky barbecue sauce, and crisp onions.", price: 329, veg: false, popular: true, image: "photo-1550547660-d9450f859349" },
      { id: "crispy-chicken-burger", name: "Crispy Chicken Burger", description: "Crunchy chicken, lettuce, and house-made pepper mayo.", price: 299, veg: false, popular: true, image: "photo-1568901346375-23c9450c58cd" },
      { id: "paneer-crunch-burger", name: "Paneer Crunch Burger", description: "Spiced crispy paneer with fresh slaw and mint mayo.", price: 269, veg: true, popular: false, image: "photo-1520072959219-c595dc870360" },
      { id: "loaded-cheese-fries", name: "Loaded Cheese Fries", description: "Golden fries topped with creamy cheese sauce.", price: 189, veg: true, popular: false, image: "photo-1573080496219-bb080dd4f877" },
    ],
  },
  {
    id: "masala-mela",
    name: "Masala Mela",
    cuisine: "North Indian · Punjabi · Thalis",
    rating: 4.6,
    delivery: 31,
    cost: 330,
    offer: "₹100 off family meals",
    category: "North Indian",
    veg: true,
    image: "photo-1546833999-b9f581a1996d",
    dishes: [
      { id: "shahi-paneer", name: "Shahi Paneer", description: "Soft paneer in a creamy cashew and tomato gravy.", price: 289, veg: true, popular: true, image: "photo-1631452180519-c014fe946bc7" },
      { id: "chole-bhature", name: "Chole Bhature", description: "Spiced chickpeas with fluffy, freshly fried bhature.", price: 219, veg: true, popular: true, image: "photo-1626132647523-66f5bf380027" },
      { id: "punjabi-veg-thali", name: "Punjabi Veg Thali", description: "A hearty platter with dal, seasonal curry, rice, and roti.", price: 329, veg: true, popular: false, image: "photo-1546833999-b9f581a1996d" },
      { id: "garlic-naan", name: "Garlic Butter Naan", description: "Soft tandoor-baked naan brushed with garlic butter.", price: 69, veg: true, popular: false, image: "photo-1585937421612-70a008356fbe" },
    ],
  },
  {
    id: "idli-express",
    name: "Idli Express",
    cuisine: "South Indian · Idli · Meals",
    rating: 4.6,
    delivery: 21,
    cost: 200,
    offer: "Free filter coffee above ₹299",
    category: "South Indian",
    veg: true,
    image: "photo-1589301760014-d929f3979dbc",
    dishes: [
      { id: "podi-idli", name: "Ghee Podi Idli", description: "Soft idlis tossed in aromatic lentil spice and ghee.", price: 149, veg: true, popular: true, image: "photo-1589301760014-d929f3979dbc" },
      { id: "onion-uttapam", name: "Onion Uttapam", description: "Thick rice-and-lentil pancake topped with onion and herbs.", price: 169, veg: true, popular: true, image: "photo-1630383249896-424e482df921" },
      { id: "mini-tiffin", name: "Mini Tiffin", description: "A little dosa, idli, pongal, vada, and fresh chutneys.", price: 229, veg: true, popular: false, image: "photo-1547592180-85f173990554" },
      { id: "pongal", name: "Pepper Pongal", description: "Comforting rice and lentils finished with pepper and cashews.", price: 159, veg: true, popular: false, image: "photo-1546833999-b9f581a1996d" },
    ],
  },
  {
    id: "noodle-garden",
    name: "Noodle Garden",
    cuisine: "Asian · Thai · Noodles",
    rating: 4.7,
    delivery: 27,
    cost: 350,
    offer: "10% off noodle bowls",
    category: "Asian",
    veg: true,
    image: "photo-1569718212165-3a8278d5f624",
    dishes: [
      { id: "veg-pad-thai", name: "Vegetable Pad Thai", description: "Rice noodles, crunchy vegetables, peanuts, and lime.", price: 279, veg: true, popular: true, image: "photo-1569718212165-3a8278d5f624" },
      { id: "thai-green-curry", name: "Thai Green Curry", description: "Fragrant coconut curry with vegetables and jasmine rice.", price: 319, veg: true, popular: true, image: "photo-1547592180-85f173990554" },
      { id: "sesame-tofu-bowl", name: "Sesame Tofu Bowl", description: "Crisp tofu, sesame greens, and steamed rice.", price: 299, veg: true, popular: false, image: "photo-1512621776951-a57141f2eefd" },
      { id: "spring-rolls", name: "Crispy Spring Rolls", description: "Golden vegetable rolls with a sweet chilli dip.", price: 179, veg: true, popular: false, image: "photo-1541696432-82c6da8ce7bf" },
    ],
  },
  {
    id: "green-spoon",
    name: "The Green Spoon",
    cuisine: "Healthy · Salads · Smoothies",
    rating: 4.8,
    delivery: 24,
    cost: 320,
    offer: "Free smoothie above ₹499",
    category: "Healthy",
    veg: true,
    image: "photo-1512621776951-a57141f2eefd",
    dishes: [
      { id: "avocado-grain-bowl", name: "Avocado Grain Bowl", description: "Avocado, quinoa, chickpeas, and greens with lemon dressing.", price: 349, veg: true, popular: true, image: "photo-1512621776951-a57141f2eefd" },
      { id: "greek-salad", name: "Fresh Greek Salad", description: "Cucumber, tomato, olives, feta, and fresh herbs.", price: 279, veg: true, popular: true, image: "photo-1540420773420-3366772f4999" },
      { id: "protein-power-wrap", name: "Protein Power Wrap", description: "Grilled vegetables, hummus, greens, and whole-grain wrap.", price: 259, veg: true, popular: false, image: "photo-1540420773420-3366772f4999" },
      { id: "berry-yogurt-smoothie", name: "Berry Yogurt Smoothie", description: "Mixed berries blended with yogurt and banana.", price: 189, veg: true, popular: false, image: "photo-1505252585461-04db1eb84625" },
    ],
  },
  {
    id: "sugar-and-slice",
    name: "Sugar & Slice",
    cuisine: "Desserts · Pastries · Puddings",
    rating: 4.8,
    delivery: 26,
    cost: 240,
    offer: "Buy 2 pastries, get 1 free",
    category: "Desserts",
    veg: true,
    image: "photo-1488477181946-6428a0291777",
    dishes: [
      { id: "chocolate-mousse", name: "Chocolate Mousse Cup", description: "Light, silky chocolate mousse finished with cocoa.", price: 179, veg: true, popular: true, image: "photo-1578985545062-69928b1d9587" },
      { id: "lemon-tart", name: "Lemon Cream Tart", description: "Buttery pastry filled with bright, tangy lemon cream.", price: 199, veg: true, popular: true, image: "photo-1488477181946-6428a0291777" },
      { id: "caramel-pudding", name: "Caramel Pudding", description: "Smooth baked custard with a golden caramel topping.", price: 149, veg: true, popular: false, image: "photo-1488477181946-6428a0291777" },
      { id: "red-velvet-cupcake", name: "Red Velvet Cupcake", description: "Soft cocoa sponge topped with cream cheese frosting.", price: 129, veg: true, popular: false, image: "photo-1578985545062-69928b1d9587" },
    ],
  },
  {
    id: "taco-trail",
    name: "Taco Trail",
    cuisine: "Mexican · Burritos · Quesadillas",
    rating: 4.5,
    delivery: 28,
    cost: 310,
    offer: "Free salsa with every order",
    category: "Mexican",
    veg: true,
    image: "photo-1551504734-5ee1c4a1479b",
    dishes: [
      { id: "veggie-quesadilla", name: "Grilled Veggie Quesadilla", description: "Toasted tortilla packed with peppers, beans, and cheese.", price: 249, veg: true, popular: true, image: "photo-1565299585323-38d6b0865b47" },
      { id: "crispy-fish-burrito", name: "Crispy Fish Burrito", description: "Seasoned fish, rice, crunchy slaw, and lime crema.", price: 329, veg: false, popular: true, image: "photo-1551504734-5ee1c4a1479b" },
      { id: "street-corn-cup", name: "Mexican Street Corn", description: "Sweet corn with lime, herbs, and a creamy chilli topping.", price: 159, veg: true, popular: false, image: "photo-1513456852971-30c0b8199d4d" },
      { id: "guacamole-chips", name: "Guacamole & Chips", description: "Fresh avocado dip with crisp corn tortilla chips.", price: 199, veg: true, popular: false, image: "photo-1513456852971-30c0b8199d4d" },
    ],
  },
  {
    id: "choco-and-co",
    name: "Choco & Co.",
    cuisine: "Chocolate · Desserts · Gifts",
    rating: 4.7,
    delivery: 23,
    cost: 350,
    offer: "Free gift wrap on chocolate boxes",
    category: "Chocolate",
    veg: true,
    image: "photo-1526081347589-7fa3cb41b4b2",
    dishes: [
      { id: "dark-chocolate-bark", name: "Almond Dark Chocolate Bark", description: "Snappy dark chocolate scattered with toasted almonds.", price: 229, veg: true, popular: true, image: "photo-1526081347589-7fa3cb41b4b2" },
      { id: "salted-caramel-truffles", name: "Salted Caramel Truffles", description: "Chocolate truffles with a smooth salted caramel center.", price: 279, veg: true, popular: true, image: "photo-1511381939415-e44015466834" },
      { id: "chocolate-chip-brownie", name: "Chocolate Chip Brownie", description: "A fudgy brownie packed with dark chocolate chips.", price: 169, veg: true, popular: false, image: "photo-1606313564200-e75d5e30476c" },
      { id: "cocoa-drinking-chocolate", name: "Drinking Chocolate", description: "A rich, warming cup of smooth melted chocolate.", price: 149, veg: true, popular: false, image: "photo-1511381939415-e44015466834" },
    ],
  },
  {
    id: "sundae-social",
    name: "Sundae Social",
    cuisine: "Ice cream · Frozen yogurt · Sundaes",
    rating: 4.8,
    delivery: 19,
    cost: 250,
    offer: "Add a free topping to any sundae",
    category: "Ice Cream",
    veg: true,
    image: "photo-1563805042-7684c019e1cb",
    dishes: [
      { id: "cookie-dough-scoop", name: "Cookie Dough Scoop", description: "Creamy vanilla ice cream with chunks of cookie dough.", price: 139, veg: true, popular: true, image: "photo-1560008581-09826d1de69e" },
      { id: "berry-cheesecake-sundae", name: "Berry Cheesecake Sundae", description: "Cheesecake ice cream, berry sauce, and buttery crumble.", price: 219, veg: true, popular: true, image: "photo-1563805042-7684c019e1cb" },
      { id: "pistachio-gelato", name: "Pistachio Gelato", description: "Smooth Italian-style gelato with roasted pistachios.", price: 159, veg: true, popular: false, image: "photo-1501446529957-6226bd447c46" },
      { id: "classic-banana-split", name: "Classic Banana Split", description: "Banana, three scoops, chocolate sauce, and sprinkles.", price: 239, veg: true, popular: false, image: "photo-1563805042-7684c019e1cb" },
    ],
  },
  {
    id: "almond-and-fig",
    name: "Almond & Fig",
    cuisine: "Dry fruits · Dates · Gift boxes",
    rating: 4.7,
    delivery: 24,
    cost: 420,
    offer: "Free delivery above ₹499",
    category: "Dry Fruits",
    veg: true,
    image: "photo-1490645935967-10de6ba17061",
    dishes: [
      { id: "medjool-dates", name: "Medjool Dates", description: "Naturally sweet, soft dates selected for snacking.", price: 279, veg: true, popular: true, image: "photo-1490645935967-10de6ba17061" },
      { id: "honey-roasted-cashews", name: "Honey Roasted Cashews", description: "Crunchy cashews coated with a light honey glaze.", price: 299, veg: true, popular: true, image: "photo-1505576399279-565b52d4ac71" },
      { id: "golden-raisins", name: "Golden Raisins", description: "Plump, naturally sweet raisins, ready to enjoy.", price: 159, veg: true, popular: false, image: "photo-1505576399279-565b52d4ac71" },
      { id: "everyday-nut-mix", name: "Everyday Nut Mix", description: "A handy mix of almonds, cashews, and pumpkin seeds.", price: 229, veg: true, popular: false, image: "photo-1511499767150-a48a237f0083" },
    ],
  },
  {
    id: "pizza-parlor",
    name: "Pizza Parlor",
    cuisine: "Pizza · Italian · Family meals",
    rating: 4.6,
    delivery: 27,
    cost: 390,
    offer: "Free dip with every pizza",
    category: "Pizza",
    veg: true,
    image: "photo-1571407970349-bc81e7e96d47",
    dishes: [
      { id: "classic-veggie-pizza", name: "Classic Veggie Pizza", description: "Bell peppers, mushrooms, olives, and mozzarella.", price: 329, veg: true, popular: true, image: "photo-1571407970349-bc81e7e96d47" },
      { id: "spicy-paneer-pizza", name: "Spicy Paneer Pizza", description: "Tandoori paneer, red onion, and a chilli cheese blend.", price: 379, veg: true, popular: true, image: "photo-1513104890138-7c749659a591" },
      { id: "marinara-pizza", name: "Tomato Basil Pizza", description: "Slow-roasted tomatoes, basil, and fresh mozzarella.", price: 299, veg: true, popular: false, image: "photo-1579751626657-72bc17010498" },
      { id: "cheese-sticks", name: "Garlic Cheese Sticks", description: "Baked dough sticks with garlic butter and melted cheese.", price: 159, veg: true, popular: false, image: "photo-1579751626657-72bc17010498" },
    ],
  },
  {
    id: "pizza-pavilion",
    name: "Pizza Pavilion",
    cuisine: "Pizza · Calzones · Italian",
    rating: 4.5,
    delivery: 34,
    cost: 420,
    offer: "20% off on your first order",
    category: "Pizza",
    veg: false,
    image: "photo-1513104890138-7c749659a591",
    dishes: [
      { id: "bbq-chicken-pizza", name: "BBQ Chicken Pizza", description: "Smoky barbecue chicken, red onion, and mozzarella.", price: 429, veg: false, popular: true, image: "photo-1513104890138-7c749659a591" },
      { id: "mushroom-calzone", name: "Mushroom Calzone", description: "Folded pizza filled with mushrooms, ricotta, and herbs.", price: 319, veg: true, popular: true, image: "photo-1571407970349-bc81e7e96d47" },
      { id: "spicy-salami-pizza", name: "Spicy Salami Pizza", description: "Salami, chilli flakes, tomato sauce, and mozzarella.", price: 449, veg: false, popular: false, image: "photo-1579751626657-72bc17010498" },
      { id: "pesto-pasta-side", name: "Pesto Pasta Cup", description: "Pasta tossed with basil pesto and shaved parmesan.", price: 229, veg: true, popular: false, image: "photo-1473093295043-cdd812d0e601" },
    ],
  },
  {
    id: "burger-street",
    name: "Burger Street",
    cuisine: "Burgers · American · Shakes",
    rating: 4.5,
    delivery: 21,
    cost: 300,
    offer: "Free fries with selected burgers",
    category: "Burgers",
    veg: false,
    image: "photo-1568901346375-23c9450c58cd",
    dishes: [
      { id: "classic-cheeseburger", name: "Classic Cheeseburger", description: "Grilled beef patty, cheddar, lettuce, and house sauce.", price: 299, veg: false, popular: true, image: "photo-1568901346375-23c9450c58cd" },
      { id: "spicy-chicken-burger", name: "Spicy Chicken Burger", description: "Crispy chicken, spicy mayo, and crunchy cabbage.", price: 279, veg: false, popular: true, image: "photo-1550547660-d9450f859349" },
      { id: "mushroom-swiss-burger", name: "Mushroom Swiss Burger", description: "Sautéed mushrooms, Swiss cheese, and a toasted bun.", price: 319, veg: false, popular: false, image: "photo-1568901346375-23c9450c58cd" },
      { id: "onion-rings", name: "Crispy Onion Rings", description: "Golden battered onion rings with tangy dipping sauce.", price: 139, veg: true, popular: false, image: "photo-1573080496219-bb080dd4f877" },
    ],
  },
  {
    id: "bun-bros",
    name: "Bun Bros.",
    cuisine: "Smash burgers · Sliders · Fries",
    rating: 4.4,
    delivery: 18,
    cost: 280,
    offer: "Buy 2 sliders, get 1 free",
    category: "Burgers",
    veg: true,
    image: "photo-1550547660-d9450f859349",
    dishes: [
      { id: "double-smash-slider", name: "Double Smash Slider", description: "Two thin grilled patties with cheese in a soft bun.", price: 269, veg: false, popular: true, image: "photo-1550547660-d9450f859349" },
      { id: "crispy-veggie-stack", name: "Crispy Veggie Stack", description: "Crispy vegetable patty with lettuce and tomato relish.", price: 239, veg: true, popular: true, image: "photo-1520072959219-c595dc870360" },
      { id: "chicken-bacon-burger", name: "Chicken Bacon Burger", description: "Grilled chicken, bacon, cheddar, and smoky mayo.", price: 329, veg: false, popular: false, image: "photo-1568901346375-23c9450c58cd" },
      { id: "seasoned-fries", name: "Seasoned Fries", description: "Crisp fries tossed with the house savoury seasoning.", price: 129, veg: true, popular: false, image: "photo-1573080496219-bb080dd4f877" },
    ],
  },
  {
    id: "punjab-pot",
    name: "Punjab Pot",
    cuisine: "North Indian · Curries · Tandoor",
    rating: 4.7,
    delivery: 30,
    cost: 360,
    offer: "Free naan above ₹399",
    category: "North Indian",
    veg: false,
    image: "photo-1585937421612-70a008356fbe",
    dishes: [
      { id: "chicken-tikka-masala", name: "Chicken Tikka Masala", description: "Tandoor-grilled chicken in a creamy spiced tomato gravy.", price: 339, veg: false, popular: true, image: "photo-1603894584373-5ac82b2ae398" },
      { id: "amritsari-chole", name: "Amritsari Chole", description: "Slow-cooked chickpeas with warming Punjabi spices.", price: 229, veg: true, popular: true, image: "photo-1546833999-b9f581a1996d" },
      { id: "tandoori-chicken", name: "Tandoori Chicken", description: "Yogurt-marinated chicken roasted in a clay oven.", price: 369, veg: false, popular: false, image: "photo-1603894584373-5ac82b2ae398" },
      { id: "laccha-paratha", name: "Laccha Paratha", description: "Flaky layered bread cooked on a hot griddle.", price: 59, veg: true, popular: false, image: "photo-1585937421612-70a008356fbe" },
    ],
  },
  {
    id: "curry-leaf-kitchen",
    name: "Curry Leaf Kitchen",
    cuisine: "North Indian · Homestyle · Thalis",
    rating: 4.5,
    delivery: 27,
    cost: 290,
    offer: "15% off homestyle meals",
    category: "North Indian",
    veg: true,
    image: "photo-1546833999-b9f581a1996d",
    dishes: [
      { id: "kadai-paneer", name: "Kadai Paneer", description: "Paneer and peppers tossed in a freshly ground masala.", price: 279, veg: true, popular: true, image: "photo-1631452180519-c014fe946bc7" },
      { id: "rajma-rice", name: "Rajma Chawal", description: "Comforting kidney bean curry served with steamed rice.", price: 199, veg: true, popular: true, image: "photo-1546833999-b9f581a1996d" },
      { id: "veg-kolhapuri", name: "Vegetable Kolhapuri", description: "Mixed vegetables in a rich, gently spiced curry.", price: 249, veg: true, popular: false, image: "photo-1546833999-b9f581a1996d" },
      { id: "tandoori-roti", name: "Tandoori Roti", description: "Whole wheat flatbread baked in a traditional tandoor.", price: 39, veg: true, popular: false, image: "photo-1585937421612-70a008356fbe" },
    ],
  },
  {
    id: "dosa-corner",
    name: "Dosa Corner",
    cuisine: "South Indian · Dosa · Chutneys",
    rating: 4.6,
    delivery: 22,
    cost: 210,
    offer: "Free chutney sampler",
    category: "South Indian",
    veg: true,
    image: "photo-1630383249896-424e482df921",
    dishes: [
      { id: "mysore-masala-dosa", name: "Mysore Masala Dosa", description: "Crisp dosa with red chilli chutney and spiced potato.", price: 189, veg: true, popular: true, image: "photo-1630383249896-424e482df921" },
      { id: "rava-dosa", name: "Crispy Rava Dosa", description: "Lacy semolina dosa with pepper, cumin, and onion.", price: 169, veg: true, popular: true, image: "photo-1630383249896-424e482df921" },
      { id: "lemon-rice", name: "South Indian Lemon Rice", description: "Fluffy rice tempered with lemon, mustard seeds, and peanuts.", price: 149, veg: true, popular: false, image: "photo-1546833999-b9f581a1996d" },
      { id: "coconut-chutney-vada", name: "Vada & Coconut Chutney", description: "Crisp lentil vadas served with fresh coconut chutney.", price: 119, veg: true, popular: false, image: "photo-1601050690597-df0568f70950" },
    ],
  },
  {
    id: "sambar-house",
    name: "Sambar House",
    cuisine: "South Indian · Breakfast · Meals",
    rating: 4.5,
    delivery: 20,
    cost: 190,
    offer: "₹50 off your first order",
    category: "South Indian",
    veg: true,
    image: "photo-1589301760014-d929f3979dbc",
    dishes: [
      { id: "soft-idli-plate", name: "Soft Idli Plate", description: "Steamed rice cakes with sambar and two fresh chutneys.", price: 119, veg: true, popular: true, image: "photo-1589301760014-d929f3979dbc" },
      { id: "bisi-bele-bath", name: "Bisi Bele Bath", description: "A warming rice, lentil, and vegetable dish from Karnataka.", price: 179, veg: true, popular: true, image: "photo-1546833999-b9f581a1996d" },
      { id: "set-dosa", name: "Set Dosa", description: "A pair of soft, spongy dosas served with vegetable saagu.", price: 149, veg: true, popular: false, image: "photo-1630383249896-424e482df921" },
      { id: "curd-rice", name: "Tempered Curd Rice", description: "Cool yogurt rice finished with curry leaves and mustard.", price: 129, veg: true, popular: false, image: "photo-1589301760014-d929f3979dbc" },
    ],
  },
  {
    id: "wok-and-roll",
    name: "Wok & Roll",
    cuisine: "Asian · Chinese · Dumplings",
    rating: 4.5,
    delivery: 26,
    cost: 310,
    offer: "Free spring rolls above ₹399",
    category: "Asian",
    veg: false,
    image: "photo-1512058564366-18510be2db19",
    dishes: [
      { id: "chicken-hakka-noodles", name: "Chicken Hakka Noodles", description: "Wok-tossed noodles with chicken and crisp vegetables.", price: 269, veg: false, popular: true, image: "photo-1585032226651-759b368d7246" },
      { id: "veg-fried-rice", name: "Vegetable Fried Rice", description: "Steamed rice stir-fried with vegetables and spring onion.", price: 219, veg: true, popular: true, image: "photo-1512058564366-18510be2db19" },
      { id: "chicken-dumplings", name: "Chicken Dumplings", description: "Steamed dumplings with a ginger soy dipping sauce.", price: 239, veg: false, popular: false, image: "photo-1563245372-f21724e3856d" },
      { id: "chilli-garlic-tofu", name: "Chilli Garlic Tofu", description: "Crisp tofu tossed in a savoury garlic chilli sauce.", price: 249, veg: true, popular: false, image: "photo-1567188040759-fb8a883dc6d8" },
    ],
  },
  {
    id: "little-bamboo",
    name: "Little Bamboo",
    cuisine: "Asian · Japanese · Rice bowls",
    rating: 4.6,
    delivery: 29,
    cost: 380,
    offer: "Free miso soup with bowls",
    category: "Asian",
    veg: true,
    image: "photo-1512003867696-6d5ce6835040",
    dishes: [
      { id: "teriyaki-tofu-bowl", name: "Teriyaki Tofu Bowl", description: "Sticky teriyaki tofu, rice, and fresh steamed greens.", price: 299, veg: true, popular: true, image: "photo-1512621776951-a57141f2eefd" },
      { id: "vegetable-sushi-roll", name: "Vegetable Sushi Roll", description: "Seasoned rice rolled with cucumber and avocado.", price: 279, veg: true, popular: true, image: "photo-1579871494447-9811cf80d66c" },
      { id: "miso-ramen", name: "Miso Vegetable Ramen", description: "Noodles in a savoury miso broth with seasonal vegetables.", price: 329, veg: true, popular: false, image: "photo-1569718212165-3a8278d5f624" },
      { id: "edamame", name: "Sea Salt Edamame", description: "Steamed young soybeans with a pinch of flaky sea salt.", price: 159, veg: true, popular: false, image: "photo-1512621776951-a57141f2eefd" },
    ],
  },
  {
    id: "fresh-field",
    name: "Fresh Field",
    cuisine: "Healthy · Grain bowls · Fresh juices",
    rating: 4.7,
    delivery: 23,
    cost: 310,
    offer: "Free juice with two bowls",
    category: "Healthy",
    veg: true,
    image: "photo-1512621776951-a57141f2eefd",
    dishes: [
      { id: "quinoa-rainbow-bowl", name: "Rainbow Quinoa Bowl", description: "Quinoa, roasted vegetables, greens, and lemon tahini.", price: 329, veg: true, popular: true, image: "photo-1512621776951-a57141f2eefd" },
      { id: "lentil-avocado-salad", name: "Lentil Avocado Salad", description: "Green lentils, ripe avocado, cucumber, and herbs.", price: 289, veg: true, popular: true, image: "photo-1540420773420-3366772f4999" },
      { id: "green-goddess-wrap", name: "Green Goddess Wrap", description: "Spinach, hummus, crunchy greens, and herb dressing.", price: 239, veg: true, popular: false, image: "photo-1540420773420-3366772f4999" },
      { id: "fresh-orange-juice", name: "Fresh Orange Juice", description: "Freshly squeezed oranges served chilled.", price: 149, veg: true, popular: false, image: "photo-1505252585461-04db1eb84625" },
    ],
  },
  {
    id: "daily-greens",
    name: "Daily Greens",
    cuisine: "Healthy · Plant-based · Salads",
    rating: 4.6,
    delivery: 25,
    cost: 290,
    offer: "15% off plant-based picks",
    category: "Healthy",
    veg: true,
    image: "photo-1540420773420-3366772f4999",
    dishes: [
      { id: "roasted-sweet-potato-bowl", name: "Roasted Sweet Potato Bowl", description: "Sweet potato, greens, chickpeas, and a creamy herb dip.", price: 299, veg: true, popular: true, image: "photo-1512621776951-a57141f2eefd" },
      { id: "classic-hummus-salad", name: "Hummus Garden Salad", description: "Crisp vegetables, house hummus, and warm pita pieces.", price: 259, veg: true, popular: true, image: "photo-1540420773420-3366772f4999" },
      { id: "tomato-avocado-toast", name: "Tomato Avocado Toast", description: "Sourdough topped with avocado, tomato, and cracked pepper.", price: 229, veg: true, popular: false, image: "photo-1525351484163-7529414344d8" },
      { id: "pineapple-smoothie", name: "Pineapple Mint Smoothie", description: "Refreshing pineapple blended with mint and yogurt.", price: 169, veg: true, popular: false, image: "photo-1505252585461-04db1eb84625" },
    ],
  },
  {
    id: "oven-and-icing",
    name: "Oven & Icing",
    cuisine: "Desserts · Cookies · Celebration cakes",
    rating: 4.7,
    delivery: 28,
    cost: 280,
    offer: "Free candle with celebration cakes",
    category: "Desserts",
    veg: true,
    image: "photo-1578985545062-69928b1d9587",
    dishes: [
      { id: "vanilla-cupcake-box", name: "Vanilla Cupcake Box", description: "Four fluffy vanilla cupcakes with whipped buttercream.", price: 249, veg: true, popular: true, image: "photo-1578985545062-69928b1d9587" },
      { id: "double-chocolate-brownie", name: "Double Chocolate Brownie", description: "A rich cocoa brownie with chunks of dark chocolate.", price: 159, veg: true, popular: true, image: "photo-1606313564200-e75d5e30476c" },
      { id: "butter-shortbread", name: "Butter Shortbread", description: "Crumbly, buttery biscuits baked fresh each morning.", price: 119, veg: true, popular: false, image: "photo-1499636136210-6f4ee915583e" },
      { id: "mango-cream-cake", name: "Mango Cream Slice", description: "Soft sponge layered with mango cream and fresh fruit.", price: 219, veg: true, popular: false, image: "photo-1578985545062-69928b1d9587" },
    ],
  },
  {
    id: "sweet-treat-bakery",
    name: "Sweet Treat Bakery",
    cuisine: "Desserts · Donuts · Fresh bakes",
    rating: 4.6,
    delivery: 24,
    cost: 230,
    offer: "Buy 3 donuts, pay for 2",
    category: "Desserts",
    veg: true,
    image: "photo-1551024506-0bccd828d307",
    dishes: [
      { id: "glazed-donut", name: "Classic Glazed Donut", description: "Soft, fluffy donut dipped in a light vanilla glaze.", price: 89, veg: true, popular: true, image: "photo-1551024506-0bccd828d307" },
      { id: "chocolate-eclair", name: "Chocolate Eclair", description: "Choux pastry filled with vanilla cream and chocolate.", price: 149, veg: true, popular: true, image: "photo-1488477181946-6428a0291777" },
      { id: "apple-pie-slice", name: "Apple Pie Slice", description: "Cinnamon apples baked under a golden flaky crust.", price: 179, veg: true, popular: false, image: "photo-1509440159596-0249088772ff" },
      { id: "jam-cookie", name: "Raspberry Jam Cookie", description: "Buttery cookie with a bright raspberry jam center.", price: 99, veg: true, popular: false, image: "photo-1499636136210-6f4ee915583e" },
    ],
  },
  {
    id: "burrito-bay",
    name: "Burrito Bay",
    cuisine: "Mexican · Burritos · Rice bowls",
    rating: 4.6,
    delivery: 27,
    cost: 320,
    offer: "Free chips with every burrito",
    category: "Mexican",
    veg: true,
    image: "photo-1565299585323-38d6b0865b47",
    dishes: [
      { id: "chicken-rice-burrito", name: "Chicken Rice Burrito", description: "Grilled chicken, rice, beans, and salsa in a warm tortilla.", price: 299, veg: false, popular: true, image: "photo-1565299585323-38d6b0865b47" },
      { id: "black-bean-bowl", name: "Black Bean Burrito Bowl", description: "Black beans, rice, corn salsa, and fresh guacamole.", price: 269, veg: true, popular: true, image: "photo-1512621776951-a57141f2eefd" },
      { id: "cheese-quesadilla", name: "Three Cheese Quesadilla", description: "Toasted tortilla filled with melted cheese and mild salsa.", price: 229, veg: true, popular: false, image: "photo-1565299585323-38d6b0865b47" },
      { id: "corn-chips-salsa", name: "Corn Chips & Salsa", description: "Crunchy tortilla chips with fresh tomato salsa.", price: 149, veg: true, popular: false, image: "photo-1513456852971-30c0b8199d4d" },
    ],
  },
  {
    id: "salsa-station",
    name: "Salsa Station",
    cuisine: "Mexican · Tacos · Street food",
    rating: 4.5,
    delivery: 25,
    cost: 290,
    offer: "₹75 off orders above ₹399",
    category: "Mexican",
    veg: false,
    image: "photo-1551504734-5ee1c4a1479b",
    dishes: [
      { id: "chicken-street-tacos", name: "Chicken Street Tacos", description: "Three soft tacos with seasoned chicken, onion, and salsa.", price: 279, veg: false, popular: true, image: "photo-1551504734-5ee1c4a1479b" },
      { id: "roasted-veggie-tacos", name: "Roasted Veggie Tacos", description: "Soft tacos with roasted peppers, beans, and avocado.", price: 229, veg: true, popular: true, image: "photo-1565299585323-38d6b0865b47" },
      { id: "cheesy-nachos", name: "Cheesy Nachos", description: "Crisp corn chips covered in warm cheese and salsa.", price: 199, veg: true, popular: false, image: "photo-1513456852971-30c0b8199d4d" },
      { id: "cinnamon-churro-bites", name: "Churro Bites", description: "Warm cinnamon-dusted churros with chocolate dip.", price: 159, veg: true, popular: false, image: "photo-1624371414361-e670edf4898d" },
    ],
  },
  {
    id: "cacao-craft",
    name: "Cacao Craft",
    cuisine: "Chocolate · Fudge · Handmade sweets",
    rating: 4.8,
    delivery: 24,
    cost: 320,
    offer: "10% off handmade chocolate",
    category: "Chocolate",
    veg: true,
    image: "photo-1511381939415-e44015466834",
    dishes: [
      { id: "sea-salt-dark-bar", name: "Sea Salt Dark Chocolate Bar", description: "Bittersweet chocolate finished with flaky sea salt.", price: 199, veg: true, popular: true, image: "photo-1526081347589-7fa3cb41b4b2" },
      { id: "peanut-butter-cups", name: "Peanut Butter Cups", description: "Creamy peanut butter tucked inside smooth chocolate.", price: 189, veg: true, popular: true, image: "photo-1511381939415-e44015466834" },
      { id: "chocolate-fudge-squares", name: "Chocolate Fudge Squares", description: "Dense, soft chocolate fudge cut into bite-size squares.", price: 169, veg: true, popular: false, image: "photo-1606313564200-e75d5e30476c" },
      { id: "white-chocolate-berries", name: "White Chocolate Berries", description: "Sweet white chocolate with a bright dried berry mix.", price: 219, veg: true, popular: false, image: "photo-1526081347589-7fa3cb41b4b2" },
    ],
  },
  {
    id: "chocolate-house",
    name: "The Chocolate House",
    cuisine: "Chocolate · Brownies · Hot cocoa",
    rating: 4.6,
    delivery: 22,
    cost: 270,
    offer: "Free hot cocoa above ₹399",
    category: "Chocolate",
    veg: true,
    image: "photo-1606313564200-e75d5e30476c",
    dishes: [
      { id: "fudgy-walnut-brownie", name: "Fudgy Walnut Brownie", description: "Rich chocolate brownie with toasted walnut pieces.", price: 179, veg: true, popular: true, image: "photo-1606313564200-e75d5e30476c" },
      { id: "chocolate-dipped-wafer", name: "Chocolate Dipped Wafers", description: "Crisp wafer fingers coated in milk chocolate.", price: 149, veg: true, popular: true, image: "photo-1526081347589-7fa3cb41b4b2" },
      { id: "hot-cocoa", name: "Classic Hot Cocoa", description: "Warm cocoa made with real chocolate and steamed milk.", price: 159, veg: true, popular: false, image: "photo-1511381939415-e44015466834" },
      { id: "chocolate-fondant", name: "Chocolate Fondant", description: "Warm chocolate dessert with a soft molten middle.", price: 219, veg: true, popular: false, image: "photo-1606313564200-e75d5e30476c" },
    ],
  },
  {
    id: "scoop-and-smile",
    name: "Scoop & Smile",
    cuisine: "Ice cream · Cones · Sundaes",
    rating: 4.6,
    delivery: 18,
    cost: 210,
    offer: "Second scoop half price",
    category: "Ice Cream",
    veg: true,
    image: "photo-1560008581-09826d1de69e",
    dishes: [
      { id: "cookies-cream-cone", name: "Cookies & Cream Cone", description: "Vanilla ice cream folded with crunchy chocolate cookies.", price: 129, veg: true, popular: true, image: "photo-1560008581-09826d1de69e" },
      { id: "caramel-pecan-sundae", name: "Caramel Pecan Sundae", description: "Creamy scoops with caramel sauce and toasted pecans.", price: 199, veg: true, popular: true, image: "photo-1563805042-7684c019e1cb" },
      { id: "lemon-sorbet", name: "Lemon Sorbet", description: "A bright, refreshing dairy-free lemon sorbet.", price: 119, veg: true, popular: false, image: "photo-1501446529957-6226bd447c46" },
      { id: "chocolate-milkshake", name: "Chocolate Milkshake", description: "Chocolate ice cream blended into a thick chilled shake.", price: 179, veg: true, popular: false, image: "photo-1572490122747-3968b75cc699" },
    ],
  },
  {
    id: "frozen-fables",
    name: "Frozen Fables",
    cuisine: "Ice cream · Gelato · Waffles",
    rating: 4.7,
    delivery: 21,
    cost: 260,
    offer: "Free waffle with two scoops",
    category: "Ice Cream",
    veg: true,
    image: "photo-1563805042-7684c019e1cb",
    dishes: [
      { id: "strawberry-gelato", name: "Strawberry Gelato", description: "Smooth strawberry gelato with real fruit pieces.", price: 149, veg: true, popular: true, image: "photo-1501446529957-6226bd447c46" },
      { id: "brownie-ice-cream-waffle", name: "Brownie Ice Cream Waffle", description: "Warm waffle topped with brownie bites and vanilla scoops.", price: 249, veg: true, popular: true, image: "photo-1563805042-7684c019e1cb" },
      { id: "mango-sorbet", name: "Mango Sorbet", description: "Chilled fruit sorbet made with sweet ripe mango.", price: 129, veg: true, popular: false, image: "photo-1501446529957-6226bd447c46" },
      { id: "mint-chocolate-chip", name: "Mint Chocolate Chip", description: "Cool mint ice cream with dark chocolate chips.", price: 139, veg: true, popular: false, image: "photo-1560008581-09826d1de69e" },
    ],
  },
  {
    id: "nut-harvest",
    name: "Nut Harvest",
    cuisine: "Dry fruits · Roasted nuts · Seeds",
    rating: 4.6,
    delivery: 23,
    cost: 390,
    offer: "Free snack pouch above ₹499",
    category: "Dry Fruits",
    veg: true,
    image: "photo-1505576399279-565b52d4ac71",
    dishes: [
      { id: "salted-pistachios", name: "Salted Pistachios", description: "Roasted pistachios with a light sprinkle of sea salt.", price: 299, veg: true, popular: true, image: "photo-1505576399279-565b52d4ac71" },
      { id: "dried-apricots", name: "Dried Turkish Apricots", description: "Soft, tangy dried apricots packed for easy snacking.", price: 249, veg: true, popular: true, image: "photo-1490645935967-10de6ba17061" },
      { id: "pumpkin-sunflower-seeds", name: "Pumpkin & Sunflower Seeds", description: "A crunchy mix of pumpkin and sunflower seeds.", price: 179, veg: true, popular: false, image: "photo-1511499767150-a48a237f0083" },
      { id: "cranberry-almond-mix", name: "Cranberry Almond Mix", description: "Tart dried cranberries mixed with crunchy almonds.", price: 229, veg: true, popular: false, image: "photo-1490645935967-10de6ba17061" },
    ],
  },
  {
    id: "dry-fruit-depot",
    name: "Dry Fruit Depot",
    cuisine: "Dry fruits · Nuts · Healthy snacks",
    rating: 4.5,
    delivery: 25,
    cost: 370,
    offer: "12% off snack mixes",
    category: "Dry Fruits",
    veg: true,
    image: "photo-1511499767150-a48a237f0083",
    dishes: [
      { id: "whole-kashmiri-walnuts", name: "Kashmiri Walnut Kernels", description: "Crunchy walnut halves, carefully selected and packed.", price: 329, veg: true, popular: true, image: "photo-1505576399279-565b52d4ac71" },
      { id: "dried-figs", name: "Soft Dried Figs", description: "Naturally sweet dried figs with a tender bite.", price: 279, veg: true, popular: true, image: "photo-1490645935967-10de6ba17061" },
      { id: "spiced-cashew-mix", name: "Spiced Cashew Mix", description: "Roasted cashews seasoned with a gentle chilli spice.", price: 269, veg: true, popular: false, image: "photo-1505576399279-565b52d4ac71" },
      { id: "trail-snack-box", name: "Trail Snack Box", description: "Portable portions of raisins, almonds, seeds, and dates.", price: 299, veg: true, popular: false, image: "photo-1511499767150-a48a237f0083" },
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
  { name: "Healthy", label: "Healthy Food", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
  { name: "Mexican", icon: "🌮" },
];

const extraDishesByCategory = {
  Pizza: [
    { id: "pizza-extra-margherita", name: "Buffalo Margherita Pizza", description: "Buffalo mozzarella, sweet tomato, and fresh basil.", price: 379, veg: true, popular: false, image: "photo-1579751626657-72bc17010498" },
    { id: "pizza-extra-mediterranean", name: "Mediterranean Olive Pizza", description: "Olives, feta, roasted peppers, and oregano.", price: 399, veg: true, popular: false, image: "photo-1571407970349-bc81e7e96d47" },
    { id: "pizza-extra-chicken", name: "Tandoori Chicken Pizza", description: "Tandoori chicken, onion, and a creamy cheese blend.", price: 449, veg: false, popular: false, image: "photo-1513104890138-7c749659a591" },
    { id: "pizza-extra-corn", name: "Sweet Corn & Pepper Pizza", description: "Golden corn, bell peppers, and mozzarella.", price: 329, veg: true, popular: false, image: "photo-1579751626657-72bc17010498" },
  ],
  Burgers: [
    { id: "burger-extra-veggie", name: "Crispy Garden Burger", description: "Crunchy vegetable patty with lettuce and house sauce.", price: 249, veg: true, popular: false, image: "photo-1520072959219-c595dc870360" },
    { id: "burger-extra-chicken", name: "Grilled Chicken Burger", description: "Juicy grilled chicken, lettuce, and pepper mayo.", price: 299, veg: false, popular: false, image: "photo-1568901346375-23c9450c58cd" },
    { id: "burger-extra-paneer", name: "Tandoori Paneer Burger", description: "Spiced paneer, crisp onions, and mint dressing.", price: 269, veg: true, popular: false, image: "photo-1520072959219-c595dc870360" },
    { id: "burger-extra-mushroom", name: "Mushroom Swiss Burger", description: "Sautéed mushrooms and melted Swiss cheese.", price: 319, veg: false, popular: false, image: "photo-1550547660-d9450f859349" },
  ],
  "North Indian": [
    { id: "north-extra-paneer", name: "Palak Paneer", description: "Soft paneer in a gently spiced spinach gravy.", price: 269, veg: true, popular: false, image: "photo-1631452180519-c014fe946bc7" },
    { id: "north-extra-chicken", name: "Chicken Korma", description: "Tender chicken in a mellow, creamy cashew sauce.", price: 339, veg: false, popular: false, image: "photo-1603894584373-5ac82b2ae398" },
    { id: "north-extra-dal", name: "Yellow Dal Tadka", description: "Comforting lentils finished with cumin and garlic.", price: 189, veg: true, popular: false, image: "photo-1546833999-b9f581a1996d" },
    { id: "north-extra-biryani", name: "Vegetable Dum Biryani", description: "Basmati rice layered with vegetables and warming spices.", price: 259, veg: true, popular: false, image: "photo-1563379091339-03246963d51a" },
  ],
  "South Indian": [
    { id: "south-extra-dosa", name: "Plain Crispy Dosa", description: "Golden, crisp rice-and-lentil dosa with coconut chutney.", price: 119, veg: true, popular: false, image: "photo-1630383249896-424e482df921" },
    { id: "south-extra-idli", name: "Idli & Sambar Combo", description: "Steamed idlis with hearty sambar and fresh chutney.", price: 139, veg: true, popular: false, image: "photo-1589301760014-d929f3979dbc" },
    { id: "south-extra-uttapam", name: "Tomato Onion Uttapam", description: "Soft savoury pancake topped with tomato and onion.", price: 159, veg: true, popular: false, image: "photo-1630383249896-424e482df921" },
    { id: "south-extra-vada", name: "Sambar Vada", description: "Crisp lentil vadas served in warm sambar.", price: 129, veg: true, popular: false, image: "photo-1601050690597-df0568f70950" },
  ],
  Asian: [
    { id: "asian-extra-noodles", name: "Chilli Garlic Noodles", description: "Wok-tossed noodles with vegetables and garlic chilli sauce.", price: 239, veg: true, popular: false, image: "photo-1585032226651-759b368d7246" },
    { id: "asian-extra-rice", name: "Chicken Fried Rice", description: "Wok-fried rice with chicken, egg, and spring onion.", price: 279, veg: false, popular: false, image: "photo-1512058564366-18510be2db19" },
    { id: "asian-extra-dumplings", name: "Vegetable Dumplings", description: "Steamed vegetable dumplings with ginger soy dip.", price: 189, veg: true, popular: false, image: "photo-1563245372-f21724e3856d" },
    { id: "asian-extra-curry", name: "Thai Red Curry", description: "Coconut red curry with vegetables and steamed rice.", price: 299, veg: true, popular: false, image: "photo-1547592180-85f173990554" },
  ],
  Healthy: [
    { id: "healthy-extra-quinoa", name: "Quinoa Power Bowl", description: "Quinoa, roasted vegetables, greens, and lemon dressing.", price: 319, veg: true, popular: false, image: "photo-1512621776951-a57141f2eefd" },
    { id: "healthy-extra-salad", name: "Crunchy Garden Salad", description: "Seasonal greens, cucumber, tomato, and herb vinaigrette.", price: 229, veg: true, popular: false, image: "photo-1540420773420-3366772f4999" },
    { id: "healthy-extra-wrap", name: "Hummus Veggie Wrap", description: "Fresh vegetables and hummus in a whole-grain wrap.", price: 219, veg: true, popular: false, image: "photo-1540420773420-3366772f4999" },
    { id: "healthy-extra-smoothie", name: "Berry Banana Smoothie", description: "Mixed berries and banana blended until smooth.", price: 169, veg: true, popular: false, image: "photo-1505252585461-04db1eb84625" },
  ],
  Desserts: [
    { id: "dessert-extra-cake", name: "Chocolate Fudge Cake", description: "Moist chocolate sponge layered with fudge frosting.", price: 229, veg: true, popular: false, image: "photo-1578985545062-69928b1d9587" },
    { id: "dessert-extra-cookie", name: "Fresh Baked Choc-Chip Cookie", description: "A soft cookie filled with melted chocolate chips.", price: 99, veg: true, popular: false, image: "photo-1499636136210-6f4ee915583e" },
    { id: "dessert-extra-tart", name: "Seasonal Fruit Tart", description: "Buttery pastry, vanilla cream, and seasonal fruit.", price: 189, veg: true, popular: false, image: "photo-1488477181946-6428a0291777" },
    { id: "dessert-extra-donut", name: "Chocolate Glazed Donut", description: "A fluffy donut finished with a smooth chocolate glaze.", price: 89, veg: true, popular: false, image: "photo-1551024506-0bccd828d307" },
  ],
  Mexican: [
    { id: "mexican-extra-tacos", name: "Grilled Veggie Tacos", description: "Soft tortillas filled with grilled peppers and salsa.", price: 219, veg: true, popular: false, image: "photo-1551504734-5ee1c4a1479b" },
    { id: "mexican-extra-burrito", name: "Chicken Burrito", description: "Seasoned chicken, rice, beans, and salsa in a tortilla.", price: 299, veg: false, popular: false, image: "photo-1565299585323-38d6b0865b47" },
    { id: "mexican-extra-nachos", name: "Cheese & Salsa Nachos", description: "Crisp corn chips with warm cheese and fresh salsa.", price: 189, veg: true, popular: false, image: "photo-1513456852971-30c0b8199d4d" },
    { id: "mexican-extra-quesadilla", name: "Bean & Cheese Quesadilla", description: "Toasted tortilla filled with black beans and melted cheese.", price: 229, veg: true, popular: false, image: "photo-1565299585323-38d6b0865b47" },
  ],
  "Dry Fruits": [
    { id: "dryfruit-extra-almonds", name: "Premium Almonds", description: "Crunchy whole almonds packed fresh for snacking.", price: 229, veg: true, popular: false, image: "photo-1505576399279-565b52d4ac71" },
    { id: "dryfruit-extra-cashews", name: "Roasted Cashews", description: "Golden cashews roasted with a hint of sea salt.", price: 269, veg: true, popular: false, image: "photo-1505576399279-565b52d4ac71" },
    { id: "dryfruit-extra-apricots", name: "Dried Apricots", description: "Soft, naturally sweet dried apricots for an easy snack.", price: 199, veg: true, popular: false, image: "photo-1490645935967-10de6ba17061" },
    { id: "dryfruit-extra-trailmix", name: "Everyday Trail Mix", description: "A handy mix of dried fruit, seeds, and crunchy nuts.", price: 179, veg: true, popular: false, image: "photo-1511499767150-a48a237f0083" },
  ],
};

const flashCatalogCategories = [
  { filter: "All items", label: "All items", icon: "✨" },
  { filter: "Fruits", label: "Fresh Fruits", icon: "🍎" },
  { filter: "Vegetables", label: "Fresh Vegetables", icon: "🥬" },
  { filter: "Dry Fruits", label: "Dry Fruits", icon: "🥜" },
  { filter: "Chocolates", label: "Chocolates", icon: "🍫" },
  { filter: "Cakes", label: "Cakes", icon: "🍰" },
  { filter: "Ice Creams", label: "Ice Creams", icon: "🍨" },
  { filter: "Dairy Products", label: "Dairy Products", icon: "🧀" },
  { filter: "Milk & Eggs", label: "Milk & Eggs", icon: "🥚" },
  { filter: "Bakery", label: "Bakery", icon: "🥖" },
  { filter: "Snacks & Namkeen", label: "Snacks & Namkeen", icon: "🥨" },
  { filter: "Cold Drinks & Juices", label: "Cold Drinks & Juices", icon: "🧃" },
  { filter: "Rice & Dals", label: "Rice & Dals", icon: "🍚" },
  { filter: "Atta & Flour", label: "Atta & Flour", icon: "🌾" },
  { filter: "Cooking Oil", label: "Cooking Oil", icon: "🫒" },
  { filter: "Spices & Masalas", label: "Spices & Masalas", icon: "🌶️" },
  { filter: "Biscuits & Cookies", label: "Biscuits & Cookies", icon: "🍪" },
  { filter: "Breakfast & Cereals", label: "Breakfast & Cereals", icon: "🥣" },
  { filter: "Personal Care", label: "Personal Care", icon: "🧴" },
  { filter: "Household Essentials", label: "Household Essentials", icon: "🏠" },
  { filter: "Cleaning Products", label: "Cleaning Products", icon: "🧹" },
  { filter: "Baby Care", label: "Baby Care", icon: "🍼" },
  { filter: "Frozen Foods", label: "Frozen Foods", icon: "🧊" },
  { filter: "Sweets & Desserts", label: "Sweets & Desserts", icon: "🍬" },
];

const flashVegetableProducts = [
  { id: "flash-vegetables-2", category: "VEGETABLES", name: "Tomato", teluguName: "టమాటా", image: "/assets/flash-vegetables/tomato.jpg", weight: "500 g", price: 32, originalPrice: 40, discount: "20% OFF" },
  { id: "flash-vegetables-3", category: "VEGETABLES", name: "Onion", teluguName: "ఉల్లిపాయ", image: "/assets/flash-vegetables/onion.jpg", weight: "1 kg", price: 32, originalPrice: 40, discount: "20% OFF" },
  { id: "flash-vegetables-1", category: "VEGETABLES", name: "Potato", teluguName: "బంగాళాదుంప", image: "/assets/flash-vegetables/potato.jpg", weight: "1 kg", price: 26, originalPrice: 32, discount: "19% OFF" },
  { id: "flash-vegetables-9", category: "VEGETABLES", name: "Brinjal", teluguName: "వంకాయ", image: "/assets/flash-vegetables/brinjal.jpg", weight: "500 g", price: 32, originalPrice: 40, discount: "20% OFF" },
  { id: "flash-vegetables-10", category: "VEGETABLES", name: "Lady Finger", teluguName: "బెండకాయ", image: "/assets/flash-vegetables/lady-finger.jpg", weight: "500 g", price: 36, originalPrice: 45, discount: "20% OFF" },
  { id: "flash-vegetables-13", category: "VEGETABLES", name: "Bitter Gourd", teluguName: "కాకరకాయ", image: "/assets/flash-vegetables/bitter-gourd.jpg", weight: "500 g", price: 39, originalPrice: 49, discount: "20% OFF" },
  { id: "flash-vegetables-14", category: "VEGETABLES", name: "Bottle Gourd", teluguName: "సొరకాయ", image: "/assets/flash-vegetables/bottle-gourd.jpg", weight: "1 kg", price: 30, originalPrice: 38, discount: "21% OFF" },
  { id: "flash-vegetables-15", category: "VEGETABLES", name: "Ridge Gourd", teluguName: "బీరకాయ", image: "/assets/flash-vegetables/ridge-gourd.jpg", weight: "500 g", price: 36, originalPrice: 45, discount: "20% OFF" },
  { id: "flash-vegetables-16", category: "VEGETABLES", name: "Snake Gourd", teluguName: "పొట్లకాయ", image: "/assets/flash-vegetables/snake-gourd.jpg", weight: "500 g", price: 34, originalPrice: 42, discount: "19% OFF" },
  { id: "flash-vegetables-17", category: "VEGETABLES", name: "Drumstick", teluguName: "మునగకాయ", image: "/assets/flash-vegetables/drumstick.jpg", weight: "500 g", price: 45, originalPrice: 55, discount: "18% OFF" },
  { id: "flash-vegetables-4", category: "VEGETABLES", name: "Carrot", teluguName: "క్యారెట్", image: "/assets/flash-vegetables/carrot.jpg", weight: "500 g", price: 36, originalPrice: 45, discount: "20% OFF" },
  { id: "flash-vegetables-19", category: "VEGETABLES", name: "Beetroot", teluguName: "బీట్‌రూట్", image: "/assets/flash-vegetables/beetroot.jpg", weight: "500 g", price: 34, originalPrice: 42, discount: "19% OFF" },
  { id: "flash-vegetables-18", category: "VEGETABLES", name: "Radish", teluguName: "ముల్లంగి", image: "/assets/flash-vegetables/radish.jpg", weight: "500 g", price: 28, originalPrice: 35, discount: "20% OFF" },
  { id: "flash-vegetables-5", category: "VEGETABLES", name: "Cabbage", teluguName: "క్యాబేజీ", image: "/assets/flash-vegetables/cabbage.jpg", weight: "1 kg", price: 29, originalPrice: 36, discount: "19% OFF" },
  { id: "flash-vegetables-6", category: "VEGETABLES", name: "Cauliflower", teluguName: "కాలీఫ్లవర్", image: "/assets/flash-vegetables/cauliflower.jpg", weight: "500 g", price: 39, originalPrice: 48, discount: "19% OFF" },
  { id: "flash-vegetables-30", category: "VEGETABLES", name: "Green Chilli", teluguName: "పచ్చిమిర్చి", image: "/assets/flash-vegetables/green-chilli.jpg", weight: "500 g", price: 24, originalPrice: 30, discount: "20% OFF" },
  { id: "flash-vegetables-35", category: "VEGETABLES", name: "Coriander Leaves", teluguName: "కొత్తిమీర", image: "/assets/flash-vegetables/coriander-leaves.jpg", weight: "500 g", price: 16, originalPrice: 20, discount: "20% OFF" },
  { id: "flash-vegetables-8", category: "VEGETABLES", name: "Spinach", teluguName: "పాలకూర", image: "/assets/flash-vegetables/spinach.jpg", weight: "500 g", price: 24, originalPrice: 30, discount: "20% OFF" },
  { id: "flash-vegetables-12", category: "VEGETABLES", name: "Pumpkin", teluguName: "గుమ్మడికాయ", image: "/assets/flash-vegetables/pumpkin.jpg", weight: "1 kg", price: 34, originalPrice: 42, discount: "19% OFF" },
  { id: "flash-vegetables-27", category: "VEGETABLES", name: "Cluster Beans", teluguName: "గోరుచిక్కుడు", image: "/assets/flash-vegetables/cluster-beans.jpg", weight: "500 g", price: 44, originalPrice: 55, discount: "20% OFF" },
  { id: "flash-vegetables-78", category: "VEGETABLES", name: "Ivy Gourd", teluguName: "దొండకాయ", image: "/assets/flash-vegetables/ivy-gourd.jpg", weight: "500 g", price: 34, originalPrice: 42, discount: "19% OFF" },
  { id: "flash-vegetables-11", category: "VEGETABLES", name: "Cucumber", teluguName: "దోసకాయ", image: "/assets/flash-vegetables/cucumber.jpg", weight: "500 g", price: 28, originalPrice: 35, discount: "20% OFF" },
  { id: "flash-vegetables-21", category: "VEGETABLES", name: "Sweet Potato", teluguName: "చిలగడదుంప", image: "/assets/flash-vegetables/sweet-potato.jpg", weight: "500 g", price: 39, originalPrice: 49, discount: "20% OFF" },
  { id: "flash-vegetables-25", category: "VEGETABLES", name: "Green Peas", teluguName: "పచ్చి బఠాణీలు", image: "/assets/flash-vegetables/green-peas.jpg", weight: "500 g", price: 55, originalPrice: 69, discount: "20% OFF" },
  { id: "flash-vegetables-80", category: "VEGETABLES", name: "Raw Banana", teluguName: "అరటికాయ", image: "/assets/flash-vegetables/raw-banana.jpg", weight: "1 kg", price: 29, originalPrice: 36, discount: "19% OFF" },
  { id: "flash-vegetables-23", category: "VEGETABLES", name: "Taro Root", teluguName: "చామదుంప", image: "/assets/flash-vegetables/taro-root.jpg", weight: "500 g", price: 36, originalPrice: 45, discount: "20% OFF" },
  { id: "flash-vegetables-29", category: "VEGETABLES", name: "Capsicum", teluguName: "క్యాప్సికమ్", image: "/assets/flash-vegetables/capsicum.jpg", weight: "500 g", price: 47, originalPrice: 59, discount: "20% OFF" },
  { id: "flash-vegetables-26", category: "VEGETABLES", name: "French Beans", teluguName: "ఫ్రెంచ్ బీన్స్", image: "/assets/flash-vegetables/french-beans.jpg", weight: "500 g", price: 36, originalPrice: 45, discount: "20% OFF" },
  { id: "flash-vegetables-22", category: "VEGETABLES", name: "Yam", teluguName: "కందగడ్డ", image: "/assets/flash-vegetables/yam.jpg", weight: "500 g", price: 44, originalPrice: 55, discount: "20% OFF" },
  { id: "flash-vegetable-yellow-pumpkin", category: "VEGETABLES", name: "Yellow Pumpkin", teluguName: "పసుపు గుమ్మడికాయ", image: "/assets/flash-vegetables/yellow-pumpkin.jpg", weight: "1 kg", price: 36, originalPrice: 46, discount: "22% OFF" },
];

const flashExtraGroceryProducts = [
  { name: "Fresh Paneer", flashCategory: "Dairy Products", weight: "200 g", price: 79, originalPrice: 89, imageSearchTerm: "fresh paneer cheese" },
  { name: "Thick Curd", flashCategory: "Dairy Products", weight: "400 g", price: 42, originalPrice: 50, imageSearchTerm: "indian curd yogurt dahi" },
  { name: "Salted Butter", flashCategory: "Dairy Products", weight: "100 g", price: 54, originalPrice: 60, imageSearchTerm: "butter block dairy" },
  { name: "Toned Milk", flashCategory: "Milk & Eggs", weight: "1 L", price: 58, originalPrice: 64, imageSearchTerm: "milk bottle glass" },
  { name: "Farm Fresh Eggs", flashCategory: "Milk & Eggs", weight: "6 pcs", price: 54, originalPrice: 66, imageSearchTerm: "fresh brown eggs carton" },
  { name: "Whole Wheat Bread", flashCategory: "Bakery", weight: "400 g", price: 42, originalPrice: 50, imageSearchTerm: "whole wheat bread loaf" },
  { name: "Soft Milk Pav", flashCategory: "Bakery", weight: "6 pcs", price: 35, originalPrice: 42, imageSearchTerm: "fresh bread rolls pav" },
  { name: "Masala Makhana", flashCategory: "Snacks & Namkeen", weight: "80 g", price: 69, originalPrice: 89, imageSearchTerm: "roasted makhana fox nuts snack" },
  { name: "Aloo Bhujia", flashCategory: "Snacks & Namkeen", weight: "200 g", price: 48, originalPrice: 55, imageSearchTerm: "indian aloo bhujia namkeen" },
  { name: "Mango Fruit Drink", flashCategory: "Cold Drinks & Juices", weight: "1 L", price: 95, originalPrice: 110, imageSearchTerm: "mango juice bottle" },
  { name: "Fresh Orange Juice", flashCategory: "Cold Drinks & Juices", weight: "500 ml", price: 89, originalPrice: 105, imageSearchTerm: "fresh orange juice bottle" },
  { name: "Sona Masoori Rice", flashCategory: "Rice & Dals", weight: "1 kg", price: 79, originalPrice: 92, imageSearchTerm: "sona masoori rice grains" },
  { name: "Toor Dal", flashCategory: "Rice & Dals", weight: "1 kg", price: 139, originalPrice: 159, imageSearchTerm: "toor dal pigeon peas lentils" },
  { name: "Chakki Fresh Atta", flashCategory: "Atta & Flour", weight: "1 kg", price: 54, originalPrice: 62, imageSearchTerm: "whole wheat flour atta" },
  { name: "Besan Gram Flour", flashCategory: "Atta & Flour", weight: "500 g", price: 49, originalPrice: 58, imageSearchTerm: "gram flour besan bowl" },
  { name: "Sunflower Cooking Oil", flashCategory: "Cooking Oil", weight: "1 L", price: 139, originalPrice: 159, imageSearchTerm: "sunflower cooking oil bottle" },
  { name: "Cold Pressed Groundnut Oil", flashCategory: "Cooking Oil", weight: "1 L", price: 189, originalPrice: 215, imageSearchTerm: "groundnut oil bottle peanuts" },
  { name: "Turmeric Powder", flashCategory: "Spices & Masalas", weight: "100 g", price: 34, originalPrice: 40, imageSearchTerm: "turmeric powder spice" },
  { name: "Garam Masala", flashCategory: "Spices & Masalas", weight: "100 g", price: 59, originalPrice: 69, imageSearchTerm: "garam masala spice powder" },
  { name: "Classic Marie Biscuits", flashCategory: "Biscuits & Cookies", weight: "250 g", price: 34, originalPrice: 40, imageSearchTerm: "marie biscuits cookies" },
  { name: "Choco Chip Cookies", flashCategory: "Biscuits & Cookies", weight: "150 g", price: 69, originalPrice: 80, imageSearchTerm: "chocolate chip cookies" },
  { name: "Fruit & Nut Muesli", flashCategory: "Breakfast & Cereals", weight: "400 g", price: 179, originalPrice: 210, imageSearchTerm: "fruit nut muesli cereal bowl" },
  { name: "Crunchy Corn Flakes", flashCategory: "Breakfast & Cereals", weight: "500 g", price: 129, originalPrice: 149, imageSearchTerm: "corn flakes breakfast cereal" },
  { name: "Aloe Vera Body Wash", flashCategory: "Personal Care", weight: "250 ml", price: 129, originalPrice: 149, imageSearchTerm: "aloe vera body wash bottle" },
  { name: "Nourishing Shampoo", flashCategory: "Personal Care", weight: "340 ml", price: 179, originalPrice: 205, imageSearchTerm: "shampoo bottle personal care" },
  { name: "Soft Facial Tissues", flashCategory: "Household Essentials", weight: "1 pack", price: 49, originalPrice: 59, imageSearchTerm: "facial tissues box" },
  { name: "Kitchen Paper Towels", flashCategory: "Household Essentials", weight: "2 rolls", price: 89, originalPrice: 105, imageSearchTerm: "kitchen paper towels rolls" },
  { name: "Lemon Floor Cleaner", flashCategory: "Cleaning Products", weight: "1 L", price: 115, originalPrice: 135, imageSearchTerm: "floor cleaner bottle" },
  { name: "Dishwash Liquid", flashCategory: "Cleaning Products", weight: "500 ml", price: 99, originalPrice: 115, imageSearchTerm: "dishwashing liquid bottle" },
  { name: "Baby Diaper Pants", flashCategory: "Baby Care", weight: "5 pcs", price: 149, originalPrice: 175, imageSearchTerm: "baby diaper pants pack" },
  { name: "Gentle Baby Wipes", flashCategory: "Baby Care", weight: "72 wipes", price: 99, originalPrice: 115, imageSearchTerm: "baby wipes pack" },
  { name: "Frozen Green Peas", flashCategory: "Frozen Foods", weight: "500 g", price: 79, originalPrice: 95, imageSearchTerm: "frozen green peas bag" },
  { name: "Veggie Nuggets", flashCategory: "Frozen Foods", weight: "250 g", price: 119, originalPrice: 139, imageSearchTerm: "frozen vegetable nuggets" },
  { name: "Gulab Jamun", flashCategory: "Sweets & Desserts", weight: "250 g", price: 99, originalPrice: 115, imageSearchTerm: "indian gulab jamun dessert" },
  { name: "Kaju Katli", flashCategory: "Sweets & Desserts", weight: "200 g", price: 179, originalPrice: 205, imageSearchTerm: "kaju katli indian sweet" },
].map((product, index) => ({
  ...product,
  id: `flash-grocery-${product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  description: `${product.name}, carefully selected for your home.`,
  veg: true,
  image: "",
  bestseller: index < 8,
  recentlyAdded: index >= 30,
}));

const flashFruitNames = [
  "Apple", "Banana", "Mango", "Orange", "Grapes", "Watermelon", "Papaya", "Pineapple", "Pomegranate", "Guava",
  "Pear", "Sweet Lime", "Dragon Fruit", "Jackfruit", "Lychee", "Coconut", "Lemon", "Custard Apple", "Sapodilla", "Jamun",
  "Muskmelon", "Indian Gooseberry", "Dates", "Kiwi",
];

const flashImageSearchTerms = {
  Apple: "fresh red apples fruit",
  Banana: "fresh yellow bananas",
  Mango: "indian mango fruit",
  Orange: "fresh oranges fruit",
  Grapes: "fresh grapes bunch",
  Watermelon: "whole fresh watermelon",
  Papaya: "fresh papaya fruit",
  Pineapple: "whole pineapple fruit",
  Pomegranate: "fresh pomegranate fruit",
  Guava: "fresh guava fruit",
  Pear: "fresh green pears",
  "Sweet Lime": "mosambi sweet lime fruit",
  "Dragon Fruit": "fresh dragon fruit",
  Jackfruit: "whole jackfruit fruit",
  Lychee: "fresh lychee fruit",
  Coconut: "fresh coconut fruit",
  Lemon: "fresh lemons",
  "Custard Apple": "custard apple sitaphal fruit",
  Sapodilla: "chikoo sapodilla fruit",
  Jamun: "indian jamun black plum fruit",
  Muskmelon: "indian muskmelon fruit",
  "Indian Gooseberry": "amla indian gooseberry fruit",
  Dates: "fresh dates fruit",
  Kiwi: "fresh kiwi fruit",
  Potato: "raw potatoes",
  Tomato: "fresh tomatoes",
  Onion: "whole onions",
  Carrot: "fresh carrots",
  Cabbage: "whole cabbage",
  Cauliflower: "fresh cauliflower head",
  Broccoli: "broccoli florets vegetable",
  Spinach: "spinach leaves",
  "Sweet Potato": "purple sweet potatoes",
  Yam: "yam tuber vegetable",
  Taro: "taro root vegetable",
  Cassava: "cassava root tuber",
  "Green Peas": "green pea pods",
  "French Beans": "green french beans pods",
  "Cluster Beans": "cluster beans vegetable",
  "Broad Beans": "broad bean pods fava",
  Brinjal: "eggplant",
  Okra: "okra",
  Cucumber: "cucumber",
  Pumpkin: "orange green pumpkin",
  "Bitter Gourd": "green bitter gourd",
  "Bottle Gourd": "green bottle gourd",
  "Ridge Gourd": "green ridge gourd",
  "Snake Gourd": "long green snake gourd",
  Fenugreek: "fenugreek leaves",
  Lettuce: "fresh green lettuce",
  Celery: "green celery stalks",
  Asparagus: "green asparagus spears",
  Artichoke: "green globe artichoke",
  "Brussels Sprouts": "fresh brussels sprouts",
  Kale: "curly kale leaves",
  Leek: "fresh leek stalks",
  "Chinese Broccoli": "gai lan chinese broccoli",
  "Lotus Root": "sliced lotus root",
  "Bamboo Shoots": "fresh bamboo shoots",
  "Water Chestnut": "fresh water chestnuts",
  "Bean Sprouts": "fresh bean sprouts",
  Chayote: "green chayote squash",
  Kohlrabi: "green kohlrabi vegetable",
  "Swiss Chard": "fresh swiss chard leaves",
  Arugula: "fresh arugula leaves",
  Watercress: "fresh watercress leaves",
  "Mustard Greens": "fresh mustard greens",
  "Amaranth Leaves": "fresh amaranth leaves",
  "Moringa Leaves": "fresh moringa leaves",
  "Pumpkin Leaves": "fresh pumpkin leaves",
  "Cassava Leaves": "fresh cassava leaves",
  "Collard Greens": "fresh collard greens",
  Plantain: "green cooking plantain bananas",
  "Spring Onion": "fresh spring onions scallions",
  Shallots: "fresh shallots",
  "Red Cabbage": "whole red cabbage",
  "Yellow Squash": "yellow summer squash",
  "Butternut Squash": "whole butternut squash",
  "Acorn Squash": "green acorn squash",
  Jalapeño: "fresh green jalapeno peppers",
  "Poblano Pepper": "fresh poblano peppers",
  "Habanero Pepper": "fresh habanero peppers",
  Tomatillo: "fresh husked green tomatillos",
  Endive: "fresh endive heads",
  "Dandelion Greens": "fresh dandelion greens leaves",
  Sorrel: "fresh sorrel leaves",
  Jicama: "whole jicama root",
  Rutabaga: "whole rutabaga root",
  "Mint Chocolate Chip": "mint chocolate chip ice cream",
  "Chocolate Truffle Box": "assorted chocolate truffles box",
  "Hazelnut Chocolate Bar": "hazelnut chocolate bar",
  "Chocolate Lava Cake": "chocolate lava cake molten center",
};

const flashImageFallbackTerms = {
  "Sweet Potato": "sweet potato",
  Yam: "yam root",
  Taro: "taro root",
  Cassava: "cassava root",
  "Green Peas": "peas pods",
  "French Beans": "french beans",
  "Cluster Beans": "cluster bean",
  "Broad Beans": "broad beans pods",
  Brinjal: "aubergine",
  Okra: "lady fingers okra",
  Cucumber: "green cucumbers",
  Pumpkin: "pumpkin vegetable",
  "Bitter Gourd": "bitter gourd",
  "Bottle Gourd": "bottle gourd",
  "Ridge Gourd": "ridge gourd",
  "Snake Gourd": "snake gourd",
  Fenugreek: "methi leaves",
  "Mint Chocolate Chip": "mint chocolate chip ice cream",
  "Chocolate Truffle Box": "chocolate truffle assortment",
  "Hazelnut Chocolate Bar": "chocolate hazelnut bar",
  "Chocolate Lava Cake": "molten chocolate cake",
};

function expandRestaurantCatalog() {
  const generatedRestaurantNames = [
    "Fresh Plate", "Golden Spoon", "Urban Fork", "Home Table",
    "Basil & Brick", "Happy Taste", "Local Crave", "Spice Lane",
    "The Daily Dish", "Market Kitchen", "Simply Served", "The Tasty Spot",
    "Corner Table", "Flavour House", "Good Food Co.", "Neighbourhood Eats",
  ];
  const catalogImages = [...new Set(restaurants.flatMap((restaurant) => [
    restaurant.image,
    ...restaurant.dishes.map((dish) => dish.image),
  ]))];

  for (const category of categories.filter((item) => item.name !== "All")) {
    const categoryRestaurants = restaurants.filter((restaurant) => restaurant.category === category.name);
    if (!categoryRestaurants.length) continue;
    const usedRestaurantImages = new Set();
    for (const restaurant of categoryRestaurants) {
      if (usedRestaurantImages.has(restaurant.image)) {
        restaurant.image = catalogImages.find((candidate) => !usedRestaurantImages.has(candidate)) || restaurant.image;
      }
      usedRestaurantImages.add(restaurant.image);
    }

    const dishPool = [];
    const dishNames = new Set();
    for (const restaurant of categoryRestaurants) {
      for (const dish of restaurant.dishes) {
        if (dishNames.has(dish.name)) continue;
        dishNames.add(dish.name);
        dishPool.push({ dish, sourceId: restaurant.id });
      }
    }
    for (const dish of extraDishesByCategory[category.name]) {
      if (dishNames.has(dish.name)) continue;
      dishNames.add(dish.name);
      dishPool.push({ dish, sourceId: "category-specials" });
    }
    let variant = 1;
    while (dishPool.length < 20) {
      const { dish } = dishPool[(variant - 1) % dishPool.length];
      dishPool.push({
        sourceId: "category-specials",
        dish: {
          ...dish,
          id: `${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-house-special-${variant}`,
          name: `${dish.name} - House Special ${variant}`,
          description: `${dish.description} Try this house-style variation.`,
          price: Math.round(dish.price * (1 + (variant % 4) * 0.08)),
          popular: false,
        },
      });
      variant += 1;
    }

    for (const restaurant of categoryRestaurants) {
      const originalDishes = restaurant.dishes;
      const selectedDishIds = new Set(originalDishes.map((dish) => dish.id));
      const menu = [...originalDishes];
      for (const { dish, sourceId } of dishPool) {
        if (menu.length === 20) break;
        if (selectedDishIds.has(dish.id)) continue;
        menu.push({ ...dish, id: `${sourceId}-${dish.id}` });
        selectedDishIds.add(dish.id);
      }
      restaurant.dishes = menu;
    }

    const restaurantImages = [...new Set(dishPool.map(({ dish }) => dish.image))];
    for (let index = 0; index < generatedRestaurantNames.length; index += 1) {
      const template = categoryRestaurants[index % categoryRestaurants.length];
      const id = `more-${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index + 1}`;
      const image = restaurantImages.find((candidate) => !usedRestaurantImages.has(candidate))
        || catalogImages.find((candidate) => !usedRestaurantImages.has(candidate))
        || template.image;
      usedRestaurantImages.add(image);
      restaurants.push({
        ...template,
        id,
        name: `${generatedRestaurantNames[index]} ${category.name}`,
        image,
        rating: Math.max(4.2, Math.min(4.9, Number((template.rating + ((index % 5) - 2) * 0.1).toFixed(1)))),
        delivery: 18 + ((index * 7 + template.delivery) % 20),
        cost: Math.max(150, template.cost + ((index % 7) - 3) * 25),
        dishes: dishPool.slice(0, 20).map(({ dish, sourceId }) => ({
          ...dish,
          id: `${id}-${sourceId}-${dish.id}`,
        })),
      });
    }
  }
}

expandRestaurantCatalog();

const flashDryFruitProducts = [...new Map(
  restaurants
    .filter((restaurant) => restaurant.category === "Dry Fruits")
    .flatMap((restaurant) => restaurant.dishes)
    .concat(extraDishesByCategory["Dry Fruits"])
    .map((dish) => [dish.name, dish]),
).values()];

const flashProductsByCategory = [
  ...flashVegetableProducts.map((product, index) => ({
    ...product,
    description: `Fresh ${product.name.toLowerCase()}, picked for your kitchen.`,
    veg: true,
    flashCategory: "Vegetables",
    quantityLabel: product.weight,
    bestseller: index < 6,
    recentlyAdded: index >= 26,
  })),
  ...flashFruitNames.map((name, index) => ({
    id: `fruit-${index + 1}`,
    name,
    description: `Sweet, fresh ${name.toLowerCase()} ready to enjoy.`,
    price: 49 + (index % 8) * 10,
    veg: true,
    image: "",
    flashCategory: "Fruits",
    quantityLabel: index % 3 === 0 ? "1 kg" : "500 g",
    bestseller: index < 8,
    recentlyAdded: index >= flashFruitNames.length - 6,
  })),
  ...flashExtraGroceryProducts,
  ...flashDryFruitProducts.map((dish, index) => ({
    ...dish,
    flashCategory: "Dry Fruits",
    quantityLabel: index % 2 === 0 ? "200 g" : "250 g",
  })),
  ...restaurants
    .filter((restaurant) => restaurant.category === "Desserts")
    .flatMap((restaurant) => restaurant.dishes)
    .filter((dish) => /\b(cake|cheesecake|cupcake)\b/i.test(dish.name))
    .map((dish) => ({ ...dish, flashCategory: "Cakes", quantityLabel: "1 pack" })),
  ...restaurants
    .filter((restaurant) => restaurant.category === "Ice Cream")
    .flatMap((restaurant) => restaurant.dishes)
    .map((dish) => ({ ...dish, flashCategory: "Ice Creams", quantityLabel: "500 ml" })),
  ...restaurants
    .filter((restaurant) => restaurant.category === "Chocolate")
    .flatMap((restaurant) => restaurant.dishes)
    .map((dish) => ({ ...dish, flashCategory: "Chocolates", quantityLabel: "1 pack" })),
];
const flashProducts = [...new Map(
  flashProductsByCategory.map((product) => [`${product.flashCategory}:${product.name}`, product]),
).values()].map((product, index) => {
  const discountPercent = product.discountPercent
    ?? (Math.round((1 - product.price / (product.originalPrice || product.price)) * 100)
      || 10 + (index % 4) * 5);
  const originalPrice = product.originalPrice ?? product.price;
  return {
    ...product,
    id: product.id || `flash-${product.flashCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index + 71}`,
    category: product.category || product.flashCategory.toUpperCase(),
    image: product.image || "",
    imageSearchTerm: product.imageSearchTerm || flashImageSearchTerms[product.name] || product.name,
    imageFallbackSearchTerm: flashImageFallbackTerms[product.name] || `${product.name} ${product.flashCategory.toLowerCase()}`,
    weight: product.weight || product.quantityLabel,
    price: product.discount ? product.price : Math.round(originalPrice * (100 - discountPercent) / 100),
    originalPrice,
    discountPercent,
    discount: product.discount || `${discountPercent}% OFF`,
  };
});

for (let index = restaurants.length - 1; index >= 0; index -= 1) {
  if (["Chocolate", "Ice Cream", "Dry Fruits"].includes(restaurants[index].category)) {
    restaurants.splice(index, 1);
  }
}

restaurants.push({
  id: "cravy-flash",
  name: "Cravy Flash",
  cuisine: "Fresh essentials & sweet treats",
  rating: 4.8,
  delivery: 12,
  cost: 0,
  offer: "Lightning delivery",
  category: "Flash",
  veg: true,
  flashOnly: true,
  image: "photo-1542838132-92c53300491e",
  dishes: flashProducts,
});

const keys = { cart: "crave-cart", favorites: "crave-favorites", location: "crave-location", orders: "crave-orders", account: "crave-account", addresses: "crave-addresses", wishlist: "crave-wishlist" };

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
  account: readStorage(keys.account, null),
  addresses: readStorage(keys.addresses, []),
  wishlist: readStorage(keys.wishlist, []),
  location: readStorage(keys.location, "Indiranagar, Bengaluru"),
  category: "All",
  flashCategory: null,
  flashStoreCategory: "All items",
  flashShelfFilter: null,
  flashSort: "recommended",
  flashOffersOnly: false,
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
const flashImagePromises = new Map();
const usedFlashImageUrls = new Map();
let nextFlashImageSearchAt = 0;
let flashImageSearchQueue = Promise.resolve();
const flashImageObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const product = flashProducts.find((item) => item.id === entry.target.dataset.flashProductImage);
      if (product) loadFlashProductImage(entry.target, product);
    });
  }, { rootMargin: "100px" })
  : null;

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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function foodImage(id, width = 700) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

function flashImagePlaceholder(productName) {
  const safeName = productName.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[character]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#f5f0e9"/><text x="320" y="205" fill="#89847e" font-family="sans-serif" font-size="24" text-anchor="middle">${safeName}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function commonsImageSearchUrl(searchTerm) {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("generator", "search");
  url.searchParams.set("gsrsearch", `filetype:bitmap ${searchTerm}`);
  url.searchParams.set("gsrnamespace", "6");
  url.searchParams.set("gsrlimit", "20");
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url");
  url.searchParams.set("iiurlwidth", "640");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*");
  return url;
}

function searchCommonsForProduct(searchTerm) {
  const search = flashImageSearchQueue.then(async () => {
    const wait = Math.max(0, nextFlashImageSearchAt - Date.now());
    if (wait) await new Promise((resolve) => window.setTimeout(resolve, wait));
    nextFlashImageSearchAt = Date.now() + 350;
    return fetch(commonsImageSearchUrl(searchTerm));
  });
  flashImageSearchQueue = search.catch(() => {});
  return search;
}

async function findFlashProductImage(product, searchTerm, excludedUrl = "") {
  const response = await searchCommonsForProduct(searchTerm);
  if (!response.ok) throw new Error(`Image search failed (${response.status}).`);

  const result = await response.json();
  const pages = Object.values(result.query?.pages || {});
  const searchPhrase = searchTerm.toLowerCase();
  const searchWords = searchPhrase.split(/[^a-z0-9]+/).filter((word) => word.length > 2);
  const candidates = pages
    .map((page) => ({
      title: page.title.toLowerCase(),
      url: page.imageinfo?.[0]?.thumburl,
    }))
    .filter(({ title, url }) => url
      && url !== excludedUrl
      && (!usedFlashImageUrls.has(url) || usedFlashImageUrls.get(url) === product.id)
      && !/\b(collage|illustration|diagram|logo|icon)\b/.test(title)
      && (product.category !== "VEGETABLES"
        || !/\b(salad|bhaji|curry|sauce|recipe|boiled|roasted|fried|grilled|cooked|mixed|assorted|market|shop|yoghurt|yogurt|dressing|dip|soup|pickle|pickled|butterfly|caterpillar|insect|pest|species|karyotype|taxonomy|flower|blossom|etc)\b|\b(with|and|plant)\b|,\s*/.test(title)))
    .map((candidate) => ({
      ...candidate,
      score: (candidate.title.split(/[,.]/, 1)[0].includes(searchPhrase) ? 100 : 0)
        + (candidate.title.includes(searchPhrase) ? 50 : 0)
        + searchWords.filter((word) => candidate.title.includes(word)).length * 10,
    }))
    .filter((candidate) => candidate.score >= 20)
    .sort((first, second) => second.score - first.score);

  return candidates[0]?.url || "";
}

function loadFlashProductImage(image, product, retry = false, excludedUrl = "") {
  const cacheKey = retry ? `${product.id}:retry` : product.id;
  const cachedImage = !retry && product.image;
  if (cachedImage && (!usedFlashImageUrls.has(cachedImage) || usedFlashImageUrls.get(cachedImage) === product.id)) {
    usedFlashImageUrls.set(cachedImage, product.id);
    image.src = cachedImage;
    return;
  }

  if (flashImagePromises.has(cacheKey)) {
    flashImagePromises.get(cacheKey).then((url) => {
      if (url && image.isConnected) image.src = url;
    });
    return;
  }

  const promise = (async () => {
    let url = "";
    try {
      const searchTerm = retry ? product.imageFallbackSearchTerm : product.imageSearchTerm;
      url = await findFlashProductImage(product, searchTerm, excludedUrl);
    } catch (error) {
      console.error(`Image lookup failed for ${product.name}.`, error);
    }

    if (!url && !retry && product.imageFallbackSearchTerm !== product.imageSearchTerm) {
      try {
        url = await findFlashProductImage(product, product.imageFallbackSearchTerm, excludedUrl);
      } catch (error) {
        console.error(`Fallback image lookup failed for ${product.name}.`, error);
      }
    }

    if (url) {
      usedFlashImageUrls.set(url, product.id);
      product.image = url;
    } else {
      console.warn(`No unique matching image was found for ${product.name}.`);
    }
    return url;
  })();

  flashImagePromises.set(cacheKey, promise);
  promise.then((url) => {
    if (url && image.isConnected) image.src = url;
  });
}

function currentRoute() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  return pathname === "/flash" || new URLSearchParams(window.location.search).get("view") === "flash"
    ? "/flash"
    : "/";
}

function renderRoute() {
  const route = currentRoute();
  const isFlashPage = route === "/flash";
  if (isFlashPage && window.location.pathname !== "/flash") {
    window.history.replaceState({}, "", `/flash${window.location.hash}`);
  }

  document.body.classList.toggle("flash-page-mode", isFlashPage);
  $("#flash-page").hidden = !isFlashPage;
  if (isFlashPage) $("#flash-button").setAttribute("aria-current", "page");
  else $("#flash-button").removeAttribute("aria-current");
  document.title = isFlashPage
    ? "Cravy Flash - Delivered in 10–15 minutes"
    : "Cravy - Food delivery, made delightful";
  $("#search-input").placeholder = isFlashPage
    ? "Search for fruits, vegetables, chocolates..."
    : "Search for dishes or restaurants";
  $(".header-search kbd").classList.toggle("hidden", isFlashPage);

  if (isFlashPage) renderFlashCatalog();

  if (window.location.hash) {
    requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  } else {
    window.scrollTo(0, 0);
  }
}

function navigateTo(url) {
  const target = new URL(url, window.location.href);
  const pathname = target.pathname.replace(/\/+$/, "") || "/";
  if (target.origin !== window.location.origin || !["/", "/flash"].includes(pathname)) return;

  window.history.pushState({}, "", `${pathname}${target.search}${target.hash}`);
  renderRoute();
}

function renderCategories() {
  $("#category-list").innerHTML = categories.map((category) => `
    <button class="category-button ${state.category === category.name ? "selected" : ""}" type="button" data-category="${category.name}" aria-pressed="${state.category === category.name}">
      <span class="category-icon">${category.icon}</span><span>${category.label || category.name}</span>
    </button>
  `).join("");
}

function flashMatchesRestaurant(restaurant) {
  return restaurant.dishes.some((dish) => dish.flashCategory === state.flashCategory);
}

function visibleRestaurants() {
  const query = state.query.trim().toLowerCase();
  let matches = restaurants.filter((restaurant) => {
    if (restaurant.flashOnly && !state.flashCategory) return false;
    const dishMatches = restaurant.dishes.some((dish) => `${dish.name} ${dish.description}`.toLowerCase().includes(query));
    const matchesSearch = !query || `${restaurant.name} ${restaurant.cuisine} ${restaurant.category}`.toLowerCase().includes(query) || dishMatches;
    return matchesSearch
      && (state.category === "All" || restaurant.category === state.category)
      && (!state.flashCategory || flashMatchesRestaurant(restaurant))
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
  document.querySelectorAll("[data-flash-category]").forEach((button) => {
    const selected = state.flashCategory === button.dataset.flashCategory;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  restaurantGrid.innerHTML = matches.map((restaurant) => {
    const dish = restaurant.dishes.find((item) => item.popular) || restaurant.dishes[0];
    const key = `${restaurant.id}:${dish.id}`;
    return `
      <article class="restaurant-card ${restaurant.flashOnly ? "flash-restaurant-card" : ""}">
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
        <div class="restaurant-dish-preview">
          <img src="${foodImage(restaurant.flashOnly ? restaurant.image : dish.image, 180)}" alt="" loading="lazy">
          <div class="restaurant-dish-copy"><span>POPULAR PICK</span><strong>${dish.name}</strong><b>${money(dish.price)}</b></div>
          ${state.cart[key]
            ? `<div class="quantity-control"><button type="button" data-quantity="-1" data-key="${key}" aria-label="Remove one ${dish.name}">−</button><span>${state.cart[key]}</span><button type="button" data-quantity="1" data-key="${key}" aria-label="Add one ${dish.name}">+</button></div>`
            : `<button class="dish-quick-add" type="button" data-add-item="${key}" aria-label="Add ${dish.name} to cart">+ Add</button>`}
        </div>
      </article>
    `;
  }).join("");
}

function renderFlashCategories() {
  const countForCategory = (category) => category === "All items"
    ? flashProducts.length
    : flashProducts.filter((product) => product.flashCategory === category).length;
  $("#flash-category-list").innerHTML = flashCatalogCategories.map((category) => `
    <button class="flash-category-card ${state.flashStoreCategory === category.filter ? "selected" : ""}" type="button" data-flash-filter="${category.filter}" aria-pressed="${state.flashStoreCategory === category.filter}">
      <span aria-hidden="true">${category.icon}</span><strong>${category.label}</strong><small>${countForCategory(category.filter)} items</small>
    </button>
  `).join("");
}

function renderFlashProductCard(product) {
  const key = `cravy-flash:${product.id}`;
  const quantity = state.cart[key] || 0;
  const isWishlisted = state.wishlist.includes(product.id);
  return `
    <article class="flash-product-card">
      <div class="flash-product-art">
        <img class="flash-product-image" src="${product.image || flashImagePlaceholder(product.name)}" alt="${product.name}" data-flash-product-image="${product.id}" loading="lazy">
        <span class="flash-discount-badge">${product.discount}</span>
        <button class="flash-wishlist-button ${isWishlisted ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="${isWishlisted ? "Remove" : "Add"} ${product.name} ${isWishlisted ? "from" : "to"} wishlist" aria-pressed="${isWishlisted}"><span aria-hidden="true">${isWishlisted ? "♥" : "♡"}</span></button>
      </div>
      <div class="flash-product-info">
        <span class="flash-product-category">${product.flashCategory === "Fruits" ? "Fresh Fruits" : product.flashCategory === "Vegetables" ? "Fresh Vegetables" : product.flashCategory}</span>
        <h3>${product.name}</h3>
<<<<<<< HEAD
=======
        ${product.teluguName ? `<p class="flash-product-native-name" lang="te">${product.teluguName}</p>` : ""}
>>>>>>> aaeb565b1a073f0de951c81379539cd1fa5817b8
        <p class="flash-product-meta">${product.weight} <span aria-hidden="true">·</span> 10–15 mins</p>
        <div class="flash-product-bottom"><div><strong>${money(product.price)}</strong><del>${money(product.originalPrice)}</del></div>
          ${quantity
            ? `<div class="quantity-control"><button type="button" data-quantity="-1" data-key="${key}" aria-label="Remove one ${product.name}">−</button><span aria-live="polite">${quantity}</span><button type="button" data-quantity="1" data-key="${key}" aria-label="Add one ${product.name}">+</button></div>`
            : `<button class="add-item-button" type="button" data-add-item="${key}" aria-label="Add ${product.name} to cart"><span aria-hidden="true">+</span> Add</button>`}
        </div>
      </div>
    </article>
  `;
}

const flashStoreShelves = [
  { id: "flash-bestsellers", title: "Best sellers", subtitle: "Neighbourhood favourites", products: () => flashProducts.filter((product) => product.bestseller) },
  { id: "flash-fruits", title: "Fresh fruits", subtitle: "Picked ripe and ready", products: () => flashProducts.filter((product) => product.flashCategory === "Fruits") },
  { id: "flash-vegetables", title: "Fresh vegetables", subtitle: "30 fresh picks from the market", products: () => flashProducts.filter((product) => product.flashCategory === "Vegetables") },
  { id: "flash-dry-fruits", title: "Dry fruits", subtitle: "A wholesome little handful", products: () => flashProducts.filter((product) => product.flashCategory === "Dry Fruits") },
  { id: "flash-chocolates", title: "Chocolates & sweets", subtitle: "A treat for every kind of day", products: () => flashProducts.filter((product) => ["Chocolates", "Sweets & Desserts"].includes(product.flashCategory)) },
  { id: "flash-ice-creams", title: "Ice creams", subtitle: "Keep it cool", products: () => flashProducts.filter((product) => product.flashCategory === "Ice Creams") },
  { id: "flash-cakes", title: "Cakes & bakery", subtitle: "Freshly baked goodness", products: () => flashProducts.filter((product) => ["Cakes", "Bakery"].includes(product.flashCategory)) },
  { id: "flash-daily-essentials", title: "Daily essentials", subtitle: "The everyday things you need", products: () => flashProducts.filter((product) => ["Dairy Products", "Milk & Eggs", "Rice & Dals", "Atta & Flour", "Cooking Oil", "Household Essentials"].includes(product.flashCategory)) },
  { id: "flash-offers", title: "Special offers", subtitle: "Good picks at even better prices", products: () => flashProducts.filter((product) => product.discountPercent >= 18).sort((first, second) => second.discountPercent - first.discountPercent) },
  { id: "flash-recent", title: "Recently added", subtitle: "New to your neighbourhood store", products: () => flashProducts.filter((product) => product.recentlyAdded) },
];

function renderFlashShelves() {
  $("#flash-store-shelves").innerHTML = flashStoreShelves.map((shelf) => {
    const products = shelf.products().slice(0, 8);
    if (!products.length) return "";
    return `
      <section class="flash-shelf" id="${shelf.id}" aria-labelledby="${shelf.id}-title">
        <div class="flash-products-heading"><div><p class="section-kicker">${shelf.subtitle}</p><h2 id="${shelf.id}-title">${shelf.title}</h2></div>
          <button type="button" class="flash-shelf-more" data-flash-shelf="${shelf.id}">Shop more <span aria-hidden="true">→</span></button>
        </div>
        <div class="flash-product-grid">${products.map(renderFlashProductCard).join("")}</div>
      </section>
    `;
  }).join("");
}

function renderFlashCatalog() {
  flashImageObserver?.disconnect();
  renderFlashCategories();

  const query = state.query.trim().toLocaleLowerCase();
  const restaurant = restaurants.find((item) => item.id === "cravy-flash");
  const selectedShelf = flashStoreShelves.find((shelf) => shelf.id === state.flashShelfFilter);
  let items = (selectedShelf ? selectedShelf.products() : restaurant.dishes)
    .filter((product) => state.flashShelfFilter || state.flashStoreCategory === "All items" || product.flashCategory === state.flashStoreCategory)
    .filter((product) => !state.flashOffersOnly || product.discountPercent >= 18)
    .filter((product) => !query || `${product.name} ${product.teluguName || ""} ${product.description} ${product.flashCategory}`.toLocaleLowerCase().includes(query));
  if (state.flashSort === "price-low") items.sort((first, second) => first.price - second.price);
  if (state.flashSort === "price-high") items.sort((first, second) => second.price - first.price);

  const browseMode = state.flashStoreCategory === "All items" && !state.flashShelfFilter && !query && !state.flashOffersOnly && state.flashSort === "recommended";
  $("#flash-item-count").textContent = `${items.length} ${items.length === 1 ? "product" : "products"}`;
  $("#flash-results-title").textContent = query
    ? `Results for “${state.query.trim()}”`
    : state.flashOffersOnly ? "Products on offer"
      : selectedShelf ? selectedShelf.title
      : state.flashStoreCategory === "All items" ? "Shop all groceries"
        : flashCatalogCategories.find((category) => category.filter === state.flashStoreCategory)?.label || state.flashStoreCategory;
  $("#flash-results-panel").classList.toggle("hidden", browseMode);
  $("#flash-store-shelves").classList.toggle("hidden", !browseMode);
  $("#flash-offers-toggle").classList.toggle("selected", state.flashOffersOnly);
  $("#flash-offers-toggle").setAttribute("aria-pressed", String(state.flashOffersOnly));
  $("#flash-sort").value = state.flashSort;
  $("#flash-empty-state").classList.toggle("hidden", items.length > 0);
  $("#flash-product-grid").classList.toggle("hidden", items.length === 0);
  $("#flash-product-grid").innerHTML = items.map(renderFlashProductCard).join("");
  renderFlashShelves();

  $("#flash-page").querySelectorAll("[data-flash-product-image]").forEach((image) => {
    const product = flashProducts.find((item) => item.id === image.dataset.flashProductImage);
    if (!product) return;
    if (product.image) {
      loadFlashProductImage(image, product);
    } else if (flashImageObserver) {
      flashImageObserver.observe(image);
    } else {
      loadFlashProductImage(image, product);
    }
  });
}

$("#flash-page").addEventListener("error", (event) => {
  const image = event.target.closest("[data-flash-product-image]");
  if (!image) return;

  const product = flashProducts.find((item) => item.id === image.dataset.flashProductImage);
  if (!product) return;
  const failedUrl = image.currentSrc;
  if (image.dataset.flashImageRetried) {
    console.error(`Product image and its item-specific fallback failed for ${product.name}.`);
    image.removeAttribute("src");
    image.classList.add("image-unavailable");
    return;
  }

  image.dataset.flashImageRetried = "true";
  if (usedFlashImageUrls.get(failedUrl) === product.id) usedFlashImageUrls.delete(failedUrl);
  product.image = "";
  image.src = flashImagePlaceholder(product.name);
  loadFlashProductImage(image, product, true, failedUrl);
}, true);

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

function menuItemControl(key, dishName) {
  const quantity = state.cart[key] || 0;
  if (!quantity) {
    return `<button class="add-item-button" type="button" data-add-item="${key}">ADD <span aria-hidden="true">+</span></button>`;
  }
  return `<div class="quantity-control menu-quantity-control"><button type="button" data-quantity="-1" data-key="${key}" aria-label="Remove one ${dishName}">−</button><span aria-live="polite">${quantity}</span><button type="button" data-quantity="1" data-key="${key}" aria-label="Add one ${dishName}">+</button></div>`;
}

function renderMenuQuantities() {
  $("#dialog-content").querySelectorAll("[data-menu-key]").forEach((control) => {
    const dishName = control.closest(".menu-item").querySelector("h4").textContent;
    control.innerHTML = menuItemControl(control.dataset.menuKey, dishName);
  });
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
        <div class="menu-item-art"><img src="${foodImage(dish.image, 360)}" alt="" loading="lazy"><div data-menu-key="${restaurant.id}:${dish.id}">${menuItemControl(`${restaurant.id}:${dish.id}`, dish.name)}</div></div>
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
  renderMenuQuantities();
  renderFlashCatalog();
  renderRestaurants();
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
  const savedAddress = state.addresses[0] || state.location;
  const savedPhone = /^\d{10}$/.test(state.account?.contact || "") ? state.account.contact : "";
  showDialog(`
    <div class="simple-dialog checkout-dialog"><p class="section-kicker">ALMOST THERE</p><h2 id="dialog-title">Where should we bring it?</h2><p>You're just one step away from something delicious.</p>
      <form id="checkout-form" class="checkout-form">
        <label>Your name<input name="name" type="text" autocomplete="name" value="${escapeHtml(state.account?.name || "")}" placeholder="e.g. Alex Morgan" required minlength="2"></label>
        <label>Phone number<input name="phone" type="tel" autocomplete="tel" value="${savedPhone}" placeholder="10-digit mobile number" pattern="[0-9]{10}" required></label>
        <label>Delivery address<textarea name="address" autocomplete="street-address" rows="2" placeholder="House / flat, street, area" required minlength="5">${escapeHtml(savedAddress)}</textarea></label>
        <label>Payment method<select name="payment"><option>Pay on delivery</option><option>UPI (demo)</option><option>Credit / debit card (demo)</option></select></label>
        <div class="checkout-total"><span>Order total</span><strong>${$("#grand-total").textContent}</strong></div>
        <button class="primary-button checkout-submit" type="submit">Place order <span aria-hidden="true">→</span></button>
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
  const customerName = String(formData.get("name")).trim();
  const phone = String(formData.get("phone")).trim();
  const address = String(formData.get("address")).trim();
  const payment = String(formData.get("payment"));
  const order = { id: orderNumber, name: customerName, phone, location: address, payment, items, total: $("#grand-total").textContent, createdAt: new Date().toISOString() };
  state.orders.unshift(order);
  state.addresses = [address, ...state.addresses.filter((savedAddress) => savedAddress !== address)];
  state.account = { name: customerName, contact: phone };
  saveStorage(keys.addresses, state.addresses);
  saveStorage(keys.account, state.account);
  saveStorage(keys.orders, state.orders);
  state.cart = {};
  saveStorage(keys.cart, state.cart);
  renderCart();
  const safeName = escapeHtml(order.name);
  showDialog(`<div class="simple-dialog order-success"><span class="success-icon" aria-hidden="true">✓</span><p class="section-kicker">ORDER CONFIRMED</p><h2 id="dialog-title">You're all set, ${safeName}!</h2><p>Your demo order <strong>#${orderNumber}</strong> is being prepared. Get comfy—we'll have it at your door in about 10–15 minutes.</p>
    <div class="order-progress"><span class="progress-step done"><b>✓</b><span>Confirmed</span></span><i></i><span class="progress-step active"><b>2</b><span>Preparing</span></span><i></i><span class="progress-step"><b>3</b><span>On the way</span></span></div>
    <div class="order-receipt">${items.map((item) => `<div><span>${item.count} × ${item.name}</span><strong>${item.restaurant}</strong></div>`).join("")}<div class="receipt-total"><span>Total (demo)</span><strong>${order.total}</strong></div></div>
    <button class="primary-button full-button" type="button" data-close-dialog>Back to browsing</button></div>`);
}

function setQuery(value) {
  state.query = value;
  $("#search-input").value = value;
  $("#hero-search-input").value = value;
  if (document.body.classList.contains("flash-page-mode")) {
    renderFlashCatalog();
    $("#flash-products").scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    renderRestaurants();
    $("#restaurants").scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
  state.flashCategory = null;
  state.query = "";
  $("#search-input").value = "";
  $("#hero-search-input").value = "";
  renderCategories();
  syncFilters();
}

function openLocationDialog() {
  showDialog(`<div class="simple-dialog"><p class="section-kicker">FRESH FOOD, RIGHT TO YOU</p><h2 id="dialog-title">Set your location</h2><p>Use your device location or enter an area.</p><button class="secondary-button location-action" id="use-current-location-button" type="button">Use my current location</button><form id="location-form" class="checkout-form"><label>Delivery area<input name="location" type="text" value="${state.location.replace(/[&<>"']/g, "")}" placeholder="Area, city" required minlength="3"></label><button class="primary-button checkout-submit" type="submit">Save location</button></form></div>`);
  $("#use-current-location-button").addEventListener("click", (event) => {
    const button = event.currentTarget;
    if (!navigator.geolocation) {
      showToast("Your browser doesn't support location access. Enter your area instead.");
      return;
    }

    button.disabled = true;
    button.textContent = "Finding your location...";
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      button.textContent = "Looking up your area...";
      try {
        const location = await reverseGeocode(coords.latitude, coords.longitude);
        state.location = location;
        $("#current-location").textContent = location;
        if ($("#use-current-location-button") === button) dialog.close();
        showToast("Current location selected.");
        saveStorage(keys.location, state.location);
      } catch (error) {
        console.error("Could not look up the current location.", error);
        button.disabled = false;
        button.textContent = "Use my current location";
        showToast("We couldn't identify a nearby address. Enter your area instead.");
      }
    }, (error) => {
      button.disabled = false;
      button.textContent = "Use my current location";
      const message = error.code === 1
        ? "Location permission was denied. Allow access in your browser and try again."
        : error.code === 3
          ? "Finding your location timed out. Please try again."
          : "Your location couldn't be determined. Try again or enter your area.";
      showToast(message);
    }, { maximumAge: 60000, timeout: 10000 });
  });
}

async function reverseGeocode(latitude, longitude) {
  const url = new URL("https://api.bigdatacloud.net/data/reverse-geocode-client");
  url.searchParams.set("latitude", latitude);
  url.searchParams.set("longitude", longitude);
  url.searchParams.set("localityLanguage", "en");

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`Address lookup failed (${response.status}).`);

    const data = await response.json();
    const locality = data.locality || data.city || data.principalSubdivision;
    if (typeof locality !== "string" || !locality.trim()) {
      throw new Error("The address lookup returned no locality.");
    }

    const city = typeof data.city === "string" && data.city !== locality ? data.city : "";
    return [locality, city].filter(Boolean).join(", ");
  } finally {
    window.clearTimeout(timeout);
  }
}

function openFoodAnalysisDialog() {
  showDialog(`<div class="simple-dialog"><p class="section-kicker">A LITTLE FOOD FOR THOUGHT</p><h2 id="dialog-title">Ask Gemini about a food</h2><p>Enter a dish or food description to get an AI-generated analysis.</p><form id="food-analysis-form" class="checkout-form"><label>Food item or description<textarea name="food" placeholder="For example: paneer tikka with mint chutney" required minlength="2" maxlength="500"></textarea></label><button class="primary-button checkout-submit" type="submit">Analyze with Gemini</button></form><p class="analysis-note">AI-generated nutrition information is an estimate. Check ingredients and allergens with the restaurant.</p><section class="food-analysis-result hidden" id="food-analysis-result" aria-live="polite"><h3>Gemini's analysis</h3><p id="food-analysis-text"></p></section><p class="food-analysis-status" id="food-analysis-status" role="status" aria-live="polite"></p></div>`);
  $("#dialog-content textarea[name='food']").focus();
}

async function analyzeFoodItem(form) {
  const submitButton = form.querySelector("button[type='submit']");
  const result = $("#food-analysis-result");
  const resultText = $("#food-analysis-text");
  const status = $("#food-analysis-status");
  submitButton.disabled = true;
  submitButton.textContent = "Analyzing...";
  result.classList.add("hidden");
  resultText.textContent = "";
  status.textContent = "Asking Gemini...";

  try {
    const response = await fetch("/api/analyze-food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ food: new FormData(form).get("food").trim() }),
    });
    let data;
    try {
      data = await response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(response.status === 404
          ? "Gemini isn't connected yet. Add the secure POST /api/analyze-food backend to enable analysis."
          : `The analysis service returned an invalid response (${response.status}).`);
      }
      throw new Error("The analysis service returned an invalid response.");
    }

    if (!response.ok) {
      throw new Error(typeof data?.error === "string" ? data.error : `Gemini analysis failed (${response.status}).`);
    }
    if (typeof data?.analysis !== "string" || !data.analysis.trim()) {
      throw new Error("The analysis service didn't return an analysis. Please try again.");
    }

    resultText.textContent = data.analysis.trim();
    result.classList.remove("hidden");
    status.textContent = "";
  } catch (error) {
    console.error("Food analysis request failed.", error);
    status.textContent = error instanceof Error
      ? error.message
      : "Could not analyze this food item. Please try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Analyze with Gemini";
  }
}

function openAccountDialog() {
  renderAccountDialog(state.account ? "profile" : "sign-in");
}

function renderAccountDialog(activeTab = "profile", authMode = "sign-in") {
  if (!state.account) {
    showDialog(`<div class="simple-dialog"><div class="account-avatar">✦</div><p class="section-kicker">YOUR CRAVY ACCOUNT</p><h2 id="dialog-title">${authMode === "sign-up" ? "Create your account" : "Welcome back"}</h2><p>Save your details for a quicker checkout. This demo stores your profile on this device only.</p><div class="account-auth-tabs"><button type="button" data-account-mode="sign-in" class="${authMode === "sign-in" ? "selected" : ""}">Sign in</button><button type="button" data-account-mode="sign-up" class="${authMode === "sign-up" ? "selected" : ""}">Sign up</button></div><form id="account-form" class="checkout-form" data-auth-mode="${authMode}">${authMode === "sign-up" ? '<label>Your name<input name="name" type="text" autocomplete="name" placeholder="e.g. Alex Morgan" required minlength="2"></label>' : ""}<label>Mobile number or email<input name="contact" type="text" autocomplete="username" placeholder="9876543210 or you@example.com" required></label><button class="primary-button checkout-submit" type="submit">${authMode === "sign-up" ? "Create account" : "Continue"}</button></form><p class="account-demo-note">Demo sign-in only. No password or payment information is collected.</p></div>`);
    return;
  }

  const tabs = [
    ["profile", "My profile"],
    ["orders", "My orders"],
    ["addresses", "Saved addresses"],
    ["wishlist", "Wishlist"],
  ];
  let content = "";
  if (activeTab === "profile") {
    content = `<form id="profile-form" class="checkout-form"><label>Your name<input name="name" type="text" autocomplete="name" value="${escapeHtml(state.account.name)}" required minlength="2"></label><label>Mobile number or email<input name="contact" type="text" autocomplete="email" value="${escapeHtml(state.account.contact)}" required></label><button class="primary-button checkout-submit" type="submit">Save profile</button></form>`;
  } else if (activeTab === "orders") {
    content = state.orders.length
      ? `<div class="account-order-list">${state.orders.map((order) => `<article class="account-order"><div><strong>Order #${escapeHtml(order.id)}</strong><span>${new Date(order.createdAt).toLocaleDateString("en-IN")}</span></div><p>${order.items.map((item) => `${item.count} × ${escapeHtml(item.name)}`).join(", ")}</p><strong>${escapeHtml(order.total)}</strong></article>`).join("")}</div>`
      : `<div class="account-empty-state"><span>🛍️</span><strong>No orders yet</strong><p>Your Cravy Flash orders will show up here.</p></div>`;
  } else if (activeTab === "addresses") {
    content = `<div class="account-address-list">${state.addresses.map((address, index) => `<div class="account-address"><span>⌖</span><p>${escapeHtml(address)}</p><button type="button" data-remove-address="${index}" aria-label="Remove saved address">×</button></div>`).join("")}</div><form id="address-form" class="checkout-form"><label>Add a delivery address<textarea name="address" rows="2" placeholder="House / flat, street, area" required minlength="5"></textarea></label><button class="primary-button checkout-submit" type="submit">Save address</button></form>`;
  } else {
    const wishlistedProducts = flashProducts.filter((product) => state.wishlist.includes(product.id));
    content = wishlistedProducts.length
      ? `<div class="account-wishlist-list">${wishlistedProducts.map((product) => `<article class="account-wishlist-item"><img src="${product.image || flashImagePlaceholder(product.name)}" alt=""><div><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.weight)} · ${money(product.price)}</span></div><button type="button" data-wishlist="${product.id}" aria-label="Remove ${escapeHtml(product.name)} from wishlist">♥</button></article>`).join("")}</div>`
      : `<div class="account-empty-state"><span>♡</span><strong>Your wishlist is waiting</strong><p>Save products with the heart button to find them here.</p></div>`;
  }

  showDialog(`<div class="account-dashboard"><div class="account-dashboard-heading"><div class="account-avatar">${escapeHtml(state.account.name.trim().charAt(0).toUpperCase() || "C")}</div><div><p class="section-kicker">YOUR CRAVY ACCOUNT</p><h2 id="dialog-title">Hi, ${escapeHtml(state.account.name.split(" ")[0])}</h2></div></div><div class="account-tabs" role="tablist">${tabs.map(([tab, label]) => `<button type="button" data-account-view="${tab}" role="tab" aria-selected="${activeTab === tab}">${label}</button>`).join("")}</div><section class="account-tab-panel">${content}</section><button class="account-signout" type="button" data-account-signout>Sign out</button></div>`);
}

function toggleFlashWishlist(productId) {
  state.wishlist = state.wishlist.includes(productId)
    ? state.wishlist.filter((id) => id !== productId)
    : [...state.wishlist, productId];
  saveStorage(keys.wishlist, state.wishlist);
}

renderCategories();
renderRestaurants();
renderCart();
$("#current-location").textContent = state.location;
if (state.account?.name) {
  $("#account-button .avatar").textContent = state.account.name.trim().charAt(0).toUpperCase();
  $("#account-button > span:last-child").textContent = "My account";
}
renderRoute();

$("#category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.flashCategory = null;
  renderCategories();
  renderRestaurants();
});

$("#flash-category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-flash-filter]");
  if (!button) return;
  state.flashStoreCategory = button.dataset.flashFilter;
  state.flashShelfFilter = null;
  state.flashOffersOnly = false;
  state.flashSort = "recommended";
  renderFlashCatalog();
  $("#flash-products").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#flash-offers-toggle").addEventListener("click", () => {
  state.flashOffersOnly = !state.flashOffersOnly;
  state.flashStoreCategory = "All items";
  state.flashShelfFilter = null;
  renderFlashCatalog();
  $("#flash-products").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#flash-sort").addEventListener("change", (event) => {
  state.flashSort = event.target.value;
  renderFlashCatalog();
});

$("#flash-page").addEventListener("click", (event) => {
  const wishlistButton = event.target.closest("[data-wishlist]");
  if (wishlistButton) {
    const product = flashProducts.find((item) => item.id === wishlistButton.dataset.wishlist);
    if (!product) return;
    toggleFlashWishlist(product.id);
    renderFlashCatalog();
    showToast(state.wishlist.includes(product.id) ? "Saved to your wishlist." : "Removed from your wishlist.");
    return;
  }

  const shelfFilter = event.target.closest(".flash-shelf-more[data-flash-shelf]");
  if (!shelfFilter) return;
  state.flashStoreCategory = "All items";
  state.flashShelfFilter = shelfFilter.dataset.flashShelf;
  state.flashOffersOnly = false;
  state.flashSort = "recommended";
  renderFlashCatalog();
  $("#flash-products").scrollIntoView({ behavior: "smooth", block: "start" });
});

restaurantGrid.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    if (currentRoute() !== "/") navigateTo("/");
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
  if (document.body.classList.contains("flash-page-mode")) renderFlashCatalog();
});
$("#hero-search-input").addEventListener("input", (event) => {
  $("#search-input").value = event.target.value;
  state.query = event.target.value;
  renderRestaurants();
  if (document.body.classList.contains("flash-page-mode")) renderFlashCatalog();
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
  if (currentRoute() !== "/") navigateTo("/");
  state.favoritesOnly = !state.favoritesOnly;
  syncFilters();
  if (state.favoritesOnly) $("#restaurants").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#all-categories-button").addEventListener("click", () => {
  state.category = "All";
  state.flashCategory = null;
  renderCategories();
  renderRestaurants();
});
$("#banner-browse-button").addEventListener("click", () => $("#restaurants").scrollIntoView({ behavior: "smooth" }));
$("#location-button").addEventListener("click", openLocationDialog);
$("#food-analysis-button").addEventListener("click", openFoodAnalysisDialog);
$("#account-button").addEventListener("click", openAccountDialog);
$("#cart-button").addEventListener("click", openCart);
$(".close-cart-button").addEventListener("click", closeCart);
$(".dialog-close").addEventListener("click", () => dialog.close());
overlay.addEventListener("click", closeCart);
$("#checkout-button").addEventListener("click", openCheckout);
$("#footer-help").addEventListener("click", (event) => {
  event.preventDefault();
  showDialog(`<div class="simple-dialog"><p class="section-kicker">WE'RE HERE FOR YOU</p><h2 id="dialog-title">A little help?</h2><p>Cravy is a front-end demo. Orders are not sent to restaurants and payments are not processed. Your saved cart and favorites stay in this browser.</p><button class="primary-button full-button" type="button" data-close-dialog>Got it</button></div>`);
});
[
  ["flash-support-link", "CUSTOMER SUPPORT", "How can we help?", "For help with a demo order, delivery address or product, contact the Cravy Flash team at hello@cravy.example. Orders and payments are simulated in this demo."],
  ["flash-about-link", "ABOUT CRAVY FLASH", "Freshness, in a flash.", "Cravy Flash is your neighbourhood grocery demo for market-fresh produce, daily essentials and little treats, delivered in 10–15 minutes."],
  ["flash-privacy-link", "PRIVACY", "Your data stays on this device.", "This frontend demo saves your cart, profile, addresses, wishlist and order history in your browser's local storage. It does not process payments or send orders to a store."],
  ["flash-terms-link", "TERMS & CONDITIONS", "A quick note.", "Cravy Flash is a sample shopping experience. Product prices and availability are illustrative, and checkout orders are saved only in your browser. No real payment or delivery is arranged."],
].forEach(([id, kicker, title, copy]) => {
  $(`#${id}`).addEventListener("click", (event) => {
    event.preventDefault();
    showDialog(`<div class="simple-dialog"><p class="section-kicker">${kicker}</p><h2 id="dialog-title">${title}</h2><p>${copy}</p><button class="primary-button full-button" type="button" data-close-dialog>Got it</button></div>`);
  });
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (link && link.id !== "footer-help" && !event.defaultPrevented
      && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
      && (!link.target || link.target === "_self") && !link.hasAttribute("download")) {
    const target = new URL(link.href, window.location.href);
    if (target.origin === window.location.origin
        && ["/", "/flash"].includes(target.pathname.replace(/\/+$/, "") || "/")) {
      event.preventDefault();
      navigateTo(target.href);
    }
  }

  const addButton = event.target.closest("[data-add-item]");
  if (addButton) addToCart(addButton.dataset.addItem);

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const key = quantityButton.dataset.key;
    state.cart[key] = (state.cart[key] || 0) + Number(quantityButton.dataset.quantity);
    if (state.cart[key] <= 0) delete state.cart[key];
    saveStorage(keys.cart, state.cart);
    renderCart();
    renderMenuQuantities();
    renderFlashCatalog();
    renderRestaurants();
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

window.addEventListener("popstate", renderRoute);

$("#dialog-content").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  if (event.target.id === "checkout-form") placeOrder(event.target);
  if (event.target.id === "food-analysis-form") analyzeFoodItem(event.target);
  if (event.target.id === "account-form") {
    const formData = new FormData(event.target);
    const contact = String(formData.get("contact")).trim();
    const name = String(formData.get("name") || contact.split("@")[0]).trim();
    state.account = { name, contact };
    saveStorage(keys.account, state.account);
    $("#account-button .avatar").textContent = name.charAt(0).toUpperCase();
    $("#account-button > span:last-child").textContent = "My account";
    renderAccountDialog("profile");
    showToast("You're signed in on this device.");
  }
  if (event.target.id === "profile-form") {
    const formData = new FormData(event.target);
    state.account = {
      name: String(formData.get("name")).trim(),
      contact: String(formData.get("contact")).trim(),
    };
    saveStorage(keys.account, state.account);
    $("#account-button .avatar").textContent = state.account.name.charAt(0).toUpperCase();
    renderAccountDialog("profile");
    showToast("Profile updated.");
  }
  if (event.target.id === "address-form") {
    const address = String(new FormData(event.target).get("address")).trim();
    state.addresses = [address, ...state.addresses.filter((savedAddress) => savedAddress !== address)];
    saveStorage(keys.addresses, state.addresses);
    renderAccountDialog("addresses");
    showToast("Address saved.");
  }
  if (event.target.id === "location-form") {
    const location = new FormData(event.target).get("location").trim();
    if (!location) return;
    state.location = location;
    $("#current-location").textContent = state.location;
    dialog.close();
    showToast("Delivery location updated.");
    saveStorage(keys.location, state.location);
  }
});

$("#dialog-content").addEventListener("click", (event) => {
  const accountMode = event.target.closest("[data-account-mode]");
  if (accountMode) {
    renderAccountDialog("sign-in", accountMode.dataset.accountMode);
    return;
  }

  const accountView = event.target.closest("[data-account-view]");
  if (accountView) {
    renderAccountDialog(accountView.dataset.accountView);
    return;
  }

  const removeAddress = event.target.closest("[data-remove-address]");
  if (removeAddress) {
    state.addresses.splice(Number(removeAddress.dataset.removeAddress), 1);
    saveStorage(keys.addresses, state.addresses);
    renderAccountDialog("addresses");
    return;
  }

  if (event.target.closest("[data-account-signout]")) {
    state.account = null;
    saveStorage(keys.account, state.account);
    $("#account-button .avatar").textContent = "A";
    $("#account-button > span:last-child").textContent = "Sign in";
    renderAccountDialog("sign-in");
    showToast("You've signed out.");
    return;
  }

  const wishlistButton = event.target.closest("[data-wishlist]");
  if (wishlistButton) {
    const product = flashProducts.find((item) => item.id === wishlistButton.dataset.wishlist);
    if (!product) return;
    toggleFlashWishlist(product.id);
    renderFlashCatalog();
    if (dialog.open) renderAccountDialog("wishlist");
    showToast(state.wishlist.includes(product.id) ? "Saved to your wishlist." : "Removed from your wishlist.");
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
