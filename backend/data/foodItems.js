const foodItems = [
	{
		name: "Pasta",
		image: "/images/pasta.jpg",
		description:
			"Food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking",
		category: "Breakfast",
		price: 150.0,
		countInStock: 10,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Bread omelette",
		image: "/images/breadomlet.jpg",
		description: "Egg Omlet stuffed inside bread slices",
		category: "Breakfast",
		price: 100.0,
		countInStock: 8,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Masala Dosa",
		image: "/images/masaladosa.jpg",
		description:
			" Masala Dosa is made from rice, potato, methi, curry leaves and served with Chutneys and Sambar",
		category: "Breakfast",
		price: 100.0,
		countInStock: 12,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Noodles",
		image: "/images/noodles.jpg",
		description:
			"Type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings",
		category: "Breakfast",
		price: 120.0,
		countInStock: 10,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Indo Chinese Lunch",
		image: "/images/indochinese.jpg",
		description:
			"Distinct culinary style which combines aspects of both Indian and Chinese foods and flavors",
		category: "Lunch",
		price: 200.0,
		countInStock: 7,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Dum Biriyani",
		image: "/images/dumbiriyani.jpg",
		description:
			"Dum here refers to letting the dish breathe in its own aroma or juices to make it more flavourful",
		category: "Lunch",
		price: 200.0,
		countInStock: 15,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Punjabi Mini Thali",
		image: "/images/punjabithali.jpg",
		description:
			"Punjabi Thali is one of the famous and delicious food in india especially in punjab",
		category: "Lunch",
		price: 180.0,
		countInStock: 9,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Kadai Mushroom Biriyani",
		image: "/images/kadaimushroombiriyani.jpg",
		description: "One Pot Meal of mushroom biriyani",
		category: "Lunch",
		price: 180.0,
		countInStock: 5,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "French Fries",
		image: "/images/frenchfries.jpg",
		description:
			"French fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack",
		category: "Snack",
		price: 100.0,
		countInStock: 0,
		rating: 12,
		numReviews: 0,
	},
	{
		name: "Burger",
		image: "/images/burger.jpg",
		description:
			"sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled",
		category: "Snack",
		price: 80.0,
		countInStock: 3,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Samosa",
		image: "/images/samosa.jpg",
		description:
			"A samosa is a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, cheese, beef and other meats, or lentils",
		category: "Snack",
		price: 60.0,
		countInStock: 14,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Aloo Chaat",
		image: "/images/aloochaat.jpg",
		description:
			" It is prepared by frying potatoes in oil and adding spices and chutney",
		category: "Snack",
		price: 70.0,
		countInStock: 9,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "South Indian Meals",
		image: "/images/southindianmeals.jpg",
		description:
			"South Indian style meals which is dominated by rice, ragi and finger millets",
		category: "Dinner",
		price: 150.0,
		countInStock: 7,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "North Indian Meals",
		image: "/images/northindianmeals.jpg",
		description:
			"North Indian Meals is distinguished by the proportionally high use of dairy products; milk, paneer, ghee (clarified butter), and yoghurt (yogurt, yoghourt) are all common ingredients",
		category: "Dinner",
		price: 150.0,
		countInStock: 8,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Butter Naan with paneer curry",
		image: "/images/butternaan.jpg",
		description:
			"Naan is a leavened, oven-baked flatbread found in the cuisines mainly of Western Asia, South",
		category: "Dinner",
		price: 125.0,
		countInStock: 15,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Chicken Biriyani",
		image: "/images/chickenbiriyani.jpg",
		description:
			"Biryani is one such dish that was made in the royal kitchens of the Mughal Emperors. The word biryani originates from the Persian word “birian” which means 'fried' or 'grilled' , it is a dish of rice and meat",
		category: "Dinner",
		price: 190.0,
		countInStock: 15,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Apple Bowl",
		image: "/images/applebowl.jpg",
		description: "Couple of apples sliced and added pepper powder for flavour",
		category: "Fruits",
		price: 60.0,
		countInStock: 5,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Watermelon Bowl",
		image: "/images/watermelonbowl.jpg",
		description:
			"Water Melon pulp cut into small pieces and added pepper powder and salt for flavour",
		category: "Fruits",
		price: 40.0,
		countInStock: 12,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Pine Apple Bowl",
		image: "/images/pineapplebowl.jpg",
		description:
			"Pine Apple pulp cut into small pieces and added pepper powder and salt for flavour",
		category: "Fruits",
		price: 50.0,
		countInStock: 20,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Mixed Fruit Bowl",
		image: "/images/mixedfruitbowl.jpg",
		description:
			"Apple, Watermelon, Pine Apple and papaya cut into small pieces and added pepper powder for flavour",
		category: "Fruits",
		price: 55.0,
		countInStock: 0,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Neapolitan Pizza",
		image: "/images/neapolitanpizza.jpg",
		description:
			"Neapolitan pizza (Italian: pizza napoletana) also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese",
		category: "Pizza",
		price: 225.0,
		countInStock: 10,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Chicago Pizza",
		image: "/images/chicagopizza.jpg",
		description:
			"Chicago-style pizza usually refers to deep-dish pizza, which is a thick pizza baked in a pan and layered with cheese, fillings like meat and vegetables, and sauce–in that order",
		category: "Pizza",
		price: 220.0,
		countInStock: 14,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "New York-Style Pizza",
		image: "/images/newyorkpizza.jpg",
		description:
			"New York–style pizza is pizza made with a characteristically large hand-tossed thin crust, often sold in wide slices to go",
		category: "Pizza",
		price: 230.0,
		countInStock: 20,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Italian Pizza",
		image: "/images/italianpizza.jpg",
		description:
			"Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.)",
		category: "Pizza",
		price: 220.0,
		countInStock: 10,
		rating: 0,
		numReviews: 0,
	},
	{
		name: "Sicilian Pizza",
		image: "/images/sicilianpizza.jpg",
		description:
			"Sicilian pizza is often thick crusted and rectangular, but can also be round and similar to the Neapolitan pizza. It is often topped with onions, anchovies, tomatoes, herbs and strong cheese such as caciocavallo and toma",
		category: "Pizza",
		price: 220.0,
		countInStock: 20,
		rating: 0,
		numReviews: 0,
	},
];

export default foodItems;