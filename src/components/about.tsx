import React, { FC } from "react";
import "./layout.css";
import Button from "./button";
import VideoBG from "../assets/VideoBG.mp4";

const About: FC = () => {
  return (
    <section
      className="relative bg-pink-200 border rounded-md p-10 md:p-20"
      id="about"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={VideoBG}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl mb-4" style={{ fontWeight: "600" }}>
          Welcome!
        </h2>
        <p style={{ fontWeight: "900" }}>
          My name is Milena Komnenic. My interests are in Front End Engineering,
          and I love to create beautiful and performant products with delightful
          user experiences. I like to code things from scratch, and enjoy
          bringing ideas to life in the browser.
        </p>
        <a href="#contact">
          <button
            className="border border-transparent bg-gradient-to-br from-rose-300 via-rose-400 to-rose-300 text-black w-full sm:w-1/2 rounded-full shadow-2xl shadow-rose-700 transition h-12 hover:opacity-75 mt-4 font-bold"
            type="button"
          >
            Message Me!
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
