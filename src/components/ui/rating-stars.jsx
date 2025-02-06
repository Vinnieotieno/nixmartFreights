import React from 'react'

const RatingStars = ({ rating, size, className }) => {
    const SizeVariants = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
        xl:"w-6 h-6"
    }
  return (
    <div className="flex">
      {Array.from({ length: rating }, (_, idx) => (
        <svg
          key={idx}
          className={`h-4 w-4 fill-brandSunset ${(idx + 1 <= rating ? "text-yellow-500" : "text-brandFog", SizeVariants[size], className)}`}
          viewBox="0 0 24 24">
          <path d="M12 17.27l-5.27 3.18 1.09-6.01L2.5 9.81l6.04-.88L12 2l2.46 6.93 6.04.88-5.32 4.64 1.09 6.01z"></path>
        </svg>
      ))}
    </div>
  );
}

export default RatingStars