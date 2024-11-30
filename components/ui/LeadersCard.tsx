"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Card, CardDescription } from "./card-hover-effect"; // Adjust import if needed
import { AnimatePresence, motion } from "framer-motion";
import { leaders } from "@/data/data";



const LeadershipCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-12 -z-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((leader, idx) => (
          <div
            key={leader.id}
            className="relative group block p-1 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-neutral-200/[0.2] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex flex-col items-center space-y-2 ">
                <div className="max-h-52 overflow-hidden rounded-lg">
                  <Image
                    src={leader.image}
                    alt={`${leader.name}'s image`}
                    width={250}
                    height={200}
                    priority
                    className="object-cover w-full"
                  />
                </div>
                <div className="text-center">
                  <CardDescription>
                    <h1 className="text-xl text-white">{leader.name}</h1>
                    <p className=" font-semibold text-gray-300">
                      {leader.position}
                    </p>
                    <p className="text-gray-200">{leader.department}, </p>
                    <p className="text-sm text-gray-200">
                      {leader.level}
                    </p>
                  </CardDescription>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipCard;
