"use client";
import { motion } from "framer-motion";
import { ArrowDown, Rocket } from "lucide-react";
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
    "data-fillout-popup-size": "large",
  };

  return (
    <div className="hero_banner w-full h-screen  sm:h-[70vh] md:h-[90vh] flex items-center justify-center flex-col text-white relative bg-gradient-to-b from-[#053247] to-[#032F3E]">
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="flex justify-center mb-6"
          >
            <Rocket className="text-yellow-400 w-16 h-16" strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            UENR <span className="text-yellow-400">Robotics Club</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto">
            Nursing Engineers for a Better Society
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            We empower aspiring engineers through hands-on learning and
            cutting-edge technology, shaping the future one innovation at a
            time.
          </p>

          <motion.button
            {...buttonProps}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full 
            font-bold text-lg shadow-xl hover:bg-yellow-500 
            transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Join Us Today <ArrowDown className="inline w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        {...buttonProps}
        className={`
          fixed bottom-5 right-5 z-50 flex justify-center items-center
          bg-primary-light text-black bg-yellow-400
          px-4 py-3 rounded-full shadow-lg
          cursor-pointer hover:shadow-xl
          transition-all duration-500
          ${
            isScrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }
        `}
      >
        <Rocket className="w-5 h-5" strokeWidth={2} /> Join Us
      </motion.button>
    </div>
  );
};

export default Hero;
