import React, { FC, ChangeEvent } from "react";

interface InputProps {
  name: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ name, handleChange, placeholder }) => {
  const isMessage = name === "message";

  return (
    <div className="mb-4">
      {isMessage ? (
        <textarea
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full p-3 border rounded-md"
          style={{ height: "150px", resize: "none" }} // Adjust height as needed
        />
      ) : (
        <input
          type="text"
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className=" p-3 border rounded-md"
        />
      )}
    </div>
  );
};

export default Input;
