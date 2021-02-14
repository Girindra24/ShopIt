import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import FoodItem from "../components/FoodItem";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import FoodItemCarousel from "../components/FoodItemCarousel";
import Meta from "../components/Meta";
import { listFoodItems } from "../actions/foodItemActions";

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const foodItemList = useSelector((state) => state.foodItemList);
	const { loading, error, foodItems, page, pages } = foodItemList;

	useEffect(() => {
		dispatch(listFoodItems(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			<Meta />
			{!keyword ? (
				<FoodItemCarousel />
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
			<h1>Food Items</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Row>
						{foodItems.map((foodItem) => (
							<Col key={foodItem._id} sm={12} md={6} lg={4} xl={3}>
								<FoodItem foodItem={foodItem} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ""}
					/>
				</>
			)}
		</>
	);
};

export default HomeScreen;
