// Modal.tsx
import React from "react";
import DrawerWrapper from "../wrapper/Wrapper";
import { Logo } from "../../assets/svgs";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 0,
    path: "!#",
    title: "Home",
  },
  {
    id: 1,
    path: "!#",
    title: "Pay It Forward",
  },
  {
    id: 2,
    path: "!#",
    title: "Get Meal Planner",
  },
  {
    id: 3,
    path: "!#",
    title: "Claim Ticket",
  },
];
const NavModal = ({ isOpen, closeDrawer }) => {
  const handleClick = (e) => {
    e.preventDefault();
    closeDrawer();
  };

  return (
    <DrawerWrapper>
      <div className="modal-nav h-[100vh]">
        <div className="modal-container bg-[#0f0f10]">
          <div className="w-11/12 mx-auto ">
            <div className="">
              <img src={Logo} alt="" />
            </div>
            <span className="mx-auto close " onClick={handleClick}>
              &times;
            </span>
          </div>
          <div className="flex items-center justify-center flex-col text-[48px] font-bold  text-[#fff] py-20 space-y-4 ">
           {navItems.map(({id,title})=>(
              <Link to="!#" key={id} className="hover:text-[#E93C24]">{title}</Link>
           ))}
          
          </div>
        </div>
      </div>
    </DrawerWrapper>
  );
};

export default NavModal;
