import courses_01 from "../../../assets/images/courses_01.png";
import courses_02 from "../../../assets/images/courses_02.png";
import courses_03 from "../../../assets/images/courses_03.png";
import courses_04 from "../../../assets/images/courses_04.png";
import "../../../assets/scss/Courses.scss";

const Upcomming_course = () => {
  return (
    <>
      <div className="h-full w-full p-xl flex flex-col justify-center border-solid bg-zinc-900 text-white lg:px-[180px] md:p-xxl lg:py-[100px]">
        <div className="text-4xl font-black text-center">Upcoming Courses</div>
        <div className="lg:flex my-lg block">
          <div className="border border-solid p-xs lg:w-1/2  lg:mr-xl lg:mb-none sm:mb-lg">
            <div>
              <img src={courses_01} alt="img" height={300} width="100%" />
            </div>
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden mr-sm">
                <img
                  src={courses_03}
                  alt="user"
                  width={50}
                  className="block ml-auto mr-auto"
                />
              </div>
              <div>
                <div className="font-semibold text-md">Jane Cooper</div>
                <div className="text-slate-300">UI/UX Designer</div>
                <div className="text-slate-300">Krafters Technology</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-xl">
                Virtual Reality & Augmented Reality: Immersive Experiences in a
                D...
              </div>
              <div className="font-semibold text-lg">
                Rs.20,000{" "}
                <span className="line-through font-extralight ml-xs text-slate-300">
                  Rs.30,000
                </span>
              </div>
              <div className="font-semibold text-md text-slate-300">
                Next Batch: 12th December, 2023
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <div className="border border-solid mb-lg p-xs">
              <div className="">
                <img src={courses_02} alt="img" width="100%" height={220} />
              </div>
              <div>
                <div className="font-bold text-lg">
                  Cloud Computing Essentials: Leveraging the Power of
                  Virtualization
                </div>
                <div className="font-semibold text-md">
                  Rs.20,000{" "}
                  <span className="line-through font-extralight ml-xs text-slate-300">
                    Rs.30,000
                  </span>
                </div>
                <div className="font-semibold text-md text-slate-300">
                  Next Batch: 12th December, 2023
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <div className="border border-solid lg:mr-md sm:mb-lg mr-none p-xs h-full w-full">
                <div className="flex courses">
                  <div className="mr-sm">
                    <img src={courses_03} alt="img" />
                  </div>
                  <div className="font-bold text-md">
                    E-commerce Masteery: Building and Scaling On...
                  </div>
                </div>
                <div className="font-semibold text-base">
                  Rs.20,000{" "}
                  <span className="line-through font-extralight ml-xs text-slate-300">
                    Rs.30,000
                  </span>
                </div>
                <div className="font-semibold text-base text-slate-300">
                  Next Batch: 12th December, 2023
                </div>
              </div>
              <div className="border border-solid p-xs h-full w-full">
                <div className="flex courses">
                  <div className="mr-sm">
                    <img src={courses_04} alt="img" />
                  </div>
                  <div className="font-bold text-md">
                    User Experience Design: Crafting Intuitive Interfa...
                  </div>
                </div>
                <div className="font-semibold text-base">
                  Rs.20,000
                  <span className="line-through font-extralight ml-xs text-slate-300">
                    Rs.30,000
                  </span>
                </div>
                <div className="font-semibold text-base text-slate-300">
                  Next Batch: 12th December, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcomming_course;
