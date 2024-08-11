import React, { FC } from "react";

interface ButtonProps {
  name: string;
  handleClick: (event: React.FormEvent) => void;
}

const Button = ({ name, handleClick }: ButtonProps) => {
  const upperCapB = (name: string) => {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  };

  return (
    <>
      <button
        id="button"
        className="border border-transparent bg-gradient-to-br from-rose-300 via-rose-400 to-rose-300 text-black w-full  ml-16 sm:w-1/2 rounded-full shadow-2xl shadow-rose-700 transition h-8 hover:opacity-75 mt-8 font-bold"
        onClick={handleClick}
      >
        {upperCapB(name)}
      </button>
    </>
  );
};

export default Button;
