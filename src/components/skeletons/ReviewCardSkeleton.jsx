import React from 'react';

const ReviewCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-gray-200"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 w-40 rounded bg-gray-200"></div>
          <div className="h-3 w-56 rounded bg-gray-200"></div>
        </div>

        <div className="h-3 w-20 rounded bg-gray-200"></div>
      </div>

      {/* Rating */}
      <div className="mt-5 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-5 rounded-full bg-gray-200"
          ></div>
        ))}
      </div>

      {/* Review */}
      <div className="mt-5 space-y-3">
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="h-10 w-28 rounded-xl bg-gray-200"></div>
        <div className="h-4 w-20 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;

