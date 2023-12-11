import bigCart from "../../../assets/images/Big-card.png";
import userIcon from "../../../assets/images/user-icon.png";

const Ongoingcource = () => {
  return (
    <div className="bg-[#1D1D1D] p-16 h-auto">
      {/* <div className="border-2 border-red-700 h-full p-4 text-white"> */}
      <div className="text-center text-white text-2xl font-semibold mb-4">
        Ongoing Courses
      </div>
      <div className="border-2 border-blue-500 flex flex-col justify-between items-center gap-10">
        <div className="flex gap-10">
          <div className="min-h-[336px] max-w-[267px] text-white p-2 border-2 border-white flex flex-col justify-center gap-2">
            <div>
              <img src={bigCart} alt="" />
            </div>
            <div className="flex gap-2">
              <div>
                <img src={userIcon} alt="" />
              </div>
              <div>
                <div className="font-semibold">Jane Cooper</div>
                <div>Full Stack Developer</div>
                <div>Krafter Technology</div>
              </div>
            </div>
            <div className="font-bold">
              Designing and Prototyping with Figma: From Beginner to Pro
            </div>
            <div className="flex gap-1">
              <div className="font-bold">Rs.20,000</div>
              <s>Rs.30,000</s>
            </div>
            <div>Next Batch: 12th December, 2023</div>
          </div>
          <div className="min-h-[336px] min-w-[267px] border-2 border-white">
            1
          </div>
          <div className="min-h-[336px] min-w-[267px] border-2 border-white">
            1
          </div>
          <div className="min-h-[336px] min-w-[267px] border-2 border-white">
            1
          </div>
        </div>
        <div className="flex gap-10">
          <div className="min-h-[336px] min-w-[267px] border-2 border-white">
            2
          </div>
          <div className="min-h-[336px] min-w-[267px] border-2 border-white">
            2
          </div>
          <div className="min-h-[336px] min-w-[267px] border-2 border-white">
            2
          </div>
          <div className="min-h-[336px] min-w-[267px] border-2 border-white">
            2
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Ongoingcource;
