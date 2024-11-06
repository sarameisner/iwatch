import LandingPage from "@/components/LandingPage.jsx";

import CookieConsentPopup from "@/components/CookieConsentPopup";
import If from "../components/If.jsx";

export default function Home() {
  const cookieIsAccepted = true;

  return (
    <div>
      <LandingPage />
      <If condition={cookieIsAccepted}>
        <CookieConsentPopup />
      </If>
      {/* renderer CookieConsentPopup-komponenten kun, hvis / if  'cookieIsAccepted' er sand */}
    </div>
  );
}
