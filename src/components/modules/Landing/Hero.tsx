import r from "../../../assets/images/RDNE-Stock.png";
import g from "../../../assets/images/green-box.png";
import { LiaPlayCircleSolid } from "react-icons/lia";
import arrow from "../../../assets/images/arrow.png";
import newspaper from "../../../assets/images/newspaper.png";

const Hero = () => {
  return (
    <div className='h-auto w-full relative p-16'>
        <div className="h-full w-full flex items-center justify-between lg:flex-row flex-col">
          <div className="w-3/5">
            <h3 className='text-3xl font-bold pb-6'>Unlock Your IT Potential</h3>
            <h1 className='text-6xl font-bold pb-6'>Be Work Ready</h1>
              <p className='font-normal text-base w-80 pb-6'>Explore Krafter's selection of React courses to acquire proficiency in coding with this highly valuable language.</p>
            <div className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white flex items-center">Explore Krafters <div className='text-2xl'><LiaPlayCircleSolid /></div></span> 
            </div>
          </div>
          <div className='flex'>
            <div>
              <div className="h-80 w-48">
                <img src={r} alt="office1" className="h-full w-full"/>
              </div>
              <div className="h-10 w-10 float-right">
                <img src={g} alt="office1" className="h-full w-full"/>
              </div>
            </div>
            <div>
              <div className="h-40 w-52">
                <img src={r} alt="office1" className="h-full w-full"/>
              </div>
              <div className="h-52 w-52">
                <img src={r} alt="office1" className="h-full w-full"/>
              </div>
            </div>
          </div>
        </div>
        <div className='h-28 w-28 absolute top-60 left-[420px] hidden lg:block'>
          <img src={arrow} alt="arrow" className='w-full'/>
        </div>
          <div className='absolute bottom-0 right-0 z-[-1] hidden lg:block'>
            <img src={newspaper} alt="newspaper" className=''/>
          </div>
    </div>
  )
}

export default Hero;
