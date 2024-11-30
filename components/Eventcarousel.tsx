import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { LocateIcon } from "lucide-react";
import { eventData, EventData } from "@/data/data"; 

const EventCarousel: React.FC = () => {
  return (
    <div className="relative lg:mx-44">
      <Carousel className="w-full p-5 rounded-2xl">
        <CarouselContent className="flex items-center justify-start">
          {eventData.map((event: EventData) => (
            <CarouselItem
              key={event.id} 
              className="h-52 bg-gray-500 w-1/3 min-h-[450px] relative rounded-lg overflow-hidden mx-2"
            >
              <div className="w-full h-full relative">
                <Image
                  src={event.imageSrc}
                  alt={event.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-auto"
                />
              </div>

              <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-70" />

              <div className="absolute inset-0 flex flex-col justify-between text-white p-10">
                <div>
                  <h1 className="text-sm bg-primary bg-opacity-30 backdrop-blur-xl p-2 rounded-xl w-max">
                    Upcoming Event
                  </h1>
                </div>

                <div>
                  <div className="text-sm flex gap-5">
                    <span className="border p-2 rounded-2xl">
                      {event.eventDate}
                    </span>
                    <span className="border p-2 rounded-2xl">
                      {event.eventTime}
                    </span>
                  </div>

                  <div className="text-2xl font-bold mt-2">{event.title}</div>

                  <div className="text-lg mt-1 flex items-center gap-2">
                    <LocateIcon />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 pb-4 lg:pb-6">
          <CarouselPrevious className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-300 transition">
            &#9664;
          </CarouselPrevious>
          <CarouselNext className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-300 transition">
            &#9654;
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default EventCarousel;