import LandingPage from "@/components/LandingPage.jsx";

import CookieConsentPopup from "@/components/CookieConsentPopup";
import If from "../components/If.jsx";

export default function Home() {
  const cookieIsAccepted = true;
  // Opretter en variabel 'cookieIsAccepted' og sætter den til 'true'.

  return (
    <div>
      <LandingPage />
      <If condition={cookieIsAccepted}>
        <CookieConsentPopup />
      </If>
      {/* Renderer CookieConsentPopup-komponenten kun, hvis 'cookieIsAccepted' er sand */}
    </div>
  );
}
