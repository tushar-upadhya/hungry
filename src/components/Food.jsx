import React, { useState } from "react";

import { data } from "../data/data";

const Food = () => {
    // console.log(data);
    const [food, setFood] = useState(data);

    //* food filter
    const filterFood = (categories) => {
        setFood(
            data.filter((item) => {
                return item.category === categories;
            })
        );
    };

    //* filter price
    const filterPrice = (price) => {
        setFood(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">
                Top Rated Menu Item
            </h1>
            {/* filter */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* filter food */}
                <div>
                    <p className="font-bold text-gray-700">Food</p>
                    <div className="flex justify-between flex-wrap ">
                        <button
                            onClick={() => setFood(data)}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            All
                        </button>
                        <button
                            onClick={() => filterFood("burger")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            Burger
                        </button>
                        <button
                            onClick={() => filterFood("pizza")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => filterFood("salad")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            Salads
                        </button>
                        <button
                            onClick={() => filterFood("chicken")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            Chicken
                        </button>
                    </div>
                </div>
                {/* price */}
                <div>
                    <p className="font-bold text-gray-700">Price</p>
                    <div className="flex justify-between max-w[390px] w-full">
                        <button
                            onClick={() => filterPrice("1000")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            1000
                        </button>
                        <button
                            onClick={() => filterPrice("2000")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            2000
                        </button>
                        <button
                            onClick={() => filterPrice("3000")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            3000
                        </button>
                        <button
                            onClick={() => filterPrice("4000")}
                            className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white transition-all duration-300"
                        >
                            4000
                        </button>
                    </div>
                </div>
            </div>

            {/* image */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {food.map((item, index) => (
                    <div
                        key={index}
                        className="border shadow-lg rounded-lg hover:scale-110 duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-semibold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-1 rounded-full">
                                    ₹ {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
