import React from "react";
import Logo from "../../assets/svgs/logo.svg"; // Adjust the path to your Logo component
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full">
      <div className="flex items-center justify-between mx-auto w-11/12 py-4">
        <div>
          <img src={Logo} className="w-[70px] h-[70px]" alt="" />{" "}
        </div>
        <div className="flex items-center gap-x-4 text-white">
          <div>
            <Link to="!#" className="">
              Home
            </Link>
          </div>
          <div>
            <Link to="!#" className="">
              Pay It Forward
            </Link>
          </div>
          <div>
            <Link to="!#" className="">
              Get Meal Planner
            </Link>
          </div>
          <div>
            <Link to="!#" className="">
              Join The Movement
            </Link>
          </div>
        </div>
        <div className="text-white flex items-center gap-x-4">
          <div>
            <Link to="!#">Watch Trailer</Link>
            <img src="" alt="" />
          </div>
          <div>
            <button>Claim Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
