import { useEffect, useState } from 'react';

export default function HeroText() {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setRotate(true); // Start rotating when component mounts
  }, []);

  return (
    <div className="text-center mb-16 sm:mb-24">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-custom font-semibold text-white">
        café 
        <span className={`inline-block ${rotate ? 'rotate-continuous' : ''} mx-2`}>
          <img 
            src="/cafeotocka.png" 
            alt="O" 
            className="inline-block w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" // Responsive sizing
            style={{ transformOrigin: 'center' }} 
          />
        </span>
        točka
      </h1>
    </div>
  );
}
