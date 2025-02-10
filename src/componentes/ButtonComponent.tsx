import React from "react";

type ButtonProps = {
  text: string;
};

const CustomButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="px-6 py-2 border-2 border-gray-800 rounded-full text-lg font-semibold transition-all duration-300 bg-yellow-300 text-black hover:bg-white hover:text-black"
    >
      {text}
    </button>
  );
};

export default CustomButton;
