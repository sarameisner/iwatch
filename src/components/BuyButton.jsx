"use client";

const BuyButton = (props) => {
  return (
    <button onClick={() => props.action(true)} className={`px-[74px] py-[17px] border-solid border-2 border-white rounded-full text-2xl font-medium`}>
      Buy Now
    </button>
  );
};

export default BuyButton;
