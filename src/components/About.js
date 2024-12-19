import React from 'react';
import Gallery from './Gallery'; // Import the gallery component

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-gray-200 px-5 sm:px-10 md:px-20 py-10 justify-center items-center space-y-8 lg:space-y-0">
      {/* Left: Gallery */}
      <div className="w-full h-full flex justify-center items-center lg:w-1/2 lg:pr-5">
        <div className="w-full h-auto max-w-full flex justify-center items-center">
          <Gallery />
        </div>
      </div>

      {/* Right: Text and Map */}
      <div className="w-full h-full flex flex-col justify-start items-center lg:items-start lg:w-1/2 space-y-8">
        <div className="w-full text-left px-5 sm:px-10 lg:px-0">
          <h2 className="text-4xl sm:text-3xl font-bold text-gray-800 mb-4">Kde nás najdete</h2>
          <p className="text-base text-sm text-gray-600 leading-relaxed">
            V případě zájmu nás neváhejte kontaktovat na telefonním čísle: 
            <a href="tel:+420775332206" className="font-bold text-gray-800"> 775 332 206</a>.
          </p>
          <p className="text-base text-sm text-gray-600 leading-relaxed mt-2">
            OTVÍRACÍ DOBA: PO – NE 8:00 – 19:00
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full h-64 sm:h-80 bg-gray-300 rounded-lg shadow-md overflow-hidden">
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
