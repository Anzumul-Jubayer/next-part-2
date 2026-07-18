import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {category}
          </span>

          <span className="text-xl font-bold text-orange-600">${price}</span>
        </div>

        <h2 className="line-clamp-2 text-xl font-bold text-gray-800">
          {title}
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-xl border border-orange-500 py-2.5 font-medium text-orange-600 transition hover:bg-orange-50">
            Add to cart
          </button>

          <Link
            href={`/foods/${id}`}
            className="flex flex-1 justify-center rounded-xl bg-orange-500 py-2.5 font-medium text-white transition hover:bg-orange-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
