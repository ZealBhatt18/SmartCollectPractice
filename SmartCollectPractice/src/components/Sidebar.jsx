import React, { useState } from "react";
import "./Sidebar.css";
import { ImCheckboxChecked } from "react-icons/im";
import { FaGaugeHigh } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { RiFileTextFill } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = ({ setSelectedMenu }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectedMenu = (menu) => {
    setSelectedMenu(menu);
    setIsSelected(!isSelected);
    console.log(menu);
  };
  return (
    <div>
      <div className="sidebar-list">
        <div className="list pb-5">
          <ul className="pb-5">
            {isSelected === false ? (
              <li
                className="li-item p-2"
                onClick={() => handleSelectedMenu("Decision")}
              >
                <FaGaugeHigh className="mr-2" />
                Decison
              </li>
            ) : (
              <li
                className="li-item p-2"
                onClick={() => handleSelectedMenu("Decision")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <FaGaugeHigh className="mr-2" />
                Decison
              </li>
            )}
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Sent")}
            >
              <ImCheckboxChecked className="mr-2" />
              Sent
            </li>
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Hold")}
            >
              <FaHandPaper className="mr-2" />
              Hold
            </li>
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Closed/Paid")}
            >
              <FaCircleXmark className="mr-2" />
              Closed/Paid
            </li>
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Archieves")}
            >
              <FaArchive className="mr-2" />
              Archieves
            </li>
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Settings")}
            >
              <IoSettingsSharp className="mr-2" />
              Settings
            </li>
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Auto Submit")}
            >
              <FaListCheck className="mr-2" />
              Auto Submit
            </li>
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Auto Settings")}
            >
              <FaCogs className="mr-2" />
              Auto Settings
            </li>
            <li
              className="li-item p-2"
              onClick={() => handleSelectedMenu("Practice Aging")}
            >
              <RiFileTextFill className="mr-2" />
              Practice Aging
            </li>
            <li
              className="li-item p-2 mb-5"
              onClick={() => handleSelectedMenu("MYTSI login")}
            >
              <RiLogoutBoxRLine className="mr-2" />
              MYTSI login
            </li>
          </ul>
        </div>
        <div className="logo-img mt-5 pt-5">
          <img
            src="./src/assets/SikkaAILogo.png"
            width={"150px"}
            className="mt-5 pt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
