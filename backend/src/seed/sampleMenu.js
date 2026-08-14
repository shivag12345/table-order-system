export const categories = [
  { name: "Starters", description: "Small plates for the table", sortOrder: 1 },
  { name: "South Indian", description: "Royal Spice signature classics", sortOrder: 2 },
  { name: "North Indian", description: "Curries, breads, and tandoor favorites", sortOrder: 3 },
  { name: "Biryani", description: "Aromatic rice dishes", sortOrder: 4 },
  { name: "Beverages", description: "Fresh drinks and coolers", sortOrder: 5 },
  { name: "Desserts", description: "Sweet finishes", sortOrder: 6 }
];

export const menuItems = [
  {
    name: "Golden Paneer Tikka",
    description: "Smoked paneer cubes with bell peppers, kasundi, and mint chutney.",
    categoryName: "Starters",
    price: 260,
    foodType: "veg",
    tags: ["paneer", "tandoor"],
    prepTime: 18,
    isFeatured: true
  },
  {
    name: "Pepper Chicken Fry",
    description: "Crisp chicken tossed with curry leaves, pepper, and roasted spices.",
    categoryName: "Starters",
    price: 320,
    foodType: "non-veg",
    tags: ["chicken", "spicy"],
    prepTime: 20,
    isFeatured: true
  },
  {
    name: "Ghee Podi Dosa",
    description: "Crisp dosa with podi masala, ghee, sambar, and chutneys.",
    categoryName: "South Indian",
    price: 150,
    foodType: "veg",
    tags: ["dosa", "breakfast"],
    prepTime: 12
  },
  {
    name: "Mushroom Chettinad",
    description: "Button mushrooms in a roasted coconut and black pepper masala.",
    categoryName: "South Indian",
    price: 240,
    foodType: "veg",
    tags: ["chettinad", "curry"],
    prepTime: 22
  },
  {
    name: "Butter Chicken",
    description: "Tandoori chicken simmered in a rich tomato, butter, and cream gravy.",
    categoryName: "North Indian",
    price: 380,
    foodType: "non-veg",
    tags: ["curry", "popular"],
    prepTime: 25,
    isFeatured: true
  },
  {
    name: "Dal Makhani",
    description: "Slow-cooked black lentils with butter, cream, and garam masala.",
    categoryName: "North Indian",
    price: 240,
    foodType: "veg",
    tags: ["dal", "comfort"],
    prepTime: 18
  },
  {
    name: "Hyderabadi Veg Biryani",
    description: "Layered basmati rice, vegetables, saffron, fried onions, and raita.",
    categoryName: "Biryani",
    price: 280,
    foodType: "veg",
    tags: ["rice", "biryani"],
    prepTime: 22
  },
  {
    name: "Chicken Dum Biryani",
    description: "Aromatic dum biryani with tender chicken, salan, and raita.",
    categoryName: "Biryani",
    price: 360,
    foodType: "non-veg",
    tags: ["rice", "signature"],
    prepTime: 25,
    isFeatured: true
  },
  {
    name: "Fresh Lime Soda",
    description: "Sweet, salted, or mixed lime soda served chilled.",
    categoryName: "Beverages",
    price: 90,
    foodType: "veg",
    tags: ["cooler"],
    prepTime: 5
  },
  {
    name: "Mango Lassi",
    description: "Creamy mango yogurt cooler with cardamom.",
    categoryName: "Beverages",
    price: 140,
    foodType: "veg",
    tags: ["lassi"],
    prepTime: 5
  },
  {
    name: "Gulab Jamun",
    description: "Warm khoya dumplings in saffron sugar syrup.",
    categoryName: "Desserts",
    price: 130,
    foodType: "veg",
    tags: ["sweet"],
    prepTime: 6
  },
  {
    name: "Crispy Corn Chaat",
    description: "Golden corn kernels tossed with onions, lime, chaat masala, and fresh coriander.",
    categoryName: "Starters",
    price: 190,
    foodType: "veg",
    tags: ["corn", "chaat", "crunchy"],
    prepTime: 12
  },
  {
    name: "Malai Chicken Tikka",
    description: "Tender chicken marinated with cream, cheese, and gentle tandoori spices.",
    categoryName: "Starters",
    price: 340,
    foodType: "non-veg",
    tags: ["chicken", "tandoor", "creamy"],
    prepTime: 22
  },
  {
    name: "Idli Sambar",
    description: "Steamed rice cakes served with aromatic sambar and coconut chutney.",
    categoryName: "South Indian",
    price: 120,
    foodType: "veg",
    tags: ["idli", "breakfast", "sambar"],
    prepTime: 10
  },
  {
    name: "Masala Uttapam",
    description: "Thick South Indian pancake topped with tomato, onion, chilies, and coriander.",
    categoryName: "South Indian",
    price: 170,
    foodType: "veg",
    tags: ["uttapam", "vegetarian", "south indian"],
    prepTime: 15
  },
  {
    name: "Paneer Butter Masala",
    description: "Paneer cubes in a silky tomato, butter, and cashew gravy.",
    categoryName: "North Indian",
    price: 310,
    foodType: "veg",
    tags: ["paneer", "curry", "popular"],
    prepTime: 20,
    isFeatured: true
  },
  {
    name: "Kadai Chicken",
    description: "Chicken cooked with roasted peppers, onions, and freshly ground kadai spices.",
    categoryName: "North Indian",
    price: 370,
    foodType: "non-veg",
    tags: ["chicken", "spicy", "curry"],
    prepTime: 25
  },
  {
    name: "Garlic Naan",
    description: "Soft tandoor-baked bread brushed with garlic butter and coriander.",
    categoryName: "North Indian",
    price: 70,
    foodType: "veg",
    tags: ["bread", "naan", "tandoor"],
    prepTime: 8
  },
  {
    name: "Veg Pulao",
    description: "Fragrant basmati rice with seasonal vegetables, whole spices, and herbs.",
    categoryName: "Biryani",
    price: 220,
    foodType: "veg",
    tags: ["rice", "vegetarian", "mild"],
    prepTime: 18
  },
  {
    name: "Mutton Dum Biryani",
    description: "Slow-cooked basmati rice layered with tender mutton, saffron, and fried onions.",
    categoryName: "Biryani",
    price: 460,
    foodType: "non-veg",
    tags: ["mutton", "rice", "signature"],
    prepTime: 35,
    isFeatured: true
  },
  {
    name: "Masala Chaas",
    description: "Chilled spiced buttermilk blended with roasted cumin, mint, and ginger.",
    categoryName: "Beverages",
    price: 80,
    foodType: "veg",
    tags: ["buttermilk", "cooler", "refreshing"],
    prepTime: 4
  },
  {
    name: "Filter Coffee",
    description: "Traditional South Indian coffee with a rich, aromatic froth.",
    categoryName: "Beverages",
    price: 95,
    foodType: "veg",
    tags: ["coffee", "hot", "south indian"],
    prepTime: 5
  },
  {
    name: "Kulfi Falooda",
    description: "Pistachio kulfi with vermicelli, rose syrup, basil seeds, and nuts.",
    categoryName: "Desserts",
    price: 160,
    foodType: "veg",
    tags: ["kulfi", "ice cream", "sweet"],
    prepTime: 7
  }
];

export const tables = [
  { number: "T1", capacity: 2, section: "Garden" },
  { number: "T2", capacity: 4, section: "Garden" },
  { number: "T3", capacity: 4, section: "Main Dining" },
  { number: "T4", capacity: 6, section: "Main Dining" },
  { number: "T5", capacity: 4, section: "Patio" },
  { number: "T6", capacity: 8, section: "Private" },
  { number: "T7", capacity: 2, section: "Main Dining" },
  { number: "T8", capacity: 6, section: "Family" }
];

export const employees = [
  {
    name: "Royal Spice Owner",
    email: "owner@royalspice.test",
    phone: "9000000001",
    password: "owner16655",
    role: "admin",
    employeeCode: "OWN-001"
  },
  {
    name: "Asha Waiter",
    email: "waiter@royalspice.test",
    phone: "9000000002",
    password: "waiter6655",
    role: "waiter",
    employeeCode: "WTR-001"
  },
  {
    name: "Kiran Chef",
    email: "chef@royalspice.test",
    phone: "9000000003",
    password: "chef6655",
    role: "kitchen",
    employeeCode: "CHF-001"
  },
  {
    name: "Bala Bar",
    email: "bar@royalspice.test",
    phone: "9000000005",
    password: "bar6655",
    role: "bar",
    employeeCode: "BAR-001"
  },
  {
    name: "Meera Cashier",
    email: "cashier@royalspice.test",
    phone: "9000000004",
    password: "cash6655",
    role: "cashier",
    employeeCode: "CSH-001"
  }
];
