import React from "react";

const Hero = () => {
  return (
    <div className="hero-img text-white flex justify-center">
      <div className="w-11/12 my-auto flex items-start flex-col">
        <div className="flex gap-x-2 items-center">
          <div className="bg-[#e93c24] w-2 h-4"></div>
          <h4 className="text-2xl">WHAT WOULD JESUS DO</h4>
        </div>

        <h1 className="text-[4rem] font-bold">CHRISTPIRACY</h1>
        <h4 className="text-[16px] font-semibold">
          IN THEATRES <span className="text-[#e93c24]">MARCH 20TH, 24TH</span>{" "}
        </h4>
        <button>Pay it Forward</button>
      </div>
    </div>
  );
};

export default Hero;
