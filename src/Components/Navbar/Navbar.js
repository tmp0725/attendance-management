import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { auth } from '../Firebase/Firebase';
import Clock from '../Clock/Clock';
import './Navbar.css';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
          <Link to="/home"><h2 className="nav-title">社内勤怠管理システム</h2></Link>
          <Clock />
          <Link to="/"><button className="logout-btn"
            onClick={
              async () => {
                try {
                  await auth.signOut();
                  props.history.push("/")
                } catch (error) {
                  alert(error.message)
                }
              }}>Logout</button>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
};

export default Navbar;