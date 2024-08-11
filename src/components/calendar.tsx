import React, { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const BookingCalendar: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/marizanovic3/30min",
      });
      return false;
    } else {
      console.error("Calendly script is not loaded.");
    }
  };

  return (
    <div className=" p-4 mb-4 mt-4 font-bold">
      <h3 style={{ paddingBottom: "15px" }}>To schedule your meeting press </h3>
      <button
        onClick={openCalendlyPopup}
        className="border-2 border-pink-100 p-8 rounded-lg  bg-gradient-to-br from-rose-300 via-rose-400 to-rose-300 rounded text-white font-bold py-1 px-4  shadow hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        aria-label="here"
      >
        here
      </button>
    </div>
  );
};

export default BookingCalendar;
