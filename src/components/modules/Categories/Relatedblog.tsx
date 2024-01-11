import { Carousel } from "@mantine/carousel";

import img10 from "../../../assets/images/img10.png";
import img11 from "../../../assets/images/img11.png";
import img12 from "../../../assets/images/img12.png";
import img13 from "../../../assets/images/img13.png";
import img5 from "../../../assets/images/img5.png";
import img6 from "../../../assets/images/img6.png";
import img7 from "../../../assets/images/img7.png";

import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
import user4 from "../../../assets/images/user4.png";
import user5 from "../../../assets/images/user5.png";
import user6 from "../../../assets/images/user1.png";
import user7 from "../../../assets/images/user7.png";

const Relatedblog = () => {
  const courseItem = [
    {
      imgUrl: img10,
      userUrl: user1,
      userName: "Darrel Steward",
      detail: "How does writing influence your personal brand?",
      date: "August 20,2022",
    },
    {
      imgUrl: img11,
      userUrl: user2,
      userName: "Kristin Watson",
      detail: "How to choose the right colors when creating a website?",
      date: "August 20,2022",
    },
    {
      imgUrl: img12,
      userUrl: user3,
      userName: "Cody Fisher",
      detail:
        "How to optimize images in WordPress for faster loading (complete guide)",
      date: "August 20,2022",
    },
    {
      imgUrl: img13,
      userUrl: user4,
      userName: "Jane Cooper",
      detail: "How to write content about your photographs",
      date: "August 20,2022",
    },
    {
      imgUrl: img5,
      userUrl: user5,
      userName: "Jane Cooper",
      detail: "How to write content about your photographs",
      date: "August 20,2022",
    },
    {
      imgUrl: img6,
      userUrl: user6,
      userName: "Jane Cooper",
      detail: "How to write content about your photographs",
      date: "August 20,2022",
    },
    {
      imgUrl: img7,
      userUrl: user7,
      userName: "Jane Cooper",
      detail: "How to write content about your photographs",
      date: "August 20,2022",
    },
  ];

  return (
    <div className="px-[160px] py-xxl bg-[#1c3d69]">
      <div className="md:text-3xl text-xl text-center md:font-bold font-semibold mb-md text-white">
        Related Blog
      </div>
      <div className="underline flex justify-end text-base text-white mb-md cursor-pointer hover:no-underline">
          Explore All
        </div>
      <div>
        <Carousel
          // withIndicators
          height={500}
          // slideSize="25%"
          slideSize={{ base: "100%", sm: "25%", md: "25%" }}
          // controlsOffset={}
          controlSize={30}
          // slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
          className="outline outline-solid outline-white text-white p-xl"
        >
          {courseItem.map((v, key) => (
            // <div key={key}>
            <Carousel.Slide key={key}>
              <div className="p-xs">
                <div>
                  <img src={v.imgUrl} className="w-[400px]" alt="" />
                </div>
                <div className="py-xs">
                  <div className="bg-white text-black w-[40%] text-center rounded-sm py-xs">
                    Technology
                  </div>
                  <div className="md:text-3xl text-lg font-bold mb-xs">
                    {v.detail}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-xs">
                        <img src={v.userUrl} alt="" />
                      </div>
                      <div className="md:text-md text-sm">{v.userName}</div>
                    </div>
                    <div className="md:text-md text-sm">{v.date}</div>
      <Carousel
        // withIndicators
        height={500}
        // slideSize="25%"
        slideSize={{ base: "100%", sm: "25%", md: "25%" }}
        // controlsOffset={}
        controlSize={30}
        slideGap="lg"
        loop
        align="start"
        slidesToScroll={1}
        className="outline outline-solid outline-white text-white p-lg"
      >
        {courseItem.map((v, key) => (
          <Carousel.Slide key={key} className="p-xs">
            <div>
              <img src={v.imgUrl} className="w-[400px]" alt="" />
            </div>
            <div className="py-xs">
              <div className="bg-white text-black w-[40%] text-center rounded-sm py-xs">
                Technology
              </div>
              <div className="md:text-3xl text-lg font-bold mb-xs">
                {v.detail}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-xs">
                    <img src={v.userUrl} alt="" />
                  </div>
                  <div className="md:text-md text-sm">{v.userName}</div>
                </div>
                <div className="md:text-md text-sm">{v.date}</div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Relatedblog;
