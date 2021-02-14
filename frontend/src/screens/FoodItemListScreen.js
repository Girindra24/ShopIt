import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import {
	listFoodItems,
	deleteFoodItem,
	createFoodItem,
} from "../actions/foodItemActions";
import { FOOD_ITEM_CREATE_RESET } from "../constants/foodItemConstants";

const FoodItemListScreen = ({ history, match }) => {
	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const foodItemsList = useSelector((state) => state.foodItemList);
	const { loading, error, foodItems, page, pages } = foodItemsList;

	const foodItemDelete = useSelector((state) => state.foodItemDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = foodItemDelete;

	const foodItemCreate = useSelector((state) => state.foodItemCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		foodItem: createdFoodItem,
	} = foodItemCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		dispatch({ type: FOOD_ITEM_CREATE_RESET });

		if (!userInfo || !userInfo.isAdmin) {
			history.push("/login");
		}

		if (successCreate) {
			history.push(`/admin/fooditem/${createdFoodItem._id}/edit`);
		} else {
			dispatch(listFoodItems("", pageNumber));
		}
	}, [
		dispatch,
		history,
		userInfo,
		successDelete,
		successCreate,
		createdFoodItem,
		pageNumber,
	]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure")) {
			dispatch(deleteFoodItem(id));
		}
	};

	const createFoodItemHandler = () => {
		dispatch(createFoodItem());
	};

	return (
		<>
			<Row className='align-items-center'>
				<Col>
					<h1>Food Items</h1>
				</Col>
				<Col className='text-right'>
					<Button className='my-3' onClick={createFoodItemHandler}>
						<i className='fas fa-plus'></i> Create Food Items
					</Button>
				</Col>
			</Row>
			{loadingDelete && <Loader />}
			{errorDelete && <Message variant='danger'>{errorDelete}</Message>}
			{loadingCreate && <Loader />}
			{errorCreate && <Message variant='danger'>{errorCreate}</Message>}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Table striped bordered hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>PRICE</th>
								<th>CATEGORY</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{foodItems.map((foodItem) => (
								<tr key={foodItem._id}>
									<td>{foodItem._id}</td>
									<td>{foodItem.name}</td>
									<td>RS - {foodItem.price}</td>
									<td>{foodItem.category}</td>
									<td>
										<LinkContainer to={`/admin/fooditem/${foodItem._id}/edit`}>
											<Button variant='light' className='btn-sm'>
												<i className='fas fa-edit'></i>
											</Button>
										</LinkContainer>
										<Button
											variant='danger'
											className='btn-sm'
											onClick={() => deleteHandler(foodItem._id)}
										>
											<i className='fas fa-trash'></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Paginate pages={pages} page={page} isAdmin={true} />
				</>
			)}
		</>
	);
};

export default FoodItemListScreen;
