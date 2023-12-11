import heroImg from "../../../assets/images/hero-img.png";
import newspaper from "../../../assets/images/newspaper.png";
import Ongoingcource from "./Ongoingcource";

const Development = () => {
  return (
    <div className="px-28 py-28">
      <div className="flex lg:flex-row flex-col items-center justify-between h-full lg:p-16 p-10 gap-4 border border-blue-300 relative">
        <div className="lg:w-1/2 w-full mb-4">
          <div className="lg:text-5xl text-xl font-semibold mb-4">
            Development
          </div>
          <div className="font-normal lg:text-base text-sm">
            Explore Krafter's selection of React courses to acquire proficiency
            in coding with this highly valuable language.Explore Krafter's
            selection of React courses to acquire proficiency in coding with
            this highly valuable language.Explore Krafter's selection of React
            courses to acquire proficiency in coding with this highly valuable
            language.Explore Krafter's selection of React courses to acquire
            proficiency in coding with this highly valuable language.Explore
            Krafter's selection of React courses to acquire proficiency in
            coding with this highly valuable language.
          </div>
        </div>

        <div>
          <img src={heroImg} alt="" />
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 z-[-1]">
          <img src={newspaper} alt="" />
        </div>
      </div>
      <Ongoingcource />
    </div>
  );
};

export default Development;
