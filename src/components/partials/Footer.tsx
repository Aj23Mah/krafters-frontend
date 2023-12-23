import logo from "../../assets/images/krafters-logo.png";
import vector from "../../assets/images/Vector.png";
import { CiMobile2 } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full bg-gray-200 py-xxl md:px-[8rem] px-xxl">
        <div className="flex justify-between flex-wrap">
          <div>
            <div className="mb-sm">
              <img src={logo} alt="logo" className="w-[160px]" />
            </div>
            <div className="text-md font-normal">
              <div className="flex mb-xs">
                <div className="text-2xl mr-xs">
                  <CiMobile2 />
                </div>
                <div>+977-9841809752</div>
              </div>
              <div className="flex items-center mb-xs">
                <div className="text-2xl mr-xs">
                  <CiLocationOn />
                </div>
                <div className="w-[60%]">
                  B&D Educational Castle 4th floor Kumaripati, Lalitpur
                </div>
              </div>
              <div className="flex mb-xs">
                <div className="text-2xl mr-xs">
                  <CiPhone />
                </div>
                <div>01-4264984</div>
              </div>
              <div className="flex mb-xs">
                <div className="text-2xl mr-xs">
                  <PiEnvelopeSimpleThin />
                </div>
                <div>krafters.technology@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="text-md font-normal">
            <div className="text-xl mr-xs font-semibold mb-sm">QUICK LINKS</div>
            <div className="mb-xs">About Us</div>
            <div className="mb-xs">Work With Us</div>
            <div className="mb-xs">Meet the Team</div>
            <div className="mb-xs">Vacancies</div>
          </div>
          <div className="text-md font-normal">
            <div className="text-xl mr-xs font-semibold mb-sm">Navigation</div>
            <div className="mb-xs">Home</div>
            <div className="mb-xs">Categories</div>
            <div className="mb-xs">Explore</div>
            <div className="mb-xs">Contacts</div>
          </div>
          <div className="text-md font-normal">
            <div className="text-xl mr-xs font-semibold mb-sm">NEED HELP?</div>
            <div className="mb-xs">FAQ</div>
            <div className="mb-xs">connect with us</div>
            <div className="mb-xs">Contacts</div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap pt-md">
          <div className="text-md">All Rights Reserved | 2024 | RightFind</div>
          <div className="flex">
            <div className="text-xl mr-xs font-medium pr-xs">
              <SlSocialFacebook />
            </div>
            <div className="text-xl mr-xs font-medium pr-xs">
              <SiInstagram />
            </div>
            <div>
              <img src={vector} alt="vector" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
