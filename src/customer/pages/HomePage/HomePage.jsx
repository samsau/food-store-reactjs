import React from "react";
import "./HomePage.css";
import MultipleItemCarosel from "./MultipleItemCarosel";
import { restaurants } from "../../../Data/Restaurant";
import RestaurantCard from "./RestaurantCard";
const HomePage = () => {
	return (
		<div>
			{/* header section with background and upper body */}
			<section className="-z-50 banner relative flex flex-col justify-center items-center">
				<div className="w-[50vw] z-10 text-center">
					<p className="text-2xl lg:text-7xl font-bold z-10 py-5">Food Store</p>
					<p className="z-10 text-gray-300 text-xl lg:text-4xl">
						Taste the Convenience: Food, Fest and Delivered
					</p>
				</div>
				<div className="cover top=0 right-0 left-0 absolute"></div>
				<div className="fadout"></div>
			</section>

			{/* carousel section */}
			<section className="p-10 lg:py-10 lg:px-20">
				<div className="">
					<p className="text-2xl font-semibold text-gray-400 py-3 pb-10"></p>
				</div>

				<MultipleItemCarosel />
			</section>

			{/* menu card section */}
			<section className="px-5 lg:px-20">
				<div>
					<h1 className="text-2xl font-semibold text-gray-400 py-3">
						Order From Our Handpicked Favourites
					</h1>
					<div className="flex flex-wrap items-center justify-around">
						{restaurants.map((item, index) => (
							<RestaurantCard item={item} index={index} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
