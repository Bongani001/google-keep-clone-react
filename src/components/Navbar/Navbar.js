import React from "react";
import "./navbar.css";

const Navbar = (props) => {
  const handleSidebarToggler = () => {
    props.setIsActiveSidebar((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span
            className="material-icons-outlined hover"
            onClick={handleSidebarToggler}
          >
            menu
          </span>
          <span className="tooltip-text">Main menu</span>
        </div>
        <img
          className="gb_Hc gb_Hd"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
          aria-hidden="true"
          role="presentation"
        />
        <span className="logo-text">Keep</span>
      </div>
      <div className="search-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover">view_agenda</span>
          <span className="tooltip-text">List view</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">apps</span>
          <span className="tooltip-text">Google apps</span>
        </div>
        <div className="tooltip logout">
          <span className="material-icons-outlined hover">account_circle</span>
          <span className="tooltip-text">Logout</span>
          <span className="auth-user"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
