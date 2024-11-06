"use client";

const AcceptButton = ({ ...props }) => {
  return (
    <button
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
