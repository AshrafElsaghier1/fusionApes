import React from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

function Aside({ setIsMeneuOpen, isMenueOpen }) {
  const sideMenueData = [
    {
      icon: (
        <span className="bg-text-color p-2 mr-4 rounded-full border-2">
          <AiOutlineMenuFold className="text-xl text-main-color" />
        </span>
      ),
      title: "Home",
    },
    {
      icon: (
        <span className="bg-text-color p-2 mr-4 rounded-full border-2">
          <AiOutlineMenuFold className="text-xl text-main-color" />
        </span>
      ),
      title: "BakedAI",
    },
    {
      icon: (
        <span className="bg-text-color p-2 mr-4 rounded-full border-2">
          <AiOutlineMenuFold className="text-xl text-main-color" />
        </span>
      ),
      title: "Our Story",
    },
    {
      icon: (
        <span className="bg-text-color p-2 mr-4 rounded-full border-2">
          <AiOutlineMenuFold className="text-xl text-main-color" />
        </span>
      ),
      title: "New Nfts",
    },
    {
      icon: (
        <span className="bg-text-color p-2 mr-4 rounded-full border-2">
          <AiOutlineMenuFold className="text-xl text-main-color" />
        </span>
      ),
      title: "Best Creations",
    },
    {
      icon: (
        <span className="bg-text-color p-2 mr-4 rounded-full border-2">
          <AiOutlineMenuFold className="text-xl text-main-color" />
        </span>
      ),
      title: "Latest News",
    },
  ];
  return (
    <aside
      className={`flex flex-col justify-start items-center pt-4 text-white w-[200px] h-[100vh] absolute top-0 left-0 bg-nav-color transition-all duration-500 delay-75
			${!isMenueOpen && "-translate-x-60"}
			`}
    >
      <img
        src="./public/assets/header/FusionApes Color Palette 2.svg"
        className="mb-9"
        alt=""
      />
      <ul className="w-full px-2 h-auto">
        {sideMenueData.map((el, index) => {
          return (
            <li
              key={index}
              className={`flex justify-center items-center w-full mb-3`}
            >
              <button
                className={`pr-2 border border-main-color bg-main-color rounded-full flex justify-start w-full items-center outline-none wid `}
              >
                {el.icon}
                <p className="">{el.title}</p>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col justify-center auth-btns w-full px-2 items-center">
        <button className="bg-transparent w-full mb-3 hover:bg-main-color text-main-color hover:text-black py-2 px-6 border border-main-color hover:border-black rounded-full">
          Signup
        </button>
        <button className="bg-transparent w-full hover:bg-main-color text-main-color hover:text-black py-2 px-6 border border-main-color hover:border-black rounded-full">
          Login
        </button>
      </div>

      <button
        onClick={() => setIsMeneuOpen((pre) => !pre)}
        className={`p-2 outline-none bg-nav-color mx-5 absolute -right-14  `}
      >
        <AiOutlineMenuFold className="text-main-color text-2xl" />
      </button>
    </aside>
  );
}

export default Aside;
