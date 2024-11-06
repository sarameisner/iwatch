"use client";

import { FaApple } from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <header className="flex justify-between items-center pb-[53px]">
      <a className="cursor-pointer" href="#">
        <FaApple size={50} color="white" />
      </a>

      <div className="flex gap-[58px] font-medium text-lg text-white">
        <NavButton text="Mac" link="#" />
        <NavButton text="Iphone" link="#" />
        <NavButton text="IPad" link="#" />
        <NavButton text="IWatch" link="#" />
        <NavButton text="Support" link="#" />
      </div>

      <div className="flex gap-4">
        <a className="cursor-pointer" href="#">
          <FiSearch size={24} color="white" />
        </a>
        <div className="w-px h-6 bg-white"></div>
        <a className="cursor-pointer" href="#">
          <FiShoppingBag size={24} color="white" />
        </a>
      </div>
    </header>
  );
};

export default Navigation;
