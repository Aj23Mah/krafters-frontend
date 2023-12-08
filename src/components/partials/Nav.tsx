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
    {
      label: "Categories",
      icon: <BiSolidCategoryAlt size={28} />,
      path: "/category",
    },
    {
      label: "Explore",
      icon: <MdOutlineExplore size={28} />,
      path: "/explore",
    },
    { label: "Contact", icon: <IoMdContacts size={28} />, path: "/contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-gray-200 py-2 md:px-20 px-7">
        <div className="mr-2 mb-2">
          <img src={logo} alt="" className="w-[100px]" />
        </div>

        <div
          className="lg:flex items-center justify-between overflow-hidden border border-solid border-black w-[50%] rounded-full px-4 py-1
          hidden"
        >
          <div className="cursor-pointer mr-1">
            <AiOutlineSearch size={28} />
          </div>
          <div className="w-full mr-2">
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-full text-lg outline-none bg-gray-200"
            />
          </div>
        </div>

        <div className="lg:hidden">
          <div
            className="cursor-pointer mr-1"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? (
              <AiOutlineClose size={32} />
            ) : (
              <AiOutlineSearch size={32} />
            )}
          </div>
          {isSearchOpen && (
            // <div className="flex items-center px-2 bg-white overflow-hidden border border-black rounded-full md:absolute md:top-20 top-[-490px] w-full md:w-auto transition-all duration-500 ease-in">
            <div className="flex items-center px-2 bg-white overflow-hidden border border-black rounded-full absolute top-20 lg:top-[-490px] w-auto transition-all duration-500 ease-in">
              <input
                type="text"
                className="p-2 w-full border-none outline-none"
                placeholder="Search"
              />
            </div>
          )}
        </div>

        <div
          className={`cursor-pointer md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${isMenuOpen ? "top-14 opacity-100" : "top-[-490px]"} md:opacity-100`}
        >
          {navItems.map((v, key) => (
            <div
              key={key}
              className="md:ml-8 text-xl font-semibold md:my-0 my-7"
            >
              <div className="flex items-center duration-500 text-center">
                {/* <div className="mr-1">{v.icon}</div> */}
                {/* <div> */}
                  <Link to={v.path}>{v.label}</Link>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="w-[50px]">
          <img src={userIcon} alt="" />
        </div>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl cursor-pointer md:hidden"
          // absolute right-8 top-5
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
