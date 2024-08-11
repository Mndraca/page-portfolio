import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import React from "react";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#ffffff]">
      <Header />
      <div className="container mt-40 sm:mt-30 mx-auto px-4 py-6">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
