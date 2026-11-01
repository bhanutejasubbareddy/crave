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

const flashVegetableNames = [
  "Potato", "Tomato", "Onion", "Carrot", "Cabbage", "Cauliflower", "Broccoli", "Spinach", "Brinjal", "Okra",
  "Cucumber", "Pumpkin", "Bitter Gourd", "Bottle Gourd", "Ridge Gourd", "Snake Gourd", "Drumstick", "Radish", "Beetroot", "Turnip",
  "Sweet Potato", "Yam", "Taro", "Cassava", "Green Peas", "French Beans", "Cluster Beans", "Broad Beans", "Capsicum", "Green Chilli",
  "Red Chilli", "Garlic", "Ginger", "Turmeric", "Coriander", "Mint", "Fenugreek", "Lettuce", "Celery", "Asparagus",
  "Artichoke", "Brussels Sprouts", "Kale", "Leek", "Fennel", "Parsnip", "Zucchini", "Sweet Corn", "Baby Corn", "Mushrooms",
  "Bok Choy", "Napa Cabbage", "Chinese Broccoli", "Lotus Root", "Bamboo Shoots", "Water Chestnut", "Bean Sprouts", "Chayote", "Kohlrabi", "Swiss Chard",
  "Arugula", "Watercress", "Mustard Greens", "Amaranth Leaves", "Moringa Leaves", "Pumpkin Leaves", "Cassava Leaves", "Collard Greens", "Dandelion Greens", "Sorrel",
  "Jicama", "Rutabaga", "Celeriac", "Salsify", "Jerusalem Artichoke", "Burdock Root", "Tinda", "Ivy Gourd", "Ash Gourd", "Raw Banana",
  "Plantain", "Spring Onion", "Shallots", "Red Cabbage", "Yellow Squash", "Butternut Squash", "Acorn Squash", "Jalapeño", "Poblano Pepper", "Habanero Pepper",
  "Tomatillo", "Endive", "Chicory", "Romanesco", "Garden Egg", "African Eggplant", "Jute Mallow", "Cowpea Leaves", "Seaweed", "Hearts of Palm",
];

const flashFruitNames = [
  "Apple", "Banana", "Mango", "Orange", "Grapes", "Watermelon", "Papaya", "Pineapple", "Pomegranate", "Guava",
  "Pear", "Peach", "Plum", "Nectarine", "Apricot", "Cherry", "Strawberry", "Blueberry", "Raspberry", "Blackberry",
  "Cranberry", "Mulberry", "Kiwi", "Avocado", "Coconut", "Lemon", "Lime", "Sweet Lime", "Grapefruit", "Dragon Fruit",
  "Passion Fruit", "Star Fruit", "Jackfruit", "Lychee", "Rambutan", "Longan", "Mangosteen", "Durian", "Persimmon", "Fig",
  "Dates", "Custard Apple", "Sapodilla", "Indian Gooseberry", "Jamun", "Wood Apple", "Bael", "Tamarind", "Cape Gooseberry", "Soursop",
  "Breadfruit", "Quince", "Cantaloupe", "Honeydew Melon", "Muskmelon", "Kiwano", "Pomelo", "Clementine", "Mandarin", "Tangerine",
  "Blood Orange", "Kumquat", "Yuzu", "Ugli Fruit", "Loquat", "Medlar", "Elderberry", "Boysenberry", "Gooseberry", "Jujube",
  "Miracle Fruit", "Ackee", "Salak", "Feijoa", "Jabuticaba", "Acerola", "Red Currant", "Black Currant", "Plantain", "Olive",
];

const flashFruitImages = [
  "photo-1610832958506-aa56368176cf",
  "photo-1547514701-42782101795e",
  "photo-1571771894821-ce9b6c11b08e",
  "photo-1550258987-190a2d5a0fe7",
  "photo-1596591606975-97ee5cef3a1e",
];

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
  ...flashVegetableNames.map((name, index) => ({
    id: `vegetable-${index + 1}`,
    name,
    description: `Fresh ${name.toLowerCase()}, picked for your kitchen.`,
    price: 39 + (index % 6) * 5,
    veg: true,
    image: "photo-1512621776951-a57141f2eefd",
    flashCategory: "Vegetables",
    quantityLabel: index % 3 === 0 ? "1 kg" : "500 g",
  })),
  ...flashFruitNames.map((name, index) => ({
    id: `fruit-${index + 1}`,
    name,
    description: `Sweet, fresh ${name.toLowerCase()} ready to enjoy.`,
    price: 49 + (index % 8) * 10,
    veg: true,
    image: flashFruitImages[index % flashFruitImages.length],
    flashCategory: "Fruits",
    quantityLabel: index % 3 === 0 ? "1 kg" : "500 g",
  })),
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
).values()].map((product, index) => ({
  ...product,
  id: `flash-${product.flashCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index + 1}`,
  discount: 10 + (index % 4) * 5,
}));

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

const vegetablePhotoIds = [
  36400786, 29479888, 17140078, 1306559, 6316537, 6631953, 7676071, 28524414, 34096648, 38285914,
  39490165, 39467457, 10487659, 29181513, 31080486, 9704414, 20371247, 31056129, 6740689, 6631952,
  19897797, 33383280, 37408655, 17446132, 3650647, 13195446, 9030135, 38938579, 7342136, 38192931,
  2880693, 38802742, 24916930, 11172118, 30890190, 39795133, 40209261, 33749230, 39815348, 33499935,
  30309038, 30309037, 11611992, 34993617, 5503106, 38990977, 8024002, 7657028, 35975200, 1433487,
  32667567, 6576148, 3938343, 36762410, 27643476, 39074069, 20308756, 12407410, 144206, 4163411,
  7392730, 7333168, 4309708, 6316541, 4163410, 38088072, 13982572, 13982567, 13982570, 34705704,
  10448740, 12181050, 7225537, 5041567, 7129162, 12296938, 12118672, 533342, 12296937, 36895504,
  4307386, 31514958, 4110464, 7774212, 15428958, 17617617, 4414872, 6037886, 38308469, 27567600,
  27961865, 32489640, 11633655, 30624993, 27791127, 40207161, 37540986, 34295170, 38341721, 15002300,
];

function vegetableImage(index) {
  const photoId = vegetablePhotoIds[index % vegetablePhotoIds.length];
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=640`;
}

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
  flashCategory: null,
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
          <img src="${foodImage(dish.image, 180)}" alt="" loading="lazy">
          <div class="restaurant-dish-copy"><span>POPULAR PICK</span><strong>${dish.name}</strong><b>${money(dish.price)}</b></div>
          ${state.cart[key]
            ? `<div class="quantity-control"><button type="button" data-quantity="-1" data-key="${key}" aria-label="Remove one ${dish.name}">−</button><span>${state.cart[key]}</span><button type="button" data-quantity="1" data-key="${key}" aria-label="Add one ${dish.name}">+</button></div>`
            : `<button class="dish-quick-add" type="button" data-add-item="${key}" aria-label="Add ${dish.name} to cart">+ Add</button>`}
        </div>
      </article>
    `;
  }).join("");
}

function flashProductCategory(restaurant, dish) {
  return restaurant.flashOnly ? dish.flashCategory : null;
}

function renderFlashCatalog() {
  const activeFilter = document.querySelector("[data-flash-filter].selected")?.dataset.flashFilter || "All items";
  const query = state.query.trim().toLowerCase();
  const restaurant = restaurants.find((item) => item.id === "cravy-flash");
  const items = restaurant.dishes
    .filter((dish) => activeFilter === "All items" || flashProductCategory(restaurant, dish) === activeFilter)
    .filter((dish) => !query || `${dish.name} ${dish.description} ${dish.flashCategory}`.toLowerCase().includes(query))
    .map((dish, index) => ({ restaurant, dish, category: flashProductCategory(restaurant, dish), index }));
  $("#flash-item-count").textContent = `${items.length} ${items.length === 1 ? "item" : "items"}`;
  $("#flash-empty-state").classList.toggle("hidden", items.length > 0);
  $("#flash-product-grid").classList.toggle("hidden", items.length === 0);
  $("#flash-product-grid").innerHTML = items.map(({ restaurant, dish, category, index }) => {
    const key = `${restaurant.id}:${dish.id}`;
    const quantity = state.cart[key] || 0;
    const discountedPrice = Math.round(dish.price * (100 - dish.discount) / 100);
    return `
      <article class="flash-product-card">
        ${category === "Vegetables"
          ? `<img class="flash-product-image" src="${vegetableImage(index)}" alt="${dish.name}" loading="lazy">`
          : `<img class="flash-product-image" src="${foodImage(dish.image)}" alt="${dish.name}" loading="lazy">`}
        <span class="flash-discount-badge">${dish.discount}% OFF</span>
        <div class="flash-product-info">
          <span class="flash-product-category">${category === "Fruits" ? "Fresh Fruits" : category}</span>
          <h2>${dish.name}</h2>
          <p>${dish.quantityLabel} <span aria-hidden="true">·</span> Delivered in 10–15 mins</p>
          <div class="flash-product-bottom"><div><strong>${money(discountedPrice)}</strong><del>${money(dish.price)}</del></div>
            ${quantity
              ? `<div class="quantity-control"><button type="button" data-quantity="-1" data-key="${key}" aria-label="Remove one ${dish.name}">−</button><span aria-live="polite">${quantity}</span><button type="button" data-quantity="1" data-key="${key}" aria-label="Add one ${dish.name}">+</button></div>`
              : `<button class="add-item-button" type="button" data-add-item="${key}"><span aria-hidden="true">+</span> Add</button>`}
          </div>
        </div>
      </article>
    `;
  }).join("");
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
  if (document.body.classList.contains("flash-page-mode")) renderFlashCatalog();
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
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const location = `Near ${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}`;
        state.location = location;
        $("#current-location").textContent = location;
        if ($("#use-current-location-button") === button) dialog.close();
        showToast("Current location selected.");
        saveStorage(keys.location, state.location);
      },
      (error) => {
        button.disabled = false;
        button.textContent = "Use my current location";
        const message = error.code === 1
          ? "Location permission was denied. Allow access in your browser and try again."
          : error.code === 3
            ? "Finding your location timed out. Please try again."
            : "Your location couldn't be determined. Try again or enter your area.";
        showToast(message);
      },
      { maximumAge: 60000, timeout: 10000 },
    );
  });
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
  showDialog(`<div class="simple-dialog"><div class="account-avatar">A</div><p class="section-kicker">WELCOME TO CRAVY</p><h2 id="dialog-title">Good food is closer.</h2><p>Sign in is a demo feature. No account or personal information is stored.</p><form id="account-form" class="checkout-form"><label>Email or phone<input name="contact" type="text" placeholder="you@example.com" required></label><button class="primary-button checkout-submit" type="submit">Continue</button></form></div>`);
}

renderCategories();
renderRestaurants();
renderCart();
$("#current-location").textContent = state.location;
if (new URLSearchParams(window.location.search).get("view") === "flash") {
  document.body.classList.add("flash-page-mode");
  $("#flash-page").hidden = false;
  document.title = "Cravy Flash - Delivered in 10–15 minutes";
  $("#brand-logo").innerHTML = 'cravy <span class="brand-flash">flash</span>';
  $("#brand-logo").setAttribute("aria-label", "Cravy Flash home");
  $(".flash-nav-label").classList.add("hidden");
  $(".flash-speed-label").textContent = "10–15 min delivery";
  $(".flash-speed-label").classList.remove("hidden");
  $("#search-input").placeholder = "Search fruits, treats, and essentials";
  $(".header-search kbd").classList.add("hidden");
  renderFlashCatalog();
}

$("#category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.flashCategory = null;
  renderCategories();
  renderRestaurants();
});

$(".flash-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-flash-category]");
  if (!button) return;
  state.category = "All";
  state.flashCategory = state.flashCategory === button.dataset.flashCategory ? null : button.dataset.flashCategory;
  renderCategories();
  renderRestaurants();
  $("#restaurants").scrollIntoView({ behavior: "smooth", block: "start" });
});

$(".flash-catalog-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-flash-filter]");
  if (!button) return;
  $(".flash-catalog-filters .selected")?.classList.remove("selected");
  $(".flash-catalog-filters [aria-pressed='true']")?.setAttribute("aria-pressed", "false");
  button.classList.add("selected");
  button.setAttribute("aria-pressed", "true");
  renderFlashCatalog();
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

$("#dialog-content").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  if (event.target.id === "checkout-form") placeOrder(event.target);
  if (event.target.id === "food-analysis-form") analyzeFoodItem(event.target);
  if (event.target.id === "location-form") {
    const location = new FormData(event.target).get("location").trim();
    if (!location) return;
    state.location = location;
    $("#current-location").textContent = state.location;
    dialog.close();
    showToast("Delivery location updated.");
    saveStorage(keys.location, state.location);
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
