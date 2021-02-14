import {
	FOOD_ITEM_LIST_REQUEST,
	FOOD_ITEM_LIST_SUCCESS,
	FOOD_ITEM_LIST_FAIL,
	FOOD_ITEM_DETAILS_REQUEST,
	FOOD_ITEM_DETAILS_SUCCESS,
	FOOD_ITEM_DETAILS_FAIL,
	FOOD_ITEM_DELETE_REQUEST,
	FOOD_ITEM_DELETE_SUCCESS,
	FOOD_ITEM_DELETE_FAIL,
	FOOD_ITEM_CREATE_RESET,
	FOOD_ITEM_CREATE_FAIL,
	FOOD_ITEM_CREATE_SUCCESS,
	FOOD_ITEM_CREATE_REQUEST,
	FOOD_ITEM_UPDATE_REQUEST,
	FOOD_ITEM_UPDATE_SUCCESS,
	FOOD_ITEM_UPDATE_FAIL,
	FOOD_ITEM_UPDATE_RESET,
	FOOD_ITEM_CREATE_REVIEW_REQUEST,
	FOOD_ITEM_CREATE_REVIEW_SUCCESS,
	FOOD_ITEM_CREATE_REVIEW_FAIL,
	FOOD_ITEM_CREATE_REVIEW_RESET,
	FOOD_ITEM_TOP_REQUEST,
	FOOD_ITEM_TOP_SUCCESS,
	FOOD_ITEM_TOP_FAIL,
} from "../constants/foodItemConstants";

export const foodItemListReducer = (state = { foodItems: [] }, action) => {
	switch (action.type) {
		case FOOD_ITEM_LIST_REQUEST:
			return { loading: true, foodItems: [] };
		case FOOD_ITEM_LIST_SUCCESS:
			return {
				loading: false,
				foodItems: action.payload.foodItems,
				pages: action.payload.pages,
				page: action.payload.page,
			};
		case FOOD_ITEM_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const foodItemDetailsReducer = (
	state = { foodItem: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case FOOD_ITEM_DETAILS_REQUEST:
			return { ...state, loading: true };
		case FOOD_ITEM_DETAILS_SUCCESS:
			return { loading: false, foodItem: action.payload };
		case FOOD_ITEM_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const foodItemDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case FOOD_ITEM_DELETE_REQUEST:
			return { loading: true };
		case FOOD_ITEM_DELETE_SUCCESS:
			return { loading: false, success: true };
		case FOOD_ITEM_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const foodItemCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case FOOD_ITEM_CREATE_REQUEST:
			return { loading: true };
		case FOOD_ITEM_CREATE_SUCCESS:
			return { loading: false, success: true, foodItem: action.payload };
		case FOOD_ITEM_CREATE_FAIL:
			return { loading: false, error: action.payload };
		case FOOD_ITEM_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const foodItemUpdateReducer = (state = { foodItem: {} }, action) => {
	switch (action.type) {
		case FOOD_ITEM_UPDATE_REQUEST:
			return { loading: true };
		case FOOD_ITEM_UPDATE_SUCCESS:
			return { loading: false, success: true, foodItem: action.payload };
		case FOOD_ITEM_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case FOOD_ITEM_UPDATE_RESET:
			return { foodItem: {} };
		default:
			return state;
	}
};

export const foodItemReviewCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case FOOD_ITEM_CREATE_REVIEW_REQUEST:
			return { loading: true };
		case FOOD_ITEM_CREATE_REVIEW_SUCCESS:
			return { loading: false, success: true };
		case FOOD_ITEM_CREATE_REVIEW_FAIL:
			return { loading: false, error: action.payload };
		case FOOD_ITEM_CREATE_REVIEW_RESET:
			return {};
		default:
			return state;
	}
};

export const foodItemTopRatedReducer = (state = { foodItems: [] }, action) => {
	switch (action.type) {
		case FOOD_ITEM_TOP_REQUEST:
			return { loading: true, foodItems: [] };
		case FOOD_ITEM_TOP_SUCCESS:
			return { loading: false, foodItems: action.payload };
		case FOOD_ITEM_TOP_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
