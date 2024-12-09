import React from 'react';
import Gallery from './Gallery'; // Import the gallery component

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-gray-200 px-5 sm:px-10 md:px-20 py-10 space-y-8 lg:space-y-0">
      {/* Left: Gallery */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center lg:pr-5">
        <Gallery />
      </div>

      {/* Right: Google Maps and Description */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-start items-start space-y-8">
        {/* Heading and Description */}
        <div className="w-full text-left px-5 sm:px-10 lg:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Navštivte nás</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Zde je text o naší kavárně, může zde být vzkaz nebo kontaktní osoba, popřípadě nějaké další info. Nebo jen prázdné místo.
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full h-64 sm:h-80 bg-gray-300 rounded-lg overflow-hidden shadow-lg px-5 sm:px-10 lg:px-0">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1075751522803!2d14.29625587711663!3d50.06554697152122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bbf00657b0b91%3A0xe4e0f406a4c79e22!2zQ2Fmw6kgT3RvxI1rYQ!5e0!3m2!1scs!2scz!4v1733777590643!5m2!1scs!2scz"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
