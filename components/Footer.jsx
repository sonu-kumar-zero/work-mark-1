import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center lg:h-[250px] relative">
        <Image
          src={"/photo3.jpg"}
          alt="image"
          width={2000}
          height={400}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="w-full px-3 lg:px-0 flex-col lg:flex-row lg:w-3/5 flex lg:gap-5 absolute top-0 lg:h-[250px] items-center">
          <div className="flex lg:w-1/2 flex-col gap-3 text-neutral-950 lg:text-neutral-950 ">
            <div className="font-bold text-lg lg:text-3xl">
              Subscribe Our Newsletter For More Update
            </div>
            <div className="text-[10px] lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium commodi sapiente reprehenderit excepturi repellendus
              error quis sint quaerat enim sequi?
            </div>
          </div>
          <div className="flex lg:w-1/2 flex-col gap-3">
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent border-2 lg:border outline-none rounded-md text-neutral-950 border-neutral-950 px-5 py-2 w-full"
              />
            </div>
            <div className="bg-blue-500 w-fit px-5 py-2 rounded-md">
              Subscribe
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-3"></div>
    </>
  );
};

export default Footer;
