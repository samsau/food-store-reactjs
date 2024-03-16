import {
	Card,
	Divider,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material";
import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const categories = [
	"Thali",
	"Starters",
	"Indian Main Course",
	"Rice and Briyani",
	"Breads",
	"Accompaniments",
	"Desserts",
];

const foodType = ["Vegetarian", "Non-Vegetarian", "Both"];
const menu = [1, 1, 1, 1, 1, 1, 1];
const RestaurantPage = () => {
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedFoodType, setSelectedFoodType] = useState();
	const handleCategoryChange = () => {
		console.log("Selected Category : ", selectedCategory);
	};
	const handleFoodTypeChange = () => {
		console.log("Selected Food Type : ", selectedFoodType);
	};
	return (
		<div className="px-5 lg:px-20">
			<section>
				<h3 className="text-gray-500 py-2mt-10 ">
					{`Home/Dahuangwei/Audre/1/Order Online`}
				</h3>
				<div>
					<img
						className="w-full h-[40vh] object-cover"
						src="http://dummyimage.com/139x100.png/5fa2dd/ffffff"
						alt=""
					/>
				</div>
				<div>
					<h1 className="text-4xl py-1 font-semibold">{`Audre`}</h1>
					<p className="text-gray-500">
						Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci
						vehicula condimentum.
					</p>
					<p className="py-3 text-orange-300">
						Open now 10:30am - 12midnight (Today)
					</p>
				</div>
			</section>
			<Divider />

			<section className="pt-[2rem] lg:flex relative">
				<div className="space-y-10 lg:w-[20%]">
					<Card className="p-5 space-y-5 lg:sticky top-28">
						<div>
							<Typography sx={{ paddingBottom: "1rem" }} variant="h5">
								Category
							</Typography>
							<FormControl component={"fieldset"}>
								<RadioGroup
									name="category"
									value={selectedCategory}
									onChange={handleCategoryChange}
								>
									{categories.map((item, index) => (
										<FormControlLabel
											key={index}
											value={item}
											control={<Radio />}
											label={item}
											sx={{ color: "gray" }}
										/>
									))}
								</RadioGroup>
							</FormControl>
						</div>
						<Divider />
						<div>
							<Typography sx={{ paddingBottom: "1rem" }} variant="h5">
								Food Items
							</Typography>
							<FormControl component={"fieldset"}>
								<RadioGroup
									name="foodType"
									value={selectedCategory}
									onChange={handleFoodTypeChange}
								>
									{foodType.map((item, index) => (
										<FormControlLabel
											key={index}
											value={item}
											control={<Radio />}
											label={item}
											sx={{ color: "gray" }}
										/>
									))}
								</RadioGroup>
							</FormControl>
						</div>
					</Card>
				</div>
				<div className="lg:w-[80%] space-y-5 lg:pl-10">
					{menu.map((item) => (
						<MenuItemCard item={item} />
					))}
				</div>
			</section>
		</div>
	);
};

export default RestaurantPage;
