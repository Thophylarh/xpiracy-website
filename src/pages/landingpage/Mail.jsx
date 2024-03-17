import { zig } from "../../assets/png";

const Mail = () => {
  return (
    <div className="cp-container w-full">
      <div className="flex items-center justify-between w-11/12 ">
        <div className=" space-y-6">
          <div>
            <h3 className="text-6xl font-normal text-white w-[400px]">
              JOIN THE MAILING LIST
            </h3>
            <img src={zig} className="w-14 h-14 " alt="" />
          </div>
        </div>
        <div className=" ">
          <div>Form</div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
