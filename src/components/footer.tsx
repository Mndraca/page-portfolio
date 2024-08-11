import React, { FC } from "react";
import "./layout.css";

const Footer: FC = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <p>&copy; {getCurrentYear()} Milena Komnenic. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
