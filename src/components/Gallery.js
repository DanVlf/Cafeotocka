import { useState, useEffect } from 'react';

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

  // Auto-scrolling every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>

      {/* Gallery Container */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg">
        {/* Image Gallery Slider */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, 
          }}
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
    </div>
  );
}
