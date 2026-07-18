"use client";

import { useState } from "react";

const ReviewCard = ({ review }) => {
  const {
    user,
    email,
    photo,
    rating,
    review: message,
    likes,
    date,
  } = review;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        <span className="text-sm text-gray-400">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex text-yellow-500">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      {/* Review */}
      <p className="mt-4 leading-7 text-gray-600">
        {message}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <button
          onClick={handleLike}
          className={`rounded-xl px-4 py-2 transition ${
            liked
              ? "bg-red-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          ❤️ Like
        </button>

        <span className="text-sm font-medium text-gray-500">
          {likeCount} Likes
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;