import React from "react";
import "./Navbar.css";
import logo from "../../utils/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const Navbar = () => (
  <>
    <div className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-img">
          <img src={logo} alt="" />
        </div>
        <h2 className="navbar__logo-text">Crypto Tracker</h2>
      </div>
      <div className="navbar__search">
        <SearchIcon />
      </div>
      <div className="navbar__menu">
        <MenuRoundedIcon />
      </div>
    </div>
  </>
);

export default Navbar;
