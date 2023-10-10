import React from "react";
import ServicePalate from "./ServicePalate";

const Service = () => {
  return (
    <div className="w-full flex justify-center bg-blue-50">
      <div className="w-3/5 flex flex-col items-center gap-5 py-16">
        <div className="text-2xl font-bold ">Our Services</div>
        <div className="w-full text-sm flex justify-center">
          <div className="w-2/3 text-center text-neutral-950 text-opacity-80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            assumenda debitis nam. Veniam est minus eveniet suscipit qui cum
            quibusdam.
          </div>
        </div>
        <div className="grid grid-cols-3 w-full gap-5 mt-10">
          <ServicePalate />
          <ServicePalate />
          <ServicePalate />
        </div>
        <div className="px-5 text-sm py-2 bg-blue-500 w-fit rounded-md text-neutral-50 cursor-pointer hover:bg-blue-600">
            All Service
        </div>
      </div>
    </div>
  );
};

export default Service;
