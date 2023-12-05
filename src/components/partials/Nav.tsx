import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Categories", path: "/category" },
    { label: "Explore", path: "/explore" },
    { label: "Contact", path: "/contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-blue-200 py-4 md:px-20 px-7">
        <div className="text-4xl font-semibold mr-2 mb-2">Krafters</div>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div className="flex overflow-hidden items-center px-2 bg-white border-2 border-black rounded-[30px] max-w-[719px]">
          {/* ml-3 mt-5 sm:mb-5 */}
          <div className="w-full mr-2"><input type="text" className="p-2 w-full border-none outline-none" /></div> 
          <div><AiOutlineSearch size={32} /></div>
        </div>

        {/* 
        search box

        width: 719px
        height: 48px
        top: 15.5px
        left: 231px
        border-radius: 30px
        border: 2px

        div

        width: 1440px
        height: 258px
        top: 377px
        left: 17px

          logo

          width: 108px
          height: 63px
          top: 8px
          left: 58px
          */}

        <div
          className={`cursor-pointer md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${isMenuOpen ? "top-24 opacity-100" : "top-[-490px]"} md:opacity-100`} 
        >{/* top-12 */}
          {navItems.map((v, key) => (
            <div
              key={key}
              className="md:ml-8 text-xl font-semibold md:my-0 my-7"
            >
              <div className="text-black-dark hover:text-black-light duration-500 text-center">
                <Link to={v.path}>{v.label}</Link>
              </div>
            </div>
          ))}

          {/* <div className="md:ml-2 text-center">
            <button className="bg-primary-dark text-black px-6 py-2 rounded-3xl text-xl">
              Sign In
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
