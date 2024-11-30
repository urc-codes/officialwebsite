import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:mx-44">
      <div className="z-50 flex justify-between items-center gap-5 flex-col md:flex-row p-5 overflow-hidden">
        {/* First Section */}
        <div className="bg-primary text-white p-10 w-full lg:w-2/5 rounded-2xl text-center flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Ready to dive into the world of robotics
            </h1>
            <p className="text-sm py-5">
              Join the UENR Robotics Club and be part of a team that is pushing
              the boundaries of technology and innovation
            </p>
          </div>
          <div>
            <Link href={"/"}>
              <Button className="bg-white text-primary hover:text-white hover:border h-12 font-semibold w-full">
                Join Us
              </Button>
            </Link>
          </div>
        </div>{" "}
        {/* Second Section */}
        <div className="bg-primary text-white p-5 rounded-2xl w-full lg:w-3/5  flex flex-col justify-between overflow-hidden">
          <div>
            <div>
              <h1 className="text-2xl font-bold">Social Media Handles</h1>
            </div>
            <div className="bg-white w-full md:w-auto mt-2 inline-flex items-center justify-center gap-10 p-3 rounded-lg">
              <Link href="https://x.com/uenr_robotics?t=Ff749VxcOXRvdTSw5He5Pw&s=09">
                <Image src="/x.svg" alt="" width={25} height={25} priority />
              </Link>
              <Link href="https://www.linkedin.com/company/uenr-robotics-club/">
                <Image
                  src="/LinkedIn.svg"
                  alt=""
                  width={25}
                  height={25}
                  priority
                />
              </Link>
              <Link href="https://www.instagram.com/uenr_robotics?igsh=bG91YmJyYTNmMTd5">
                <Image src="/gram.svg" alt="" width={25} height={25} priority />
              </Link>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <h1 className="text-lg font-semibold">Newsletter</h1>
              <p className="text-sm">
                Stay up to date on our latest innovations and achievements
              </p>
            </div>
            <div className="gap-5 flex items-center mt-3 flex-col md:flex-col lg:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="md:min-w-[320px] w-full p-3 rounded-lg text-primary"
              />
              <Button className="bg-white text-primary hover:text-white hover:border font-semibold h-12 w-full lg:w-[100px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
