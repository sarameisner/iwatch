"use client"; // Angiver at komponenten kører på klienten og ikke serveren.
// når vi skal arbejde med interaktivitet skal være client side renderet

import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

import { useState } from "react";
import AcceptButton from "./AcceptButton";

const CookieConsentPopup = () => {
  // cookies er ikke accepteret som default, men føst når brugeren accepterer dem
  // Hvis vi ikke er nødt til at opdatere hele siden, så er det bedst at bruge state variabler
  // sætter Cookies til true
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [isCookieAcceptedClosed, setisCookieAcceptedClosed] = useState(false);

  return (
    // hvis cookies ikke er accepteret, så vises cookies popup
    !isCookieAccepted &&
    !isCookieAcceptedClosed && (
      // Giver den sort baggrund og hvid tekst i mørk tilstand.
      <section className="bg-black dark:bg-white dark:text-black flex flex-col justify-between p-6 w-72 h-80 rounded-3xl fixed bottom-5 right-5">
        <div className="flex justify-between">
          {/* ændrer LiaCookieBiteSolid ikonets farve afhængig af temaet (mørk/lys) */}
          <LiaCookieBiteSolid className="dark:text-black text-white" size={50} />
          <button className="flex" onClick={() => setisCookieAcceptedClosed(!isCookieAcceptedClosed)}>
            <IoIosClose className="cursor-pointer dark:text-black text-white" size={25} />
          </button>
        </div>
        <div className="flex flex-col">
          {/* Ændrer farve baseret på temaet */}
          <p className="text-white dark:text-black leading-8 text-[25px] mb-4">We use cookies to improve your user expirence.</p>

          <AcceptButton isCookieAccepted={isCookieAccepted} setIsCookieAccepted={setIsCookieAccepted} />
        </div>
      </section>
    )
  );
};

export default CookieConsentPopup; // Eksporterer komponenten til brug i andre dele af appen.
