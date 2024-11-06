"use client";

// her definerer jeg NavButton som et komponent som har links og text som props
const NavButton = ({ link, text }) => {
  return (
    <a href={link} className="hover:bg-white hover:text-[#B6CCDA] hover:font-bold py-[8px] px-[32px] rounded-full transition">
      {text}
    </a>
  );
};

export default NavButton;
