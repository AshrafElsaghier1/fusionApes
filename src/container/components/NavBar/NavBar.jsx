import React, { useState } from "react";
import logoImg from "../../../../public/assets/header/FusionApes Color Palette 2.svg";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
function NavBar({ setIsMeneuOpen, isMenueOpen }) {
  return (
    <nav className="lg:bg-nav-color h-[80px] flex items-center justify-end lg:justify-center relative">
      <div className="hidden px-2 container mx-auto lg:flex justify-between items-center">
        <div className="flex logo-img ">
          <img src={logoImg} alt="logo-image" />
        </div>
        <div className="flex flex-shrink justify-center w-full">
          <ul className="flex justify-center w-full text-white lg:transform lg:translate-x-20 ">
            <li className="mr-3">Home</li>
            <li className="mx-3">AI Tool</li>
            <li className="mx-3">Our Story</li>
            <li className="mx-3">New Nfts</li>
            <li className="mx-3">Best Creations</li>
            <li className="ml-3">Latest News</li>
          </ul>
        </div>

        <div className="flex auth-btns items-center justify-end  ">
          <button className="bg-transparent w-[110px] mr-2 hover:bg-main-color text-main-color hover:text-black py-2 px-6 border border-main-color hover:border-black rounded-full">
            Signup
          </button>
          <button className="bg-transparent w-[110px] hover:bg-main-color text-main-color hover:text-black py-2 px-6 border border-main-color hover:border-black rounded-full">
            Login
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsMeneuOpen((pre) => !pre)}
        className={`p-2 outline-none bg-nav-color mx-5 absolute left-0 transition-all duration-500 ${
          isMenueOpen && "transform -translate-x-16"
        } `}
      >
        <AiOutlineMenuUnfold className="text-main-color text-2xl" />
      </button>
    </nav>
  );
}

export default NavBar;
