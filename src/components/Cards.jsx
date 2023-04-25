import React from "react";

const Cards = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* cards */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
                    <p className="font-bold text-2xl px-2 pt-4">
                        Sun's Out,BOGO's Out
                    </p>
                    <p className="px-2">Through 8/26</p>

                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                        OrderNow
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="/"
                />
            </div>

            {/* cards */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
                    <p className="font-bold text-2xl px-2 pt-4">Restaurant</p>
                    <p className="px-2">Add Daily</p>

                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                        Get Location
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="/"
                />
            </div>

            {/* cards */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
                    <p className="font-bold text-2xl px-2 pt-4">
                        Deliver Dessert to!
                    </p>
                    <p className="px-2">Light Sweet</p>

                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                        OrderNow
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src="https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?b=1&s=612x612&w=0&k=20&c=9voIOmm310Sf2SfDxM-um1exMvLJP6B2StqLwQUSwPk="
                    alt="/"
                />
            </div>
        </div>
    );
};

export default Cards;
