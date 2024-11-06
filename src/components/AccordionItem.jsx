import { useState } from "react";
// komponentet modtager fire props, spørgsmålet, svaret, en boolean der tjekker om spørgsmålet er åbent og en funktion der åbner og lukker sektionen
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#B6CCDA] bg-[#F0F4F8] rounded-lg mb-4 shadow-lg">
      <button className="flex justify-between w-full p-5 text-left font-medium text-[#434558] hover:bg-[#D1E3EB] rounded-lg transition" onClick={onToggle}>
        {question} {/* viser spørgsmålet */}
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {/* viser svaret hvis isOpen er true */}
      {isOpen && <div className="p-5 text-[#434558] bg-white rounded-b-lg">{answer}</div>}
    </div>
  );
};

export default AccordionItem;
