import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = (props) => {
  const handleMouseOver = () => props.setIsActiveSidebar(true);
  const handleMouseOut = () => props.setIsActiveSidebar(false);

  return (
    <div
      className="sidebar"
      style={{width: props.isActiveSidebar ? "300px" : "70px"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="sidebar-content">
        <div className="sidebar-item active-item">
          <span className="material-icons-outlined hover active">
            lightbulb
          </span>
          <span>Notes</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">notifications</span>
          <span>Reminders</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">edit</span>
          <span>Edit labels</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">archive</span>
          <span>Archive</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">delete</span>
          <span>Trash</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
