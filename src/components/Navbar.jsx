import { useState } from "react";

export default function Navbar() {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);

  return (
    <nav className="bg-white h-20 border border-b-gray-400 flex justify-center">
      <div className="flex justify-around items-center w-5/6 h-full">
        <a href="#">
          <img className="w-20 h-14" src="./navbrand.png" alt="" />
        </a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg px-3 pl-8 w-96 py-3 text bg-gray-100"
          />
          <a href="#">
            <i className="fa fa-search absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"></i>
          </a>
        </div>
        <div className="flex">
          <a href="#">
            <h1 className="font-semibold text-lg">Home</h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 text-lg font-semibold hover:text-black ml-12">
              About
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-lg hover:text-black ml-12">
              Contact Us
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-lg hover:text-black ml-12">
              Blog
            </h1>
          </a>
        </div>
        <div>
          <a href="#">
            <i
              className={`fa-${isHeartHovered ? "solid" : "regular"} fa-heart`}
              onMouseEnter={() => setIsHeartHovered(true)}
              onMouseLeave={() => setIsHeartHovered(false)}
              style={{ color: isHeartHovered ? "black" : "inherit" }}
            ></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-cart-shopping ml-8"></i>
          </a>
          <a href="#">
            <i
              className={`fa-${
                isUserHovered ? "solid" : "regular"
              } fa-user ml-8`}
              onMouseEnter={() => setIsUserHovered(true)}
              onMouseLeave={() => setIsUserHovered(false)}
              style={{ color: isUserHovered ? "black" : "inherit" }}
            ></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
