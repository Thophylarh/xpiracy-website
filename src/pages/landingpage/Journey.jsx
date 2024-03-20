import { Link } from 'react-router-dom';
import { movementImg } from '../../assets/png';
import { handleOpenInNewTab } from '../../utils/handleOpenInNewTab';
import AppBtn from '../../components/AppBtn/AppBtn';
import AppBigHeader from '../../components/AppBigHeader/AppBigHeader';
import AppSubText from '../../components/AppSubText/AppSubText';

const Journey = () => {
  return (
    // <div className="">
    //   <div className="">
    //     <div className="items-center flex mt-40 bg-slate-500 justify-center ">
    //       <div>
    //         <h2 className="text-[#fff] md:w-[350px] w-[270px] text-2xl md:text-6xl font-normal">
    //           JOIN THE MOVEMENT.
    //         </h2>
    //         <p className=" text-[#d8d6d6] pb-5 text-[12px] md:w-[400px] my-4">
    //           Our community on “Skool” rewards you for your activism while
    //           connecting you to others passionate about compassion.
    //         </p>

    //         <AppBtn
    //           onClick={() =>
    //             handleOpenInNewTab('https://www.skool.com/christspiracy/about')
    //           }
    //           title="Join Movement Now"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="">
      <div className="items-center  flex mt-24 justify-center w-[100%]">
        <div className="  space-y-6 ">
          <div className="mt-8">
            <AppBigHeader title=" JOIN THE MOVEMENT." />
          </div>

          <div>
            <AppSubText
              title=" Our community on “Skool” rewards you for your activism while
              connecting you to others passionate about compassion."
            />

            <AppBtn
              onClick={() =>
                handleOpenInNewTab('https://www.skool.com/christspiracy/about')
              }
              title="Join Movement Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
