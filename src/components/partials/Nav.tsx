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
    <nav className="shadow-md w-full sticky top-none z-50">
      <div className="flex items-center justify-between bg-white md:px-[8rem] px-lg py-xs">
        <div className="mr-xs mb-xs">
          <img src={logo} alt="" className="w-full" />
        </div>

        <div className="flex w-full justify-end items-center border-2 border-red-500">
          <div
            className="lg:flex items-center justify-between overflow-hidden border border-solid border-black w-[50%] rounded-full px-xs
          hidden"
          >
            <div className="cursor-pointer mr-[2px]">
              <AiOutlineSearch size={30} />
            </div>
            <div className="w-full mr-xs">
              <input
                type="text"
                placeholder="Search"
                className="p-xs w-full text-lg border-none outline-none bg-white"
              />
            </div>
          </div>
          <div className="lg:hidden">
            <div
              className="cursor-pointer mr-[2px]"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? (
                <AiOutlineClose size={32} />
              ) : (
                <AiOutlineSearch size={32} />
              )}
            </div>
            {isSearchOpen && (
              <div className="flex items-center px-xs bg-white overflow-hidden border border-black rounded-full absolute top-[90px] lg:top-[-490px] w-auto transition-all duration-500 ease-in">
                <input
                  type="text"
                  className="p-xs w-full border-none outline-none"
                  placeholder="Search"
                />
              </div>
            )}
          </div>
          <div
            className={`cursor-pointer md:flex md:items-center md:pb-none pb-xl absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-none pl-lg transition-all duration-500 ease-in 
          ${
            isMenuOpen ? "top-xxl opacity-100" : "top-[-490px]"
          } md:opacity-100`}
          >
            {navItems.map((v, key) => (
              <div
                key={key}
                className="md:ml-lg text-xl font-semibold md:my-none my-md"
              >
                <div className="flex items-center justify-center duration-500">
                  {/* <div className="mr-1">{v.icon}</div> */}
                  {/* <div> */}
                  <Link to={v.path} className="no-underline text-black">
                    {v.label}
                  </Link>
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[50px] ml-md">
            <Link to="/log-in">
              <img src={userIcon} alt="" />
            </Link>
          </div>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-lg text-3xl cursor-pointer md:hidden"
            // absolute right-8 top-5
          >
            {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
