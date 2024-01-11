import courses_01 from "../../../assets/images/courses_01.png";
import courses_02 from "../../../assets/images/courses_02.png";
import courses_03 from "../../../assets/images/courses_03.png";
import courses_04 from "../../../assets/images/courses_04.png";
import { Carousel } from "@mantine/carousel";
import "../../../assets/scss/Courses.scss";

const Ongoing_course = () => {
  return (
    <>
      <div className="h-full w-full p-xl flex flex-col justify-center border-solid bg-zinc-900 text-white lg:px-[180px] md:p-xxl lg:py-[100px]">
        <div className="text-4xl font-black text-center">Ongoing Courses</div>
        <div className="underline flex justify-end text-base cursor-pointer hover:no-underline">
          Explore All
        </div>
        <div className="text-md font-normal text-center">
          Explore Krafter's selection of React courses to acquire profiency in
          coding with this highly valuable language.
        </div>
        <div className="lg:flex my-lg block h-full">
          <div className="border border-solid p-xs lg:w-1/2 lg:mr-xl lg:mb-none mb-lg">
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
                Designing and Prototyping with Figma: From Beginner to pro
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
                  Master Your Market: Unleashing the Power of Marketing
                  Excellence!
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
                    React: Mastering the Art of Web Development
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
                    Code, Create, Conquer: Your Jounery to PHP
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
        {/* next section */}
        <div className="lg:flex flex-col h-full w-full hidden">
          <div className="font-black text-4xl pb-md text-center">Student Perspectives</div>
          <div className="underline flex justify-end text-base text-white mb-md cursor-pointer hover:no-underline">
          Explore All
        </div>
          <Carousel
            withIndicators
            height="100%"
            slideSize="30%"
            slideGap="lg"
            controlsOffset="xs"
            loop
            dragFree
            align="start"
            slidesToScroll={1}
          >
            <Carousel.Slide>
              <div className="border-solid py-md px-xl">
                <div className="pb-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo est quas saepe voluptates nostrum labore sed tempore
                  expedita odit aliquam."
                </div>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-sm">
                    <img
                      src={courses_03}
                      alt="image"
                      width={50}
                      className="block ml-auto mr-auto"
                    />
                  </div>
                  <div>Jane Cooper</div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="border-solid py-md px-xl">
                <div className="pb-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo est quas saepe voluptates nostrum labore sed tempore
                  expedita odit aliquam."
                </div>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-sm">
                    <img
                      src={courses_03}
                      alt="image"
                      width={50}
                      className="block ml-auto mr-auto"
                    />
                  </div>
                  <div>Jerome Bell</div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="border-solid py-md px-xl">
                <div className="pb-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo est quas saepe voluptates nostrum labore sed tempore
                  expedita odit aliquam."
                </div>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-sm">
                    <img
                      src={courses_03}
                      alt="image"
                      width={50}
                      className="block ml-auto mr-auto"
                    />
                  </div>
                  <div>Kristin Watson</div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="border-solid py-md px-xl">
                <div className="pb-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo est quas saepe voluptates nostrum labore sed tempore
                  expedita odit aliquam."
                </div>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-sm">
                    <img
                      src={courses_03}
                      alt="image"
                      width={50}
                      className="block ml-auto mr-auto"
                    />
                  </div>
                  <div>Jacob Jones</div>
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Ongoing_course;
