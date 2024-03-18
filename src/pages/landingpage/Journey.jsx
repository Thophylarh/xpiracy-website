import { Link } from 'react-router-dom';
import { movementImg } from '../../assets/png';
import { handleOpenInNewTab } from '../../utils/handleOpenInNewTab';

const Journey = () => {
  return (
    <div className="py-20 md:ml-40 px-8 ">
      <div className="journey-container md:px-[3rem] px-[1rem] md:w-full flex md:mx-auto w-[380px]">
        <div className="md:flex items-center justify-between w-full ">
          <div className="space-y-4  w-full">
            <h2 className=" text-[#fff]  md:w-[350px] w-[270px] md:text-6xl text-2xl font-normal">
              Join The Movement
            </h2>
            <p className="text-[10px] text-[#d8d6d6] pb-5  md:text-[12px] md:w-[400px]  ">
              Our community on “Skool” rewards you for your activism while
              connecting you to others passionate about compassion.
            </p>
            {/* <button className="px-10 py-2 bg-[#E93C24] rounded-lg flex items-center gap-x-2">
              <p className="text-sm text-[#fff]">Join Movement Now</p>
            </button> */}

            <Link
              to=""
              onClick={() =>
                handleOpenInNewTab('https://www.skool.com/christspiracy/about')
              }
              className="text-white bg-[#E93C24] cursor-pointer rounded-[40px] p-4 hover:bg-[#f86d5a]"
            >
              Join Movement Now
            </Link>
          </div>
          <div className=" w-full">
            <img
              src={movementImg}
              alt=""
              className="md:h-[400px] md:w-[400px] w-[200px] h-[200px] md:block hidden red-tint"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
