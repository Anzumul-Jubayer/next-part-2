import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;