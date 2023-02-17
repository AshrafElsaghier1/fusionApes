import React from "react";
import NavBar from "../NavBar/NavBar";
import headerImg from "../../../../public/assets/header/image 2.svg";
import "./style.css";
function Header() {
  return (
    <header className="h-[80vh] lg:h-[100vh] bg-header-img bg-cover bg-bottom flex flex-col">
      <NavBar />
      <div className="header-content flex flex-col justify-center items-center border h-100 flex-1 text-white">
        <p className="px-[70px] md:px-[200px] py-[10px] border-2 border-text-color rounded-full">
          FusionApes Presents
        </p>
      </div>
      {/* <div
        id="img-container"
        className="w-full h-full overflow-hidden flex items-end opacity-[100%]"
      >
        <img
          src="../../../../public/assets/header/image 2.svg"
          alt=""
          className="inner w-auto lg:w-full"
        />
      </div> */}
    </header>
  );
}

export default Header;

/*
 */
