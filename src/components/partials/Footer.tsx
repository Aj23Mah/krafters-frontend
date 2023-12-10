import  logo  from '../../assets/images/krafters-logo.png'
import  vector  from '../../assets/images/Vector.png'
import { CiMobile2 } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";


const Footer = () => {
  return (
    <>
      <section className="h-auto w-full bg-gray-300 px-32 py-20">
        <div className="h-full w-full">
          <div className="flex justify-between flex-wrap  border-b pb-6">
            <div>
              <div className="h-20 w-40 mb-8">
                <img src={logo} alt="logo" className="w-full h-full"/>
              </div>
              <div className='text-sm font-normal'>
                <div className='flex mb-3'>
                  <div className='text-lg font-medium mr-3'>
                    <CiMobile2 />
                  </div>
                  <div>
                    +977-9841809752
                  </div>
                </div>
                <div className='flex mb-3'>
                  <div className='text-lg font-medium mr-3'>
                    <CiLocationOn />
                  </div>
                  <div className='w-52'>
                  B&D Educational Castle 4th floor Kumaripati, Lalitpur 
                  </div>
                </div>
                <div className='flex mb-3'>
                  <div className='text-lg font-medium mr-3'>
                    <CiPhone />
                  </div>
                  <div>
                    01-4264984
                  </div>
                </div>
                <div className='flex mb-3'>
                  <div className='text-lg font-medium mr-3'>
                    <PiEnvelopeSimpleThin />
                  </div>
                  <div>
                    krafters.technology@gmail.com 
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm font-normal">
              <div className='text-lg font-medium mb-2'>QUICK LINKS</div>
              <div className='mb-2'>About Us</div>
              <div className='mb-2'>Work With Us</div>
              <div className='mb-2'>Meet the Team</div>
              <div className='mb-2'>Vacancies</div>
            </div>
            <div className="text-sm font-normal">
              <div  className='text-lg font-medium mb-2'>Navigation</div>
              <div className='mb-2'>Home</div>
              <div className='mb-2'>Categories</div>
              <div className='mb-2'>Explore</div>
              <div className='mb-2'>Contacts</div>
            </div>
            <div className="text-sm font-normal">
              <div  className='text-lg font-medium mb-2'>NEED HELP?</div>
              <div className='mb-2'>FAQ</div>
              <div className='mb-2'>connect with us</div>
              <div className='mb-2'>Contacts</div>
            </div>
          </div>
          <div className='flex justify-between flex-wrap pt-7'>
            <div>All Rights Reserved | 2024 | RightFind</div>
            <div className='flex'>
              <div className='text-lg font-medium pr-4'><SlSocialFacebook /></div>
              <div className='text-lg font-medium pr-4'><SiInstagram /></div>
              <div className='h-4 w-4'><img src={vector} alt="vector" className="w-full h-full"/></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer