"use client";

import Image from "next/image";

const SelectWatch = ({ onClick, bgColor, imageSkift }) => {
  return (
    <div className="curser-pointer grid grid-rows-[1fr 1fr 1fr] grid-cols-1 justify-items-center cursor-pointer">
      <div className={`w-[131px] h-[70px] bg-[#434558]/60 rounded-[10px] row-start-2 row-end-3 col-start-1 bg-[#434558] bg-opacity-60 rounded-lg ${bgColor}`}></div>
      <Image onClick={onClick} src={imageSkift} alt="iwatch" layout="intrinsic" className="w-[90px] h-[90px] row-start-1 row-end-3 col-start-1" width={500} height={500} />
    </div>
  );
};

export default SelectWatch;
