import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: "Welcome To ShopIt",
	description: "Order your food online while on journey",
	keywords: "FoodItems, Breakfast, Lunch, Dinner, Snack, Pizza",
};

export default Meta;
