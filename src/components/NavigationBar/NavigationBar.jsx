import React from 'react'
import Logo from "../../assets/heronLogo.webp";

const NavigationBar = () => {
    return (
      <>
        <nav
          data-aos="fade-down"
          className="fixed top-0 right-0 w-full z-50 bg-black/50 backdrop-blur-sm py-4 sm:py-0"
        >
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-white font-bold text-2xl">
                <img src={Logo} alt="" className="w-10" />
                <span> Tony Amin </span>
              </div>
              <div className="text-white hidden sm:block">
                <ul className="flex items-center gap-6 text-xl py-4 ">
                  <li>
                    <a href="#"> About Me </a>
                  </li>
                  <li>
                    <a href="#"> Projects </a>
                  </li>
                  <li>
                    <a href="#"> Resume </a>
                  </li>
                  <li>
                    <a href="#"> Contact </a>
                  </li>
                </ul>
              </div>
              <div>
                <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  };

export default NavigationBar;