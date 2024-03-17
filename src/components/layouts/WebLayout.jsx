import { Outlet } from "react-router-dom";

import Navbar from "../navbar";
import Footer from "../footer";

const WebLayout = () => {
  return (
    <>
      <div className="w-full h-screen text-black home-bg">
        <div className="">
          <div className="">
            <Navbar />
          </div>
        </div>
        <main className="relative z-20 home-bg font-poppins">
          <Outlet />
        </main>
        <footer className="home-bg ">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default WebLayout;
