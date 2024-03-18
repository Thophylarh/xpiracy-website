import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";


const WebLayout = () => {
  return (
    <div className="relative w-full h-screen text-black hero-img">
      <Navbar />
      <main className="relative z-20">
    
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebLayout;
