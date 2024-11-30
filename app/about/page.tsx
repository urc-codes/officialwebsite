import { FlipWords } from "@/components/ui/flip-words";
import LeadershipCard from "@/components/ui/LeadersCard";
import React from "react";

const About = () => {
  return (

    <div className=" px-6 py-10 max-w-7xl mx-auto space-y-12">
      <div className="flex justify-center items-center">
        <FlipWords
          words={["About Us", "Who We Are"]}
          duration={3000}
          className="text-4xl font-extrabold text-gray-800 tracking-wide"
        />
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-gray-600">
          UENR Robotics Club is a club formed by students of the University Of
          Energy and Natural Resources in 2019. The mission of the club is to
          develop student interest in science, technology, engineering, and math
          (STEM) through robotics. UENR Robotics Club has members with rare
          insights and expertise in fields like 3D design and printing, app and
          web development, hardware programming, and PCB design necessary for
          developing robotics and IoT systems.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-700">Leadership</h2>
        <LeadershipCard />
      </div>
    </div>
  );
};

export default About;
