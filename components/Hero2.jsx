import Image from "next/image";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import {FaGears} from "react-icons/fa6"

const Hero2 = () => {
  return (
    <div className="w-full flex bg-neutral-500 bg-opacity-10  flex-col items-center">
      <div className="w-3/5 flex h-[400px] py-10 items-center gap-1">
        <div className="w-1/2 flex gap-1 flex-col">
          <div className="font-semibold text-2xl">
            We Have Many Year Experience in Consulting Business
          </div>
          <div className="text-xs text-neutral-950 text-opacity-50">
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
        <div className="w-1/2 relative">
          <Image
            alt="img"
            src={"/photo2.jpg"}
            width={500}
            height={400}
            className="w-full h-full object-contain"
          />
          <div className="absolute top-1/2 bg-blue-400 p-2 rounded-full -left-7 text-4xl text-neutral-50 border-4 border-neutal-50 cursor-pointer">
            <BsFillPlayFill />
          </div>
        </div>
      </div>
      <div className="w-3/5 flex items-center justify-between pb-10">
        <div className="flex flex-col items-center">
            <div className="text-4xl">
                <FaGears/>
            </div>
            <div className="flex text-lg">
                <div className="font-bold">Construct</div>
                <div className="text-neutral-950 font-bold text-opacity-50">ion</div>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className="text-4xl">
                <FaGears/>
            </div>
            <div className="flex text-lg">
                <div className="font-bold">Construct</div>
                <div className="text-neutral-950 font-bold text-opacity-50">ion</div>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className="text-4xl">
                <FaGears/>
            </div>
            <div className="flex text-lg">
                <div className="font-bold">Construct</div>
                <div className="text-neutral-950 font-bold text-opacity-50">ion</div>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className="text-4xl">
                <FaGears/>
            </div>
            <div className="flex text-lg">
                <div className="font-bold">Construct</div>
                <div className="text-neutral-950 font-bold text-opacity-50">ion</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
