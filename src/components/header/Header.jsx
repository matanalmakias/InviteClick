import React from "react";
import logo from "../../assets/logo.png";
import "./style.scss";
import Manager from "../../pages/Manager";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const nav = useNavigate();
  return (
    <div className="header justify-content-center align-items-center d-flex flex-column">
      <img className="logo-img" src={logo} alt="" />
      <button onClick={() => nav("/manager")} className="manager-move-btn ">
        דף מנהלים
      </button>
    </div>
  );
};

export default Header;
