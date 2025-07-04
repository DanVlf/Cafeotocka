import { useState, useEffect } from "react";
import Papa from "papaparse"; // Importujeme knihovnu PapaParse
import { useSwipeable } from "react-swipeable"; // Importujeme knihovnu pro swipe
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons from react-icons

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  // Načítání novinek z CSV souboru
  useEffect(() => {
    Papa.parse("news.csv", {
      download: true, // Stažení souboru
      header: true, // Použití první řádky jako hlavičky
      dynamicTyping: true, // Automatické přetypování
      complete: (result) => {
        setNews(result.data); // Uložení novinek do stavu
      },
    });
  }, []);

  const handlePrev = () => {
    setSwipeDirection('right');
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : news.length - 1));
  };

  const handleNext = () => {
    setSwipeDirection('left');
    setCurrentIndex((prev) => (prev < news.length - 1 ? prev + 1 : 0));
  };

  // Always call the hook to prevent the "Rendered more hooks" issue
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Pohyb vlevo = další novinka
    onSwipedRight: handlePrev, // Pohyb vpravo = předchozí novinka
    preventDefaultTouchmoveEvent: true,
  });

  // Zajištění, že když ještě nejsou novinky načteny, nebudeme vykreslovat chyby
  if (news.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-gray-600"></div>
      </div>
    );
  }

  const currentNews = news[currentIndex];

  return (
    <div className="bg-gray-200 min-h-[40rem] sm:min-h-0 xl:h-[80vh] relative">
      <div className="flex flex-col md:flex-row items-center h-full" {...swipeHandlers}>
        <div className="w-full sm:w-1/2 h-auto flex-shrink-0 flex items-center justify-center p-10">
          <div className="w-full max-w-[600px] max-h-[500px]">
            <img
              src={currentNews.image}
              alt={currentNews.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 h-auto sm:h-full p-8 flex flex-col justify-center">
          <p className="text-sm text-gray-500">{currentNews.date}</p>
          <h2 className="text-3xl font-bold text-gray-900">{currentNews.title}</h2>
          <p className="mt-4 text-md text-gray-600">{currentNews.description}</p>

          {/* Desktop: Arrows */}
          <div className="mt-6 flex space-x-4 justify-center sm:justify-start hidden md:flex">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 text-white rounded-lg transition hover:bg-gray-700 flex items-center justify-center"
            >
              <FaArrowLeft className="text-md" />
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-300 text-white rounded-lg transition hover:bg-gray-700 flex items-center justify-center"
            >
              <FaArrowRight className="text-md" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and tablet: Dots and swipe */}
      <div className="absolute bottom-8 w-full flex justify-center md:hidden">
        <div className="flex space-x-2 text-gray-600 ">
          {/* Dots Indicator */}
          {news.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === index ? "bg-gray-600" : "bg-gray-400"
              } transition-all duration-200 ease-in-out`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}