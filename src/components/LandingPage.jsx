"use client";
import { useState } from "react";

import Image from "next/image";
import mint from "../images/mint.png";
import navy from "../images/navy.png";
import ocean from "../images/ocean.png";

import { HiDotsVertical } from "react-icons/hi";

import Navigation from "@/components/Navigation";

import ColorIndicator from "@/components/ColorIndicator";
import SelectWatch from "@/components/SelectWatch";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const LandingPage = () => {
  const [activeImage, setActiveImage] = useState(navy);

  const handleImageChange = (newImage) => {
    setActiveImage(newImage);
  };

  return (
    <section className="bg-gradient-custom py-[53px] px-[70px]">
      <Navigation />

      <div className="grid grid-cols-[auto_auto_auto] w-full mx-auto text-white">
        <div className="leading-custom content-center">
          <h1 className="text-white text-[64px] font-normal content-center" style={poppins.style}>
            <span className="font-bold">The Perfect Moment</span> <br /> Between Past And <br />
            Future.
          </h1>
        </div>

        <div className="grid items-center justify-center">
          <Image src={activeImage} alt="Apple Watch" className="" width={486} height={486} />
        </div>

        <div className="flex flex-col items-center mt-auto mb-auto">
          <ColorIndicator bgColor="bg-darkGray60" imageSkift={navy} onClick={() => handleImageChange(navy)} />
          <HiDotsVertical />
          <ColorIndicator bgColor="bg-lightTeal" imageSkift={mint} onClick={() => handleImageChange(mint)} />
          <HiDotsVertical />
          <ColorIndicator bgColor="bg-peach" imageSkift={ocean} onClick={() => handleImageChange(ocean)} />
        </div>

        <div className="">
          <button className="border-[3px] border-solid border-white rounded-full text-2xl font-medium px-[73px] py-[17px] text-white hover:scale-105" style={{ fontWeight: 500 }}>
            Buy Now
          </button>
        </div>

        <div className="col-start-1 col-span-1 row-span-3 content-end">
          <div className="flex gap-4 items-center">
            <HiArrowLongLeft />
            <p>1</p>
            <HiArrowLongRight />
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-[27px] mt-[10px]">
          <SelectWatch bgColor="bg-darkGray60" imageSkift={navy} onClick={() => handleImageChange(navy)} />
          <SelectWatch bgColor="bg-lightTeal" imageSkift={mint} onClick={() => handleImageChange(mint)} />
          <SelectWatch bgColor="bg-peach" imageSkift={ocean} onClick={() => handleImageChange(ocean)} />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
