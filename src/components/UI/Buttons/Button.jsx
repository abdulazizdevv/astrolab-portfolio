import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className={`text-2xl py-2 px-6 border-[1px] border-white rounded-[40px] animationBtn`}
    >
      {title}
    </button>
  );
};

export default Button;
