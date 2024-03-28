import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="container">
        <span id="logo">Logo</span>

        <div className="navs">
          <Link to={"/"}>
            <div className="link">Home</div>
          </Link>

          <Link to={"/about"}>
            <div className="link">About</div>
          </Link>

          <NavLink to={"/service"}>
            <div className="link">Service</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
