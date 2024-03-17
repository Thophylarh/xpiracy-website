import { man } from "../../assets/png";

const Journey = () => {
  return (
    <div className="py-20 cp-container">
      <div className="journey-container px-[5rem] w-9/12 flex  mx-auto relative ">
        <div className="flex items-center justify-between ">
          <div className="space-y-4">
            <h2 className="text-4xl text-[#fff] font-normal w-[350px]">
              Start Your Streaming Movemnet With Us Now
            </h2>
            <button className="px-10 py-2 bg-[#FF7A00] rounded-lg flex items-center gap-x-2">
          
              <p className="text-sm text-[#fff]">Join Movement Now</p>
            </button>
          </div>
          <div className="absolute -top-[67%] right-10">
            <img src={man} alt="" className="h-[500px] w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
