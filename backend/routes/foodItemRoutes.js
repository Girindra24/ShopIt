import express from "express";
const router = express.Router();
import {
	getFoodItems,
	getFoodItemById,
	deleteFoodItem,
	createFoodItem,
	updateFoodItem,
	createFoodItemReview,
	getTopFoodItems,
} from "../controllers/foodItemController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getFoodItems).post(protect, admin, createFoodItem);
router.route("/:id/reviews").post(protect, createFoodItemReview);
router.get("/top", getTopFoodItems);
router
	.route("/:id")
	.get(getFoodItemById)
	.delete(protect, admin, deleteFoodItem)
	.put(protect, admin, updateFoodItem);

export default router;
