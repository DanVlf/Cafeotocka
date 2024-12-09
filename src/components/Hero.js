/* eslint-disable jsx-a11y/alt-text */
import Navbar from './Navbar';
import HeroText from './Heroname.js';

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <img 
        src="/bckgrnd.jpeg" 
        className="absolute inset-0 w-full h-full object-cover opacity-25" 
        alt="Background" 
      />
      <Navbar />
      <div className="z-10">
        <HeroText />
      </div>
    </div>
  );
}
