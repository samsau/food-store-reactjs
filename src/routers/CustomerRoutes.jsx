import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import RestaurantPage from "../customer/pages/Restaurant/RestaurantPage";
import Navbar from "../customer/components/Navbar/Navbar";
import Cart from "../customer/pages/Cart/Cart";

const CustomerRoutes = () => {
	return (
		<div className="relative">
			<div className="sticky top-0 z-50">
				<Navbar />
			</div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route
					path="/restaurant/:city/:name/:id"
					element={<RestaurantPage />}
				/>
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
};

export default CustomerRoutes;

/*
{
		id: 1,
		imageUrl: "http://dummyimage.com/139x100.png/5fa2dd/ffffff",
		name: "Audre",
		rating: 1.0,
		city: "Dahuangwei",
		description:
			"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
	}
*/
