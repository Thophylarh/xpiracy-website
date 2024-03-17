import { Outlet } from "react-router-dom";

import Navbar from "../navbar";

const WebLayout = () => {
  return (
    <>
      <div className="w-full h-screen text-black  home-bg">
        <div className="">
          <div className="">
            <Navbar />
          </div>
        </div>
        <main className="relative z-20 home-bg font-poppins">
          <Outlet />
        </main>
        <footer className="home-bg "></footer>
      </div>
    </>
  );
};

export default WebLayout;
