import landing_img from "../../../assets/images/RDNE-Stock.png";
import greenbox from "../../../assets/images/green-box.png";
import { LiaPlayCircleSolid } from "react-icons/lia";
import arrow from "../../../assets/images/arrow.png";
import newspaper from "../../../assets/images/newspaper.png";
import { IoCubeOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { FaPeoplePulling } from "react-icons/fa6";
import Courses from "./Courses";
import "../../../assets/scss/Hero.scss";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="lg:px-[180px] p-xxl lg:py-[100px] flex items-center w-full h-full hero_section">
        <div className="lg:w-1/2 text-area">
          <div className="hero-text1">
            Unlock Your IT Potential
          </div>
          <div className="hero-text2">
            Be Work Ready
          </div>
          <div className="flex justify-between w-[90%]">
            <div className="lg:w-[58%] w-full text-lg">
              Explore Krafter's selection of React courses to acquire
              proficiency in coding with this highly valuable language.
            </div>
            <div className="lg:block">
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
          </div>
          <div className="border-solid flex lg:w-1/2 justify-center mt-sm ">
            <div className="font-bold md:text-xl text-md">Explore Krafters</div>
            <div className="text-2xl flex items-center">
              <LiaPlayCircleSolid />
            </div>
          </div>
        </div>
        <div className="h-full lg:w-1/2 relative image-area">
          <div className="grid grid-cols-2 gap-md">
            <div className="row-span-2">
              <img src={landing_img} alt="" height="90%" width="100%" className="img"/>
              <div className="flex justify-end items-end">
                <img src={greenbox} alt="" className="green-box"/>
              </div>
            </div>
            <div className="">
              <img src={landing_img} alt="" height="100%" width="100%" />
            </div>
            <div className="">
              <img src={landing_img} alt="" height="100%" width="100%" />
            </div>
          </div>
          <div className="absolute right-[-75px] bottom-[-75px] z-[-99]">
            <img src={newspaper} alt="img" className="newspaper" />
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center p-xxl hidden">
        <div className="flex justify-evenly w-full">
          <div className="flex items-center">
            <div className="pr-xs">
              <IoCubeOutline size={80} />
            </div>
            <div>
              <div className="text-5xl font-black">10 +</div>
              <div className="text-2xl">Years</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-xs">
              <TbUsersGroup size={80} />
            </div>
            <div>
              <div className="text-5xl font-black">250 +</div>
              <div className="text-2xl">Clients</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-xs">
              <GrProjects size={70} />
            </div>
            <div>
              <div className="text-5xl font-black">500 +</div>
              <div className="text-2xl">Projects</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-xs">
              <FaPeoplePulling size={70} />
            </div>
            <div>
              <div className="text-5xl font-black">12</div>
              <div className="text-2xl">Clients</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Courses />
      </div>
    </div>
  );
};

export default Hero;
