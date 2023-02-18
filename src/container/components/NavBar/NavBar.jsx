import logoImg from "../../../../public/assets/header/FusionApes Color Palette 2.svg";
function NavBar() {
  return (
    <nav className="lg:bg-nav-color h-[80px]  items-center justify-end lg:justify-center w-full hidden lg:flex fixed">
      <div className=" px-2 container mx-auto lg:flex justify-between items-center  ">
        <div className="flex logo-img ">
          <img src={logoImg} alt="logo-image" />
        </div>
        <div className="flex flex-shrink justify-center   ">
          <ul className="flex xl:justify-center w-full text-white lg:transform lg:translate-x-20 md:justify-start ">
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
    </nav>
  );
}

export default NavBar;
