/* eslint-disable jsx-a11y/alt-text */
import Navbar from './Navbar';
import HeroText from './Heroname.js';
import Swipe from './Swipe.js';


export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <img 
        src="/bckgrnd.jpeg" 
        className="absolute w-full h-full object-cover opacity-25" 
        alt="Background" 
      />
      <div className="z-10 ">
        <HeroText />
      </div>
        <div className="absolute bottom-64 z-20 md:hidden">
        <Swipe />
      </div>
    </div>
  );
}
