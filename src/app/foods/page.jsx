import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};
const FoodPage = async () => {
  const foods = await getFoods();
  console.log(foods);
  return (
    <div className="my-5 flex gap-6">
      {/* Foods Section */}
      <div className="flex-1">
        <h2 className="mb-5 text-4xl font-bold">
          Total <span className="text-yellow-500">{foods.length}</span> Foods
          Found
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className="sticky top-5 h-fit w-80 rounded-xl border bg-white p-5 shadow">
        <h2 className="text-2xl font-bold">🛒 Cart Items</h2>

        <CartItems />
      </div>
    </div>
  );
};

export default FoodPage;
