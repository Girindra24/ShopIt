import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopFoodItems } from "../actions/foodItemActions";

const FoodItemCarousel = () => {
	const dispatch = useDispatch();

	const foodItemTopRated = useSelector((state) => state.foodItemTopRated);
	const { loading, error, foodItems } = foodItemTopRated;

	useEffect(() => {
		dispatch(listTopFoodItems());
	}, [dispatch]);

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<Carousel pause='hover' className='bg-dark'>
			{foodItems.map((foodItem) => (
				<Carousel.Item key={foodItem._id}>
					<Link to={`/fooditem/${foodItem._id}`}>
						<Image src={foodItem.image} alt={foodItem.name} fluid />
						<Carousel.Caption className='carousel-caption'>
							<h2>
								{foodItem.name} (Rs - {foodItem.price})
							</h2>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default FoodItemCarousel;
