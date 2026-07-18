import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Image */}
      <div className="h-56 w-full animate-pulse bg-gray-200"></div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div className="flex justify-between">
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200"></div>
          <div className="h-6 w-16 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="flex gap-3 pt-2">
          <div className="h-11 flex-1 animate-pulse rounded-xl bg-gray-200"></div>
          <div className="h-11 flex-1 animate-pulse rounded-xl bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;