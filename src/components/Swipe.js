import React from 'react';
import { Link } from 'react-scroll';  // Import Link from react-scroll

export default function SwipeIndicator() {
  return (
    <div className="flex justify-center mt-8">
      <Link
        to="menu"  // Target the 'menu' section
        smooth={true}  // Smooth scroll effect
        duration={500}  // Duration of the scroll animation
        className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 bg-white p-2"
        aria-label="Swipe down"
      >
        <svg
          className="w-6 h-6 text-gray-500 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7 7 7-7"
          />
        </svg>
        <span className="absolute inset-0 animate-ping rounded-full bg-gray-300 opacity-30"></span>
      </Link>
    </div>
  );
}
