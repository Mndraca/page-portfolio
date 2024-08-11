import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="mt-4 sm:mt-0">
      <a
        href="/resume.pdf"
        download="Milena_Komnenic_Resume.pdf"
        className=" p-8 rounded-lg  border-2 border-pink-100 p-8 rounded-lg  bg-gradient-to-br from-rose-300 via-rose-400 to-rose-300  font-bold text-white py-2 px-3 mt-4 rounded hover:bg-pink-400 block sm:inline-block"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
