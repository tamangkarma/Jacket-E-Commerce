import { NavLink } from "react-router";
import { navData } from "../../data/navData";
import { HeaderIcons } from "../../data/headerIcons";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center max-h-60 p-4">
      {/* Logo Name */}
      <div>
        <h1 className="text-h6 Poppins ">3legant.</h1>
      </div>

      {/* Navlist */}
      <nav className="flex gap-10">
        {navData.map((data, idx) => (
          <div key={idx} className="Space text-button-xs">
            <NavLink to={data.url}>{data.title}</NavLink>
          </div>
        ))}
      </nav>

      {/* Buttons */}
      <div className="flex h-6 gap-4">
        {HeaderIcons.map((item, idx) => (
          <img key={idx} src={item.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
