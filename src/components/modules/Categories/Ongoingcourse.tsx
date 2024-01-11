import { Carousel } from "@mantine/carousel";

import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
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

const Ongoingcourse = () => {
  const courseItem = [
    {
      imgUrl: img1,
      userUrl: user1,
      userName: "Jane Cooper",
      profile: "Full Stack Developer",
      company: "Krafter Technology",
      detail: "Cybersecurity Unvelied: Safegarding the Digital Frontier",
      amt: "Rs.20,000",
      cutAmt: "Rs.30,000",
      date: "12th December,2023",
    },
    {
      imgUrl: img2,
      userUrl: user2,
      userName: "Eleanor Pena",
      profile: "Full Stack Developer",
      company: "Krafter Technology",
      detail: "Blockchain Beyond Cryptocurrency: Transforming Industries",
      amt: "Rs.20,000",
      cutAmt: "Rs.30,000",
      date: "12th December,2023",
    },
    {
      imgUrl: img3,
      userUrl: user3,
      userName: "Jane Cooper",
      profile: "Full Stack Developer",
      company: "Krafter Technology",
      detail:
        "Virtual Reality & Augmented Reality: Immersive Experiences in a Digital World",
      amt: "Rs.20,000",
      cutAmt: "Rs.30,000",
      date: "12th December,2023",
    },
    {
      imgUrl: img4,
      userUrl: user4,
      userName: "Jane Cooper",
      profile: "Full Stack Developer",
      company: "Krafter Technology",
      detail:
        "User Experience Design: Crafting Intuitive Interfaces for Exceptional Engagement",
      amt: "Rs.20,000",
      cutAmt: "Rs.30,000",
      date: "12th December,2023",
    },
    {
      imgUrl: img5,
      userUrl: user5,
      userName: "Jane Cooper",
      profile: "Full Stack Developer",
      company: "Krafter Technology",
      detail: "Cybersecurity Unvelied: Safegarding the Digital Frontier",
      amt: "Rs.20,000",
      cutAmt: "Rs.30,000",
      date: "12th December,2023",
    },
    {
      imgUrl: img6,
      userUrl: user6,
      userName: "Jane Cooper",
      profile: "Full Stack Developer",
      company: "Krafter Technology",
      detail: "Cybersecurity Unvelied: Safegarding the Digital Frontier",
      amt: "Rs.20,000",
      cutAmt: "Rs.30,000",
      date: "12th December,2023",
    },
    {
      imgUrl: img7,
      userUrl: user7,
      userName: "Jane Cooper",
      profile: "Full Stack Developer",
      company: "Krafter Technology",
      detail: "Cybersecurity Unvelied: Safegarding the Digital Frontier",
      amt: "Rs.20,000",
      cutAmt: "Rs.30,000",
      date: "12th December,2023",
    },
  ];

  return (
    <div className="px-[160px] py-xxl bg-[#313030]">
      <div className="md:text-3xl text-xl text-center md:font-bold font-semibold mb-md text-white">
        Ongoingcourse
      </div>
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
            <div className="flex items-center">
              <div className="mr-sm">
                <img src={v.userUrl} className="w-full" alt="" />
              </div>
              <div>
                <div className="md:font-bold md:text-md font-medium text-sm">
                  {v.userName}
                </div>
                <div className="md:text-md md:font-medium font-normal text-sm">
                  {v.profile}
                </div>
                <div className="md:text-md text-base">{v.company}</div>
              </div>
            </div>
            <div className="md:font-bold md:text-lg font-medium text-md">
              {v.detail}
            </div>
            <div className="flex">
              <div className="mr-xs md:font-bold font-medium md:text-base text-sm">
                {v.amt}
              </div>
              <s className="md:text-base text-sm">{v.cutAmt}</s>
            </div>
            <div className="flex md:text-base text-sm">
              Next Barch: <div className="ml-xs">{v.date}</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Ongoingcourse;
