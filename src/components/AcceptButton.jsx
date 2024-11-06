"use client";
// accepter cookie knappen
// spread-objekt (...props) - betyder, at den kan modtage flere props
const AcceptButton = ({ ...props }) => {
  return (
    <button
      // når knappen klikkes, kalder denne funktion props.setIsCookieAccepted og ændrer værdien af isCookieAccepted til det modsatte (true eller false)
      onClick={() => {
        props.setIsCookieAccepted(!props.isCookieAccepted);
      }}
      className={`bg-white dark:bg-black p-3 text-lg rounded-lg h-15`}
    >
      <span className="text-black dark:text-white">I like Cookies</span>
    </button>
  );
};

export default AcceptButton;
