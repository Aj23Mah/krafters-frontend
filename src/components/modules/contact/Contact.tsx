import contact_img from "../../../assets/images/img3.jpg";
import '../../../assets/scss/Contact.scss';

const contact = () => {
  return (
    <>
      <div className="h-auto w-full flex items-center border-2 lg:px-[180px] md:p-xxl lg:py-[100px] contact_section">
         <div className="mr-xl contact_img">  {/* responsive */}
          <img src={contact_img} alt="image" className="h-full w-full rounded-3xl" />
        </div>
        <div className="p-lg border-solid border border-gray-400 rounded-3xl overflow-hidden flex justify-center flex-col contact_form">  {/* responsive */}
          <div className="font-bold text-4xl mb-sm">Contact Us</div>
          <div className="font-medium text-2xl text-gray-400 mb-md">Our friendly team would love to hear from you.</div>
          <form action="">
            <div className="flex gap-xs">
              <div className="w-1/2">
                <div className="mb-xs">
                  <label htmlFor="" className="font-bold text-2xl">First name</label>
                </div>
                <div className="">
                  <input type="text" placeholder="Enter your First Name...." className="mb-md w-full px-sm py-xs text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out"/>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-xs">
                  <label htmlFor="" className="font-bold text-2xl">Last name</label>
                </div>
                <div className="">
                  <input type="text" placeholder="Enter your Last Name...." className="mb-md w-full px-sm py-xs text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out" />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-xs">
                <label htmlFor="" className="font-bold text-2xl">Email</label>
              </div>
              <div>
                <input type="text" placeholder="Enter your Email...." className="mb-md w-full px-sm py-xs text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out" />
              </div>
            </div>
            <div>
              <div className="mb-xs">
                <label htmlFor="" className="font-bold text-2xl">Phone number</label>
              </div>
              <div>
                <input type="text" placeholder="Enter your Phone Number...." className="mb-md w-full px-sm py-xs text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out " />
              </div>
            </div>
            <div>
              <div className="mb-xs">
                <label htmlFor="" className="font-bold text-2xl">Message</label>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  placeholder="write something...."
                  className="mb-sm w-full px-sm py-xs text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out h-[190px]" 
                ></textarea>
              </div>
            </div>
            <div className="flex items-center mb-sm">
              <div className="h-md w-md mr-sm">
                <input type="checkbox" className="h-full w-full" />
              </div>
              <div className="font-normal text-2xl text-gray-400">
                You agree to our friendly <span className="underline">privacy policy</span>.
              </div>
            </div>
            <div className="font-bold text-2xl bg-blue-900 text-white text-center p-sm rounded-md">
              Send message
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;
