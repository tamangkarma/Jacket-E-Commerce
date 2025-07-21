import { NavLink } from "react-router";
import { navData } from "../../data/navData";
import { HeaderIcons } from "../../data/headerIcons";

const Navbar = () => {
  return (
    <div className="flex justify-between md:justify-evenly items-center max-h-60 p-4">
      {/* Logo Name */}
      <div>
        <h1 className="md:text-h6 text-h7 Poppins ">3legant.</h1>
      </div>

      {/* Navlist */}
      <nav className=" gap-10 hidden md:flex">
        {navData.map((data, idx) => (
          <div key={idx} className="Space text-button-xs">
            <NavLink to={data.url}>{data.title}</NavLink>
          </div>
        ))}
      </nav>

      {/* Mobile View - show only first 2 icons */}
      <div className="flex md:hidden h-6 gap-4">
        {HeaderIcons.slice(2, 3).map((item, idx) => (
          <img key={idx} src={item.image} alt="" />
        ))}
      </div>
      {/* Desktop View - show all icons */}
      <div className="hidden md:flex h-6 gap-4">
        {HeaderIcons.map((item, idx) => (
          <img key={idx} src={item.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
