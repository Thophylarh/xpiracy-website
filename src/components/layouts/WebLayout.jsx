import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { useEffect, useState } from "react";

const WebLayout = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const heroImgClass = isMobileView ? "mobile-img" : "hero-img";

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`relative w-full h-screen text-black ${heroImgClass}`}>
      <Navbar />
      <main className="relative z-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebLayout;
