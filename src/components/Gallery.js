import { useState, useEffect, useRef } from 'react';

const images = [
  '/Interier_1.JPG',
  '/Interier_2.JPG',
  '/Interier_3.JPG',
  '/Interier_4.JPG',
  '/Nabidka_1.JPG',
  '/Nabidka_2.JPG',
  '/Nabidka_3.JPG',
  '/Nabidka_4.JPG',
  '/Nabidka_5.JPG',
  '/Nabidka_6.JPG',
  '/Nabidka_7.JPG',
  '/Nabidka_8.JPG',
  '/Nabidka_9.JPG',
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0);  // Ref to store the touch start position
  const touchEnd = useRef(0);  // Ref to store the touch end position
  const intervalRef = useRef(null); // Ref to store the interval for auto-scrolling

  // Auto-scrolling every 3 seconds
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoScroll(); // Start auto-scrolling when the component is mounted
    return () => {
      clearInterval(intervalRef.current); // Cleanup the interval when the component is unmounted
    };
  }, []);

  // Handle swipe events for touch devices
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].clientX;

    if (touchStart.current - touchEnd.current > 50) {
      // Swipe Left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (touchEnd.current - touchStart.current > 50) {
      // Swipe Right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    // Stop the auto-scrolling when user swipes
    clearInterval(intervalRef.current);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg">
      {/* Image Gallery Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full px-4"
            style={{
              opacity: idx === currentIndex ? 1 : 0.5, // Highlight the central image
              transition: 'opacity 0.5s ease-in-out', // Smooth fade for opacity
            }}
          >
            <img
              src={src}
              alt={`Interior ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
