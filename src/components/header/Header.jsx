import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import "./style.scss";
import Manager from "../../pages/Manager";
import { useNavigate } from "react-router-dom";
import { user } from "../../utils/utils";
import { useState } from "react";
const Header = ({ count }) => {
  const nav = useNavigate();
  return (
    <div className="header justify-content-center align-items-center d-flex flex-column">
      <img onClick={() => nav("/")} className="logo-img" src={logo} alt="" />
      <button onClick={() => nav("/manager")} className="manager-move-btn ">
        דף מנהלים
      </button>
      {count > 0 && (
        <p className="m-1 bg-secondary  w-100 text-white">
          מס' אימונים מתוזמנים: {count}
        </p>
      )}
    </div>
  );
};

export default Header;
