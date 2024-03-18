import { Link } from "react-router-dom";
import { Pattern, Yeshua, mealImg, zig } from "../../assets/png";
import { Lightbible } from "../../assets/svgs";

const Spiritual = () => {
  return (
    <div className="">
      <div className="items-center justify-between md:w-11/12 md:flex block">
        <div className="">
          <div>
            <img
              src={mealImg}
              alt=""
              className="md:w-[800px] md:h-[600px] w-[600px] h-[400px] md:block hidden "
            />
          </div>
        </div>
        <div className="px-4 space-y-6 md:px-0">
          <div className="mt-8">
            <h3 className="text-2xl md:text-6xl font-normal text-white md:w-[400px]">
              GET SPIRITUAL MEAL PLANNER
            </h3>
            <img src={zig} className="w-8 h-8 md:w-14 md:h-14 " alt="" />
          </div>

          <p className="text-sm text-white md:w-[350px]  ">
            Elevate your mind, nourish your body, and rejuvenate your spirit
            with our plant-based Spiritual Meal Planner – your personal guide to
            holistic well-being.
          </p>
          <div className="">
            <a
              href="https://spiritualmealplanner.com/"
              className="text-white bg-[#E93C24] rounded p-2 hover:bg-[#f86d5a] "
            >
              Get Your Meal Planner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spiritual;
