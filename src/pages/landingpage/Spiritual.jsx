import { Link } from "react-router-dom";
import { Pattern, Yeshua, mealImg, zig } from "../../assets/png";
import { Lightbible } from "../../assets/svgs";
import { handleOpenInNewTab } from "../../utils/handleOpenInNewTab";

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
        <div className="px-4 space-y-4 md:px-0">
          <div className="mt-8">
            <h3 className="text-2xl md:text-6xl font-normal text-white md:w-[500px]">
              SPIRITUAL MEAL PLANNER
            </h3>
            <div className="md:flex items-center justify-end">
              {/* <img src={zig} className="w-8 h-8 md:w-14 md:h-14  " alt="" /> */}
            </div>
          </div>

          <div>
            <p className="text-[12px] text-[#d8d6d6] md:w-[500px] mb-6">
              Elevate your mind, nourish your body, and rejuvenate your spirit
              with our plant-based Spiritual Meal Planner – your personal guide
              to holistic well-being.
            </p>

            <Link
              to=""
              onClick={() =>
                handleOpenInNewTab("https://spiritualmealplanner.com/")
              }
              className="text-white bg-[#E93C24] rounded-[40px] p-4 hover:bg-[#f86d5a]"
            >
              Get Meal Planner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spiritual;
