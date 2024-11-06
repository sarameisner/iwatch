"use client";

// ikoner til headeren
import { FaApple } from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

// henter NavButton komponentet
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    // flex for at få linksene til at være vandret
    <header className="flex justify-between items-center pb-[53px]">
      {/* apple logo i farven hvis */}
      <a className="cursor-pointer" href="#">
        <FaApple size={50} color="white" />
      </a>

      {/* de forskellige links / knapper i headeren */}
      <div className="flex gap-[58px] font-medium text-lg text-white">
        <NavButton text="Mac" link="#" />
        <NavButton text="Iphone" link="#" />
        <NavButton text="IPad" link="#" />
        <NavButton text="IWatch" link="#" />
        <NavButton text="Support" link="#" />
      </div>

      {/* søge- og indkøbsikonet */}
      <div className="flex gap-4">
        <a className="cursor-pointer" href="#">
          <FiSearch size={24} color="white" />
        </a>

        {/* linje mellem de to ikoner */}
        <div className="w-px h-6 bg-white"></div>

        <a className="cursor-pointer" href="#">
          <FiShoppingBag size={24} color="white" />
        </a>
      </div>
    </header>
  );
};

export default Navigation;
