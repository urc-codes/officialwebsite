import EventCard from "@/components/EventCard";
import Eventcarousel from "@/components/Eventcarousel";
import { eventData } from "@/data/data";
import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <div>
      <div className="hero_banner relative overflow-hidden h-[500px]">
        <Image
          src="/event.jpg"
          alt="Event Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-auto"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold ">All Events</h1>
            <span className="text-sm md:text-lg">
              Home {">"}
              {">"} Events
            </span>
          </div>
        </div>
      </div>
      <div className="py-10">
        <Eventcarousel />
      </div>
      <div className="lg:mx-44">
        {eventData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
            {eventData.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-16 bg-[#0c7aad]/10 rounded-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0c7aad"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#0c7aad] mb-4">
                No Events Available
              </h2>
              <p className="text-gray-600 mb-6">
                We are currently planning some exciting events. Check back soon
                or stay tuned to our social media for updates.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
