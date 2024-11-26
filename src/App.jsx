import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

const App = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container mx-auto flex flex-col">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {scroll && (
        <button
          onClick={handleScroll}
          className="mr-20 flex fixed right-0 bottom-20 items-center justify-center rounded-full p-2 bg-gray-100 "
        >
          <FaArrowAltCircleUp size={25} className="text-yellow-500" />
        </button>
      )}
    </div>
  );
};

export default App;
