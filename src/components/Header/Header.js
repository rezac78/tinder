import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@material-ui/core/IconButton";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="logo"
      />
    </div>
  );
}

export default Header;
