import { man, movementImg } from "../../assets/png";

const Journey = () => {
  return (
    <div className="py-20 ">
      <div className="journey-container md:px-[5rem] px-[2rem] md:w-9/12 w-11/12 flex  mx-auto relative ">
        <div className="flex items-center justify-between ">
          <div className="space-y-4">
            <h2 className=" text-[#fff]  md:w-[350px] w-[270px] md:text-6xl text-4xl font-normal">
              Join The Movement
            </h2>
            <p className="text-white text-[14px] md:text-[16px] md:w-[400px] w-[300px]">
              Our community on “Skool” rewards you for your activism while
              connecting you to others passionate about compassion.{" "}
            </p>
            {/* <button className="px-10 py-2 bg-[#E93C24] rounded-lg flex items-center gap-x-2">
              <p className="text-sm text-[#fff]">Join Movement Now</p>
            </button> */}
            <div className="">
              <a
                href="https://www.skool.com/christspiracy/about"
                className="text-white bg-[#E93C24] rounded p-2 "
              >
                Join Movement Now
              </a>
            </div>
          </div>
          <div className="absolute md:-top-[63%] md:-right-[10%] md:block -top-[30%] -right-[3%] ">
            <img
              src={movementImg}
              alt=""
              className="md:h-[500px] md:w-[500px] w-[200px] h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
