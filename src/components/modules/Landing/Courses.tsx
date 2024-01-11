import { ClockHour4 } from "tabler-icons-react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Certificate } from "tabler-icons-react";
import { DeviceMobile } from "tabler-icons-react";
import "../../../assets/scss/Courses.scss";
import Ongoing_course from "./Ongoing_course";
import Upcomming_course from "./Upcomming_course";

const Courses = () => {
  return (
    <>
        <div>
          <Ongoing_course />
        </div>
      {/* next-section */}
      <div className="bg-slate-500 h-full w-full lg:px-[180px] p-xxl lg:py-[100px] lg:flex flex-wrap justify-between block">
        <div className="border-solid p-xs flex flex-col items-center lg:w-[20%]">
          <div>
            <ClockHour4 size={70} strokeWidth={2} />
          </div>
          <div className="font-normal text-2xl">Your time</div>
          <div className="font-normal text-2xl">Your pace</div>
          <div className="text-md border-black border-solid border-x-0 border-b-0 pt-sm">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            animi non officia eos omnis consequatur corporis architecto."
          </div>
        </div>
        <div className="border-solid p-xs flex flex-col items-center lg:w-[20%] sm:mt-xs">
          <div>
            <IoCheckmarkCircleOutline size={70} strokeWidth={2} />
          </div>
          <div className="font-normal text-2xl">Multiple Choice</div>
          <div className="font-normal text-2xl">Assesment</div>
          <div className="text-md border-black border-solid border-x-0 border-b-0 pt-sm">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            animi non officia eos omnis consequatur corporis architecto."
          </div>
        </div>
        <div className="border-solid p-xs flex flex-col items-center lg:w-[20%] sm:mt-xs">
          <div>
            <Certificate size={70} strokeWidth={2} />
          </div>
          <div className="font-normal text-2xl">Certified</div>
          <div className="font-normal text-2xl">Courses</div>
          <div className="text-md border-black border-solid border-x-0 border-b-0 pt-sm">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            animi non officia eos omnis consequatur corporis architecto."
          </div>
        </div>
        <div className="border-solid p-xs flex flex-col items-center lg:w-[20%] sm:mt-xs">
          <div>
            <DeviceMobile size={70} strokeWidth={2} />
          </div>
          <div className="font-normal text-2xl">Your</div>
          <div className="font-normal text-2xl">Device</div>
          <div className="text-md border-black border-solid border-x-0 border-b-0 pt-sm">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            animi non officia eos omnis consequatur corporis architecto."
          </div>
        </div>
      </div>
        <div>
          <Upcomming_course />
        </div>
    </>
  );
};

export default Courses;
