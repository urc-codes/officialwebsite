import { LocateIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EventCardProps {
  event: {
    imageSrc: string;
    eventDate: string;
    eventTime: string;
    title: string;
    location: string;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden  flex flex-col">
      <div className="relative w-full h-52">
        <Image
          src={event.imageSrc}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="p-4 flex flex-col">
        <div className="text-sm flex gap-5">
          <span className="border p-2 rounded-2xl">{event.eventDate}</span>
          <span className="border p-2 rounded-2xl">{event.eventTime}</span>
        </div>
        <div>
          <h1 className="text-lg font-bold mt-2">{event.title}</h1>
        </div>
        <div className="text-lg mt-1 flex items-center gap-2">
          <LocateIcon />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
