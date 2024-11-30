"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonProps = {
    "data-fillout-id": "tvcnfNNEBaus",
    "data-fillout-embed-type": "popup",
    "data-fillout-button-text": "Join Us",
    "data-fillout-dynamic-resize": true,
    "data-fillout-button-color": "#B4D811FF",
    "data-fillout-button-size": "large",
    "data-fillout-inherit-parameters": true,
    "data-fillout-popup-size": "large"
  };

  return (
    <div className="hero_banner w-full h-fit sm:h-[70vh] md:h-[90vh] flex items-center justify-center flex-col text-white relative bg-gradient-to-b from-[#053247] to-[#032F3E]">
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
          Welcome to the <br />
          <span className="text-primary-light">UENR Robotics Club</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide mb-6 text-gray-300">
          Nursing Engineers for a Better Society
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl tracking-wide max-w-3xl text-gray-200 mb-8">
          We empower aspiring engineers through hands-on learning and
          cutting-edge technology, shaping the future one innovation at a time.
        </p>

        {/* Main Hero Button */}
        <button
          {...buttonProps}
          className="bg-primary-light bg-opacity-35 backdrop-blur-3xl border hover:bg-white hover:text-black px-6 mb-10 py-3 rounded-full font-bold text-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          JOIN US TODAY
        </button>
      </div>

      {/* Floating Button */}
      <button
        {...buttonProps}
        className={`
          fixed bottom-5 right-5 z-50
          bg-primary-light text-black bg-yellow-400
          px-4 py-3 rounded-full shadow-lg
          cursor-pointer hover:shadow-xl
          transition-all duration-500
          ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        `}
      >
        JOIN US
      </button>
    </div>
  );
};

export default Hero;