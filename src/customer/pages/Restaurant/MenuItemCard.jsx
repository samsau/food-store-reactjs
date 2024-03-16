import { Button, Card } from "@mui/material";
import React from "react";

const MenuItemCard = ({ item }) => {
	const handleAddItemToCart = () => {
		console.log("handle Add Item To Cart");
	};
	return (
		<Card className="p-5 lg:flex items-center justify-between box">
			<div className="lg:flex items-center lg:space-x-5">
				<img
					className="w-[7rem] h-[7rem] object-cover"
					src="http://dummyimage.com/139x100.png/5fa2dd/ffffff"
					alt=""
				/>
				<div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
					<p className="font-semibold text-xl">{`Pizza`}</p>
					<p>Rs{299}</p>
					<p className="text-gray-400">{`Rice, Sambar, Papad`}</p>
				</div>
			</div>
			<Button onClick={handleAddItemToCart} className="py-2">
				Add To Cart
			</Button>
		</Card>
	);
};

export default MenuItemCard;
