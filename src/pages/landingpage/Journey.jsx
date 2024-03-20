import { Link } from "react-router-dom";
import { movementImg } from "../../assets/png";
import { handleOpenInNewTab } from "../../utils/handleOpenInNewTab";

const Journey = () => {
  return (
    <div className="px-8 py-20 md:ml-40 ">
      <div className="journey-container md:px-[3rem] px-[1rem] md:w-full flex md:mx-auto w-[380px]">
        <div className="flex-col-reverse items-center justify-between w-full md:flex md:flex-row">
          <div className="w-full">
            <img
              src={movementImg}
              alt=""
              className="md:h-[400px] md:w-[400px] w-[200px] h-[200px] red-tint object-cover"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-full">
            <h2 className="text-[#fff] md:w-[350px] w-[270px] text-2xl md:text-6xl font-normal">
              JOIN THE MOVEMENT.
            </h2>
            <p className=" text-[#d8d6d6] pb-5 text-[12px] md:w-[400px] my-4">
              Our community on “Skool” rewards you for your activism while
              connecting you to others passionate about compassion.
            </p>
            <Link
              to=""
              onClick={() =>
                handleOpenInNewTab("https://www.skool.com/christspiracy/about")
              }
              className="text-white bg-[#E93C24] cursor-pointer rounded-[40px] p-4 hover:bg-[#f86d5a]"
            >
              Join Movement Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
