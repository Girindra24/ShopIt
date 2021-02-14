import asyncHandler from "express-async-handler";
import FoodItem from "../models/foodItemModel.js";

// @desc    Fetch all fooditems
// @route   GET /api/fooditems
// @access  Public
const getFoodItems = asyncHandler(async (req, res) => {
	const pageSize = 10;
	const page = Number(req.query.pageNumber) || 1;

	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: "i",
				},
		  }
		: {};

	const count = await FoodItem.countDocuments({ ...keyword });
	const foodItems = await FoodItem.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1));

	res.json({ foodItems, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single food item
// @route   GET /api/fooditems/:id
// @access  Public
const getFoodItemById = asyncHandler(async (req, res) => {
	const foodItem = await FoodItem.findById(req.params.id);

	if (foodItem) {
		res.json(foodItem);
	} else {
		res.status(404);
		throw new Error("foodItem not found");
	}
});

// @desc    Delete a food item
// @route   DELETE /api/fooditems/:id
// @access  Private/Admin
const deleteFoodItem = asyncHandler(async (req, res) => {
	const foodItemDelete = await FoodItem.findById(req.params.id);

	if (foodItemDelete) {
		await FoodItem.remove();
		res.json({ message: "Item removed" });
	} else {
		res.status(404);
		throw new Error("Item not found");
	}
});

// @desc    Create a Food Item
// @route   POST /api/fooditems
// @access  Private/Admin
const createFoodItem = asyncHandler(async (req, res) => {
	const foodItemCreate = new FoodItem({
		name: "Sample name",
		price: 0,
		user: req.user._id,
		image: "/images/sample.jpg",
		category: "Sample category",
		countInStock: 0,
		numReviews: 0,
		description: "Sample description",
	});

	const createdFoodItem = await foodItemCreate.save();
	res.status(201).json(createdFoodItem);
});

// @desc    Update a food item
// @route   PUT /api/fooditems/:id
// @access  Private/Admin
const updateFoodItem = asyncHandler(async (req, res) => {
	const { name, price, description, image, category, countInStock } = req.body;

	const foodItemUpdate = await FoodItem.findById(req.params.id);

	if (foodItemUpdate) {
		foodItemUpdate.name = name;
		foodItemUpdate.price = price;
		foodItemUpdate.description = description;
		foodItemUpdate.image = image;
		foodItemUpdate.category = category;
		foodItemUpdate.countInStock = countInStock;

		const updatedFoodItem = await foodItemUpdate.save();
		res.json(updatedFoodItem);
	} else {
		res.status(404);
		throw new Error("Food Item not found");
	}
});

// @desc    Create new review
// @route   POST /api/fooditems/:id/reviews
// @access  Private
const createFoodItemReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body;

	const foodItemReview = await FoodItem.findById(req.params.id);

	if (foodItemReview) {
		const alreadyReviewed = foodItemReview.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error("Item already reviewed");
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};

		foodItemReview.reviews.push(review);

		foodItemReview.numReviews = foodItemReview.reviews.length;

		foodItemReview.rating =
			foodItemReview.reviews.reduce((acc, item) => item.rating + acc, 0) /
			foodItemReview.reviews.length;

		await foodItemReview.save();
		res.status(201).json({ message: "Review added" });
	} else {
		res.status(404);
		throw new Error("Item not found");
	}
});

// @desc    Get top rated fooditems
// @route   GET /api/fooditems/top
// @access  Public
const getTopFoodItems = asyncHandler(async (req, res) => {
	const foodItemsTop = await FoodItem.find({}).sort({ rating: -1 }).limit(3);

	res.json(foodItemsTop);
});

export {
	getFoodItems,
	getFoodItemById,
	deleteFoodItem,
	createFoodItem,
	updateFoodItem,
	createFoodItemReview,
	getTopFoodItems,
};
