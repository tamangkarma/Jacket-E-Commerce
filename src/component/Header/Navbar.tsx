import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import searchIcon from "../../../public/logo/search.png"
import user from "../../../public/logo/user-circle.png"
import shoppingCart from "../../../public/logo/shopping bag.png"
import { navData } from "../../data/navData";
import {
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/account");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative flex justify-between px-4 md:px-[160px] items-center max-h-60 p-4 border-b">
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button (Mobile) */}
          <button onClick={toggleMenu} className="md:hidden z-20">
            {isMenuOpen ? (
              <HiOutlineX size={24} />
            ) : (
              <HiOutlineMenu size={24} />
            )}
          </button>

          {/* Logo Name */}
          <h1 className="md:text-h6 text-h7 Poppins">3legant.</h1>
        </div>

        {/* Desktop Navlist */}
        <nav className="gap-10 hidden md:flex">
          {navData.map((data, idx) => (
            <div key={idx} className="Space text-button-xs">
              <NavLink to={data.url}>{data.title}</NavLink>
            </div>
          ))}
        </nav>

        {/* Header Icons */}
        <button className="flex items-center h-6 gap-4 ">
          <img src={searchIcon} alt="" className="hidden md:block" />
          <img src={user} alt="" className="hidden md:block" onClick={handleShopClick}  />
          <img src={shoppingCart} alt="" className="" />
        </button>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-10">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navData.map((data, idx) => (
              <NavLink
                key={idx}
                to={data.url}
                onClick={toggleMenu} // Close menu on link click
                className="Space text-h6"
              >
                {data.title}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;