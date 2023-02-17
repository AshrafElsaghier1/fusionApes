import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
function Header({ setIsMeneuOpen, isMenueOpen }) {
  console.log({ isMenueOpen });
  return (
    <header className="h-[80vh] lg:h-[100vh] bg-header-img bg-cover bg-bottom flex flex-col">
      <NavBar setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
      <div className="header-content flex justify-center items-start h-full text-white">
        <div className="flex flex-col justify-end items-center h-[70%]">
          <p className="px-[70px] text-xl font-normal md:px-[200px] py-[10px] border border-text-color rounded-full">
            FusionApes Presents
          </p>
          <h1 className="text-9xl font-semibold header-title mt-[45px]">
            BAKED <span className="text-transparent">AT</span>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;

/*
 */
