import { Link } from 'react-router-dom';
import { mealImg, zig } from '../../assets/png';

import { handleOpenInNewTab } from '../../utils/handleOpenInNewTab';
import AppBtn from '../../components/AppBtn/AppBtn';
import AppBigHeader from '../../components/AppBigHeader/AppBigHeader';
import AppSubText from '../../components/AppSubText/AppSubText';

const Spiritual = () => {
  return (
    <div className="">
      <div className="items-center  flex mt-40 justify-center w-[100%]">
        <div className="  space-y-6 ">
          <div className="mt-8">
            <AppBigHeader title="SPIRITUAL MEAL PLANNER." />
          </div>

          <div>
            <AppSubText
              title=" Elevate your mind, nourish your body, and rejuvenate your spirit
              with our plant-based Spiritual Meal Planner – your personal guide
              to holistic well-being."
            />

            <AppBtn
              onClick={() =>
                handleOpenInNewTab('https://spiritualmealplanner.com/')
              }
              title=" Get Meal Planner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spiritual;
