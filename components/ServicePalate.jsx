import React from "react";
import { BsPeace } from "react-icons/bs";

const ServicePalate = () => {
  return (
    <div className="flex flex-col relative items-center">
      <div className="text-3xl absolute -top-6 bg-neutral-50 p-3 text-blue-500 rounded-full shadow shadow-blue-500">
        <BsPeace />
      </div>
      <div className="bg-neutral-50 w-full min-h-[100px] border-2 border-opacity-60 rounded-md  border-blue-500 pt-50">
        <div className="h-12"></div>
        <div className="flex-col flex justify-center">
          <div className="text-center font-bold text-neutral-950 text-opacity-80">Content Marketing</div>
          <div className="text-center px-5 pb-5 pt-2 text-xs text-neutral-950 text-opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat eius, possimus sit nemo consectetur nostrum dolorem blanditiis ex illum dolore!</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePalate;
