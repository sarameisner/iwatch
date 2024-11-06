"use client";

import { useState } from "react";

// Next.js' Image-komponent
import Image from "next/image";

// de tre billeder af ure
import mint from "../images/mint.png";
import navy from "../images/navy.png";
import ocean from "../images/ocean.png";

// ikoner
import { HiDotsVertical } from "react-icons/hi";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import Navigation from "@/components/Navigation";
import ColorIndicator from "@/components/ColorIndicator";
import SelectWatch from "@/components/SelectWatch";
import Accordion from "@/components/Accordion";

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
    // main wrapper med baggrundsfarve og padding
    <section className="bg-gradient-custom py-[53px] px-[70px]">
      {/* henter navigation komponentet */}
      <Navigation />

      {/* mit grid for hele indholdet */}
      <div className="grid grid-cols-[auto_auto_auto] w-full mx-auto text-white">
        {/* overskrift */}
        <div className="leading-custom content-center">
          <h1 className="text-white text-[64px] font-normal content-center" style={poppins.style}>
            <span className="font-bold">The Perfect Moment</span> <br /> Between Past And <br />
            Future.
          </h1>
        </div>

        {/* det aktive billede af ur */}
        <div className="grid items-center justify-center">
          <Image src={activeImage} alt="Apple Watch" className="" width={486} height={486} />
        </div>

        {/* farveindikatorerne til at skifte billede og prikkerne i mellem */}
        <div className="flex flex-col items-center mt-auto mb-auto">
          <ColorIndicator bgColor="bg-darkGray60" imageSkift={navy} onClick={() => handleImageChange(navy)} />
          <HiDotsVertical />
          <ColorIndicator bgColor="bg-lightTeal" imageSkift={mint} onClick={() => handleImageChange(mint)} />
          <HiDotsVertical />
          <ColorIndicator bgColor="bg-peach" imageSkift={ocean} onClick={() => handleImageChange(ocean)} />
        </div>

        {/* købs knappen - skift ud med komponentet !! */}
        <div className="">
          <button className="border-[3px] border-solid border-white rounded-full text-2xl font-medium px-[73px] py-[17px] text-white hover:scale-105" style={{ fontWeight: 500 }}>
            Buy Now
          </button>
        </div>

        {/* side tal - stadig statisk */}
        <div className="col-start-1 col-span-1 row-span-3 content-end">
          <div className="flex gap-4 items-center">
            <HiArrowLongLeft />
            <p>1</p>
            <HiArrowLongRight />
          </div>
        </div>

        {/* de forskellige valg / billeder  */}
        <div className="grid grid-cols-3 items-center gap-[27px] mt-[10px]">
          <SelectWatch bgColor="bg-darkGray60" imageSkift={navy} onClick={() => handleImageChange(navy)} />
          <SelectWatch bgColor="bg-lightTeal" imageSkift={mint} onClick={() => handleImageChange(mint)} />
          <SelectWatch bgColor="bg-peach" imageSkift={ocean} onClick={() => handleImageChange(ocean)} />
        </div>
      </div>

      {/* spørgsmål og svar sektionen */}
      <div className="mt-10">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center" style={{ fontWeight: "bold" }}>
          Ofte stillede spørgsmål
        </h2>
        <div className="max-w-2xl mx-auto">
          {" "}
          {/* gør at det fylder en passende bredde og er centreret */}
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
