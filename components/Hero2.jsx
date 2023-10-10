import Image from "next/image";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaGears } from "react-icons/fa6";

const Hero2 = () => {
  return (
    <div className="w-full flex bg-neutral-500 bg-opacity-10  flex-col items-center">
      <div className="w-full px-3 lg:px-0 lg:w-3/5 flex lg:h-[400px] py-10 lg:py-10 items-center gap-5 lg:gap-1 flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 items-center lg:items-start flex gap-1 flex-col">
          <div className="font-semibold text-lg text-center lg:text-start lg:text-2xl">
            We Have Many Year Experience in Consulting Business
          </div>
          <div className="text-center lg:text-start text-[10px] lg:text-xs text-neutral-950 text-opacity-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            tenetur? Corrupti autem veniam nesciunt quam possimus eligendi sint,
            placeat totam asperiores eius rerum esse ut eum nihil in ipsam illo
            deleniti distinctio dicta, animi vitae. Libero exercitationem
            laudantium qui blanditiis?
          </div>
          <div className=" mt-3 px-5 text-sm py-2 bg-blue-400 w-fit rounded-md text-neutral-50 cursor-pointer hover:bg-blue-600">
            Know More
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            alt="img"
            src={"/photo2.jpg"}
            width={500}
            height={400}
            className="w-full h-full object-contain"
          />
          <div className="absolute -bottom-5 left-[110px] lg:top-1/2 bg-blue-400 lg:bottom-0 h-fit p-2 rounded-full lg:-left-7 text-4xl text-neutral-50 border-4 border-neutal-50 cursor-pointer">
            <BsFillPlayFill />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5 grid grid-cols-2 gap-3 lg:gap-0 lg:flex items-center justify-between pb-10 lg:flex-row">
        <div className="flex flex-col items-center">
          <div className="text-4xl">
            <FaGears />
          </div>
          <div className="flex text-lg">
            <div className="font-bold">Construct</div>
            <div className="text-neutral-950 font-bold text-opacity-50">
              ion
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">
            <FaGears />
          </div>
          <div className="flex text-lg">
            <div className="font-bold">Construct</div>
            <div className="text-neutral-950 font-bold text-opacity-50">
              ion
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">
            <FaGears />
          </div>
          <div className="flex text-lg">
            <div className="font-bold">Construct</div>
            <div className="text-neutral-950 font-bold text-opacity-50">
              ion
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">
            <FaGears />
          </div>
          <div className="flex text-lg">
            <div className="font-bold">Construct</div>
            <div className="text-neutral-950 font-bold text-opacity-50">
              ion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
