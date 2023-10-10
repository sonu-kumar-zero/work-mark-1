"use client";
import Navbar from "@/components/Navbar";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-blue-400 flex justify-center">
        <div className="w-full px-5 lg:px-0 text-xs lg:w-3/5 flex justify-between items-center py-2 text-neutral-50 lg:text-sm">
          <div className="flex gap-2">
            <div className="">We are open 24/7</div>
            <div className="">mail@gmail.com</div>
          </div>
          <div className="flex text-xl gap-4">
            <div className="">
              <BiLogoFacebook />
            </div>
            <div className="">
              <AiOutlineTwitter />
            </div>
            <div className="">
              <BiLogoLinkedin />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <Navbar />
      <Hero />
      <Hero2 />
      <Service />
      <Footer />
    </main>
  );
}
