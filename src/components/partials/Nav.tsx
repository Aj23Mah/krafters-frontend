import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

const Nav = () => {
  const navItems = [
    { label: "Categories", icon: <BiSolidCategoryAlt />, path: "/category" },
    { label: "Explore", icon: <MdOutlineExplore />, path: "/explore" },
    { label: "Contact", icon: <IoMdContacts />, path: "/contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-gray-200 py-2 md:px-20 px-7">
        <div className="mr-2 mb-2">
          <img src={logo} alt="" className="w-[100px]" />
        </div>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div
          className={`flex overflow-hidden items-center px-2 bg-white border-2 border-black rounded-[30px] max-w-[719px]
          ${isSearchOpen ? "w-full" : "hidden md:flex"}`}
        >
          {/* ml-3 mt-5 sm:mb-5 max-w-[719px] */}
          <div className="w-full mr-2">
            <input
              type="text"
              className="p-2 w-full border-none outline-none"
            />
          </div>
          <div onClick={handleSearchClick} className="cursor-pointer">
            <AiOutlineSearch size={32} />
          </div>
        </div>

        <div
          className={`cursor-pointer md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${isMenuOpen ? "top-32 opacity-100" : "top-[-490px]"} md:opacity-100`}
        >
          {/* top-12 */}
          {navItems.map((v, key) => (
            <div
              key={key}
              className="md:ml-8 text-xl font-semibold md:my-0 my-7"
            >
              <div className="flex items-center text-black-dark hover:text-black-light duration-500 text-center">
                <div className="mr-1">{v.icon}</div>
                <div>
                  <Link to={v.path}>{v.label}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[50px]">
          <img src={userIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
