import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const Nav = () => {
  const [, , removeCookie] = useCookies(["refreshToken", "accessToken"]);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // Always open for non-mobile devices
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleLogout = async () => {
    const response = await axios.post("http://127.0.0.1:8000/api/logout", {
      username,
    });
    if (response.data.success === true) {
      removeCookie("refreshToken", { path: "/" });
      removeCookie("accessToken", { path: "/" });
      localStorage.removeItem("username");
      navigate("/login");
    }
  };

  return (
    <div className="py-4">
      <nav className="flex justify-between w-screen items-center px-4">
        <div className="flex justify-center items-center px-2 w-[1/2]">
          <i
            className="fa-solid fa-bars cursor-pointer"
            onClick={toggleDropdown}
          ></i>
          {isDropdownOpen && (
            <div className="absolute left-2 top-10 mt-2 w-32 bg-white rounded-lg shadow-xl z-10 xl:h-screen">
              <div className="py-1">
                <Link
                  to="/dashboard/overview"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px] active:bg-indigo-500 "
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <HiOutlineSquares2X2 />
                    Overview
                  </div>
                </Link>
                <Link
                  to="/dashboard/task"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <SlBookOpen />
                    Task
                  </div>
                </Link>
                <Link
                  to="/dashboard/doctor"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <FaUserDoctor />
                    Mentor
                  </div>
                </Link>
                <Link
                  to="/dashboard/message"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <AiOutlineMessage />
                    Profile
                  </div>
                </Link>
                <Link
                  to="/dashboard/setting"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <IoSettingsOutline />
                    Setting
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center full gap-2">
          <i className="fa-solid fa-bell"></i>
          <div className="relative">
            <img
              className="rounded-full w-10 h-10 cursor-pointer"
              src="../../../public/profile.png"
              alt="profile"
              onClick={toggleDropdown2}
            />
            {isDropdownOpen2 && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl z-10">
                <div className="py-1">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                  >
                    Settings
                  </Link>
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  {/* Add more options as needed */}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
