import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const FoodItem = ({ foodItem }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/fooditem/${foodItem._id}`}>
				<Card.Img
					style={{ width: "200px", height: "200px" }}
					src={foodItem.image}
					variant='top'
				/>
			</Link>

			<Card.Body>
				<Link to={`/fooditem/${foodItem._id}`}>
					<Card.Title as='div'>
						<strong>{foodItem.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating
						value={foodItem.rating}
						text={`${foodItem.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as='h3'>${foodItem.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default FoodItem;
