import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Header() {
  const changeTheme = (e) => {
    console.log(e.target.checked);
    let _html = document.querySelector("html");
    e.target.checked
      ? _html.classList.remove("dark")
      : _html.classList.add("dark");
  };
  const ShowNav = () => {
    document.getElementById("togglenav").classList.add("nav-in-sm-screen"); //ulInSmallScreen
    document.getElementById("ul_nav").classList.add("ulInSmallScreen"); //ulInSmallScreen
    document.querySelector("#togglenav div").classList.remove("hidden");
    document.querySelector("#togglenav div").classList.add("flex");
  };
  const RemoveNav = () => {
    document.getElementById("togglenav").classList.remove("nav-in-sm-screen"); //ulInSmallScreen
    document.getElementById("ul_nav").classList.remove("ulInSmallScreen"); //ulInSmallScreen
    document.querySelector("#togglenav div").classList.remove("flex");
    document.querySelector("#togglenav div").classList.add("hidden");
  };

  useEffect(() => {}, []);
  return (
    <div className="fucking-navbar">
      <div className="cursor-pointer md:hidden" onClick={ShowNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
            fill="#6366f1"
          />
        </svg>
      </div>
      <div id="togglenav" className="text-sm md:flex">
        {/* TODO: This for close nav in small screen */}
        <div className="justify-end hidden md:hidden" onClick={RemoveNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bg-indigo-500 cursor-pointer h-7 w-7 text-slate-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul
          className="hidden space-x-1 font-mono underline md:flex"
          id="ul_nav"
        >
          <li className="blur-none">
            <Link
              className="py-3 rounded-full dark:md:hover:bg-slate-900 hover:bg-blue-700/5 md:px-4"
              to="/"
              onClick={RemoveNav}
            >
              /
            </Link>
          </li>
          <li className="blur-none">
            <Link
              className="py-3 rounded-full dark:md:hover:bg-slate-900 hover:bg-blue-700/5 md:px-4"
              to="/Talk"
              onClick={RemoveNav}
            >
              /Talk
            </Link>
          </li>
          <li className="blur-none">
            <Link
              className="py-3 rounded-full dark:md:hover:bg-slate-900 hover:bg-blue-700/5 md:px-4"
              to="/Blog"
              onClick={RemoveNav}
            >
              /Blog
            </Link>
          </li>
         

        </ul>
      </div>
      {/* <div className="flex items-center justify-end ">
        <div className="font-mono font-bold capitalize rounded-full opacity-75 dark:text-gray-100 hover:opacity-100 py-">
          <h2 className="inline-block ml-3 tracking-wider ">
            Not playing anything
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1333.33 1333.3"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-flex items-center justify-center p-1 mx-2 duration-300 transform bg-indigo-500 rounded-md shadow-lg opacity-100 cursor-pointer w-7 h-7 hover:translate-y-1"
          >
            <path
              d="M666.66 0C298.48 0 0 298.47 0 666.65c0 368.19 298.48 666.65 666.66 666.65 368.22 0 666.67-298.45 666.67-666.65C1333.33 298.49 1034.88.03 666.65.03l.01-.04zm305.73 961.51c-11.94 19.58-37.57 25.8-57.16 13.77-156.52-95.61-353.57-117.26-585.63-64.24-22.36 5.09-44.65-8.92-49.75-31.29-5.12-22.37 8.84-44.66 31.26-49.75 253.95-58.02 471.78-33.04 647.51 74.35 19.59 12.02 25.8 37.57 13.77 57.16zm81.6-181.52c-15.05 24.45-47.05 32.17-71.49 17.13-179.2-110.15-452.35-142.05-664.31-77.7-27.49 8.3-56.52-7.19-64.86-34.63-8.28-27.49 7.22-56.46 34.66-64.82 242.11-73.46 543.1-37.88 748.89 88.58 24.44 15.05 32.16 47.05 17.12 71.46V780zm7.01-189.02c-214.87-127.62-569.36-139.35-774.5-77.09-32.94 9.99-67.78-8.6-77.76-41.55-9.98-32.96 8.6-67.77 41.56-77.78 235.49-71.49 626.96-57.68 874.34 89.18 29.69 17.59 39.41 55.85 21.81 85.44-17.52 29.63-55.89 39.4-85.42 21.8h-.03z"
              fill="#ffffff"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div> */}
      <div className="cursor-pointer ">
        <div className="flex justify-end ">
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            onChange={changeTheme}
          />
          <label htmlFor="toggle">
            <div className="flex items-center w-10 h-5 p-1 rounded-full bg-blue-700/5 dark:bg-white">
              <div
                className="w-4 h-4 duration-300 transform rounded-full shadow-md cursor-pointer toggle-dot border-s late-50 bg-blue-900/80 dark:bg-slate-900"
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
