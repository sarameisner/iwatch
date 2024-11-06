"use client";
// color selector til at vælge mellem de tre farver af uret
const ColorIndicator = ({ bgColor, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <button onClick={onClick} className={`w-5 h-5 ${bgColor} rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-150 cursor-pointer`}></button>
    </div>
  );
};

export default ColorIndicator;
