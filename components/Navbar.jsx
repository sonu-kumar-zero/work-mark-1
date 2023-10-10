import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex py-3 justify-center bg-neutral-50 items-center">
      <div className="w-3/5 flex justify-between">
        <div className="text-xl text-blue-400 cursor-pointer hover:text-blue-600">Bisnes</div>
        <div className="flex gap-5 text-neutral-950 text-opacity-50 text-sm">
          <div className="cursor-pointer hover:text-blue-400">Home</div>
          <div className="cursor-pointer hover:text-blue-400">About</div>
          <div className="cursor-pointer hover:text-blue-400">Project</div>
          <div className="cursor-pointer hover:text-blue-400">Blog</div>
          <div className="cursor-pointer hover:text-blue-400">Service</div>
          <div className="cursor-pointer hover:text-blue-400">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
