import {  Pattern, Yeshua, zig } from "../../assets/png";
import { Lightbible } from "../../assets/svgs";

const Spiritual = () => {
  return (
    <div className="cp-container w-full">
      <div className="flex items-center justify-between w-11/12 ">
        <div className="relative ">
          <div>
            <img src={Pattern} alt="" className="" />
          </div>
          <div className="absolute bottom-[10%] left-[24%]">
            <img src={Yeshua} className="img-border" alt="" />
          </div>
          <div className="absolute top-[10%] left-[23%]">
            <img src={Lightbible} className="rounded-md p-2" alt="" />
          </div>
        </div>
        <div className="relative space-y-6">
          <div>
            <h3 className="text-6xl font-normal text-white">
              GET <br />
              SPIRITUAL <br />
              MEAL PLANNER
            </h3>
            <img src={zig} className="w-14 h-14 " alt="" />
          </div>

          <p className="text-sm text-white">
            Christspiracy app is the home of record-shattering stories <br />{" "}
            that amplify light. In the Christspiracy app users can <br /> watch
            full episodes, cast to their television, pay-it-forward <br />
            to fund future seasons of shows they love and buy official
            merchandise.
          </p>
          <button className="text-white">Get Meal Planner</button>
        </div>
      </div>
    </div>
  );
};

export default Spiritual;
