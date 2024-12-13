import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiFileList3Fill } from "react-icons/ri";
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiCheckCircle,
} from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import '../styles/sidebar.css';
import { FaPeopleRoof } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      {/* Toggle Button */}
      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`menu ${isOpen ? "visible" : "hidden"}`}>
        <div className="logo">
          <BiBookAlt className="logo-icon" />
          <h1>EduLink</h1>
        </div>

        <div className="menu--list">
          <NavLink
            to="/studentpage"
            className={({ isActive }) =>
              isActive ? "item active" : "item"
            }
          >
            <BiHome /> Home
          </NavLink>
          <a href="#" className="item">
            <FaUserFriends className="icon" /> Requests
          </a>
          <a href="#" className="item">
            <BiMessage className="icon" /> Messages
          </a>
          <a href="#" className="item">
            <FaUserGraduate className="icon" /> My Applications
          </a>
          <a href="#" className="item">
            <FaPeopleRoof className="icon" /> Students Liste
          </a>
          <a href="#" className="item">
            <RiFileList3Fill className="icon" /> Themes
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
