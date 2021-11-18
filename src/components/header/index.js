import React from "react";
import Logo from "../../assets/images/logo.png";
import { OutlineButton } from "../button";
import NavBtn from "../../assets/images/list-bullet.png";
import "./style.css";
const Index = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-6">
      <div className="container p-4 flex items-center">
        <div className="flex-1 md:flex-none">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex-1 ml-10 hidden md:block">
          <ul className="flex navbar">
            <li>
              <a href="#explore">Explore</a>
            </li>
            <li>
              <a href="#insights">Insights</a>
            </li>
            <li>
              <a href="#docs">Docs</a>
            </li>
            <li>
              <a href="#jobs">Jobs</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <OutlineButton>Get Started</OutlineButton>
        </div>
        <button className="md:hidden">
          <img src={NavBtn} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Index;
