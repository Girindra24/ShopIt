import axios from "axios";
import {
	FOOD_ITEM_LIST_REQUEST,
	FOOD_ITEM_LIST_SUCCESS,
	FOOD_ITEM_LIST_FAIL,
	FOOD_ITEM_DETAILS_REQUEST,
	FOOD_ITEM_DETAILS_SUCCESS,
	FOOD_ITEM_DETAILS_FAIL,
	FOOD_ITEM_DELETE_SUCCESS,
	FOOD_ITEM_DELETE_REQUEST,
	FOOD_ITEM_DELETE_FAIL,
	FOOD_ITEM_CREATE_REQUEST,
	FOOD_ITEM_CREATE_SUCCESS,
	FOOD_ITEM_CREATE_FAIL,
	FOOD_ITEM_UPDATE_REQUEST,
	FOOD_ITEM_UPDATE_SUCCESS,
	FOOD_ITEM_UPDATE_FAIL,
	FOOD_ITEM_CREATE_REVIEW_REQUEST,
	FOOD_ITEM_CREATE_REVIEW_SUCCESS,
	FOOD_ITEM_CREATE_REVIEW_FAIL,
	FOOD_ITEM_TOP_REQUEST,
	FOOD_ITEM_TOP_SUCCESS,
	FOOD_ITEM_TOP_FAIL,
} from "../constants/foodItemConstants";
import { logout } from "./userActions";

export const listFoodItems = (keyword = "", pageNumber = "") => async (
	dispatch
) => {
	try {
		dispatch({ type: FOOD_ITEM_LIST_REQUEST });

		const { data } = await axios.get(
			`/api/fooditems?keyword=${keyword}&pageNumber=${pageNumber}`
		);

		dispatch({
			type: FOOD_ITEM_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOOD_ITEM_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listFoodItemDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: FOOD_ITEM_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/fooditems/${id}`);

		dispatch({
			type: FOOD_ITEM_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOOD_ITEM_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteFoodItem = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: FOOD_ITEM_DELETE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`/api/fooditems/${id}`, config);

		dispatch({
			type: FOOD_ITEM_DELETE_SUCCESS,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			dispatch(logout());
		}
		dispatch({
			type: FOOD_ITEM_DELETE_FAIL,
			payload: message,
		});
	}
};

export const createFoodItem = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: FOOD_ITEM_CREATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/fooditems`, {}, config);

		dispatch({
			type: FOOD_ITEM_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			dispatch(logout());
		}
		dispatch({
			type: FOOD_ITEM_CREATE_FAIL,
			payload: message,
		});
	}
};

export const updateFoodItem = (foodItem) => async (dispatch, getState) => {
	try {
		dispatch({
			type: FOOD_ITEM_UPDATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/api/fooditems/${foodItem._id}`,
			foodItem,
			config
		);

		dispatch({
			type: FOOD_ITEM_UPDATE_SUCCESS,
			payload: data,
		});
		dispatch({ type: FOOD_ITEM_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			dispatch(logout());
		}
		dispatch({
			type: FOOD_ITEM_UPDATE_FAIL,
			payload: message,
		});
	}
};

export const createFoodItemReview = (foodItemId, review) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: FOOD_ITEM_CREATE_REVIEW_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.post(`/api/fooditems/${foodItemId}/reviews`, review, config);

		dispatch({
			type: FOOD_ITEM_CREATE_REVIEW_SUCCESS,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
			dispatch(logout());
		}
		dispatch({
			type: FOOD_ITEM_CREATE_REVIEW_FAIL,
			payload: message,
		});
	}
};

export const listTopFoodItems = () => async (dispatch) => {
	try {
		dispatch({ type: FOOD_ITEM_TOP_REQUEST });

		const { data } = await axios.get(`/api/fooditems/top`);

		dispatch({
			type: FOOD_ITEM_TOP_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOOD_ITEM_TOP_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
