import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <ReviewCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ReviewLoading;
