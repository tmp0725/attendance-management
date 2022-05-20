import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    cName: "nav-text",
    icon: <AiIcons.AiFillHome />
  },

  {
    title: "Weather",
    path: "/weather",
    cName: "nav-text",
    icon: <TiIcons.TiWeatherPartlySunny />
  },

  {
    title: "Calculator",
    path: "/calculator",
    cName: "nav-text",
    icon: <BiIcons.BiCalculator />
  },

  {
    title: "CreateCard",
    path: "/createcard",
    cName: "nav-text",
    icon: <IoIcons.IoIosCreate />
  },

  {
    title: "Contact",
    path: "/contact",
    cName: "nav-text",
    icon: <IoIcons.IoMdContact />
  },

  {
    title: "Logout",
    path: "/",
    cName: "nav-text",
    icon: <BiIcons.BiLogOut />
  },
]