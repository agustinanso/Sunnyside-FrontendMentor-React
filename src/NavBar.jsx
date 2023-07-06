import { useState } from "react";

export const NavBar = () => {
  //slideMenu
  const [stateMenu, setStateMenu] = useState(false);
  const prendido = () => {
    setStateMenu(!stateMenu);
  };

  //  buttonBackground
  const [stateBack, setStateBack] = useState(false);

  const btnBack = () => {
    setStateBack(!stateBack);
  };

  return (
    <div>
      <header className="flex justify-center w-full ">
        <div className="relative ">
          <img
            src="/Compu/image-header.jpg"
            className=" w-full h-[380px] object-cover sm:h-full lg:object-scale-down "
          />
          <div className="absolute items-center justify-center w-full text-center -translate-y-1/2 -translate-x-2/4 top-2/4 left-2/4 right-2/4 bottom-4/4">
            <div>
              <p className=" text-4xl md:text-6xl xl:text-7xl text-white font-[fraunces] tracking-widest  mx-auto  xl:mb-34 p-6 w-5/6  ">
                WE ARE CREATIVES
              </p>
            </div>
            <div className="items-center justify-center">
              <img
                src="/iconos/icon-arrow-down.svg"
                alt=""
                className="p-4 m-auto xl:h-48 xl:p-4 "
              />
            </div>
          </div>
        </div>

        <nav className="absolute w-full px-4 py-4 md:flex md:justify-between md:px-6 md:items-center md:py-8">
          <div className="flex justify-between ">
            <p className="font-[fraunces] text-4xl text-white items-center md:text-6xl md:px-4  ">
              sunnyside
            </p>
            <div className="pt-3">
              <button id="menu" onClick={prendido}>
                <img src="/iconos/icon-hamburger.svg" className="md:hidden " />
              </button>
            </div>
          </div>

          <ul
            className={` ${
              stateMenu ? "scale-100 relative " : "scale-0"
            } md:scale-100 md:flex sm:opacity-100 md:[&>li>a]:px-7 [&>li]:justify-center items-center [&>li]:text-center [&>li]:py-2 md:[&>li>a]:text-2xl  font-semibold pt-3 pb-3 md:p-0  bg-white md:bg-transparent md:top-auto md:relative  justify-center mt-[10px] transition-all ease-in-out delay-200 rounded-xl md:transition-none`}>
            <li>
              <a href="#" className="text-black hover:underline md:text-white ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline md:text-white ">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline md:text-white ">
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={btnBack}
                href="#"
                className="text-black hover:bg-yellow-300 md:text-white  py-3 px-4   rounded-full font-[fraunces] md:hover:bg-white md:hover:text-black">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
