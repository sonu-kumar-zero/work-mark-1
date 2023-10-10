import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-[250px] relative">
        <Image
          src={"/photo3.jpg"}
          alt="image"
          width={2000}
          height={250}
          className="w-full h-full object-cover"
        />
        <div className="w-3/5 flex gap-5 absolute top-0 h-[250px] items-center">
          <div className="flex w-1/2 flex-col gap-3 text-neutral-50">
            <div className="font-bold text-3xl">
              Subscribe Our Newsletter For More Update
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium commodi sapiente reprehenderit excepturi repellendus
              error quis sint quaerat enim sequi?
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-3">
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent border outline-none rounded-md text-neutral-50 px-5 py-2 w-full"
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
