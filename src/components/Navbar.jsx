import { useState } from "react";
import { FaHeart, FaRegHeart, FaUser, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./cssfiles/App.css";

export default function Navbar() {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white h-20 border border-b-gray-400 flex justify-center">
      <div className="flex justify-between items-center width-80 h-full">
        <a href="#">
          <h1 className="font-bold text-black text-4xl">cyber</h1>
        </a>
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg px-3 pl-8 w-96 py-3 bg-gray-100"
          />
          <a href="#">
            <i className="fa fa-search absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"></i>
          </a>
        </div>
        <div className="hidden lg:flex">
          <a href="#">
            <h1 className="font-semibold text-xs lg:text-sm xl:text-lg">
              Home
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-xs ml-2 hover:text-black lg:ml-4 lg:text-sm xl:ml-12 xl:text-lg">
              About
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-xs ml-2 hover:text-black lg:ml-4 lg:text-sm xl:ml-12 xl:text-lg">
              Contact Us
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-xs ml-2 hover:text-black lg:ml-4 lg:text-sm xl:ml-12 xl:text-lg">
              Blog
            </h1>
          </a>
        </div>
        <div className="hidden lg:flex">
          <a
            href="#"
            onMouseEnter={() => setIsHeartHovered(true)}
            onMouseLeave={() => setIsHeartHovered(false)}
          >
            {isHeartHovered ? (
              <FaHeart className="text-black mr-6" />
            ) : (
              <FaRegHeart className="text-black mr-6" />
            )}
          </a>
          <a
            href="#"
            onMouseEnter={() => setIsCartHovered(true)}
            onMouseLeave={() => setIsCartHovered(false)}
          >
            {isCartHovered ? (
              <MdShoppingCart className="text-black mr-6" />
            ) : (
              <MdOutlineShoppingCart className="text-black mr-6" />
            )}
          </a>
          <a
            href="#"
            onMouseEnter={() => setIsUserHovered(true)}
            onMouseLeave={() => setIsUserHovered(false)}
          >
            {isUserHovered ? (
              <FaUser className="text-black mr-6" />
            ) : (
              <FaRegUser className="text-black mr-6" />
            )}
          </a>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu
            className="text-black text-2xl"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 w-full bg-white flex flex-col items-center lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg px-3 pl-8 w-96 py-3 bg-gray-100 mt-4"
          />
          <a href="#">
            <h1 className="font-semibold text-xs lg:text-sm xl:text-lg mt-4">
              Home
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-xs hover:text-black mt-4 lg:text-sm xl:text-lg">
              About
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-xs hover:text-black mt-4 lg:text-sm xl:text-lg">
              Contact Us
            </h1>
          </a>
          <a href="#">
            <h1 className="text-gray-500 font-semibold text-xs hover:text-black mt-4 lg:text-sm xl:text-lg">
              Blog
            </h1>
          </a>
          <div className="flex mt-4">
            <a
              href="#"
              onMouseEnter={() => setIsHeartHovered(true)}
              onMouseLeave={() => setIsHeartHovered(false)}
            >
              {isHeartHovered ? (
                <FaHeart className="text-black mr-6" />
              ) : (
                <FaRegHeart className="text-black mr-6" />
              )}
            </a>
            <a
              href="#"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
            >
              {isCartHovered ? (
                <MdShoppingCart className="text-black mr-6" />
              ) : (
                <MdOutlineShoppingCart className="text-black mr-6" />
              )}
            </a>
            <a
              href="#"
              onMouseEnter={() => setIsUserHovered(true)}
              onMouseLeave={() => setIsUserHovered(false)}
            >
              {isUserHovered ? (
                <FaUser className="text-black mr-6" />
              ) : (
                <FaRegUser className="text-black mr-6" />
              )}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
