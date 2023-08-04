import React from "react";
import photo from "../../../assets/hamza abdous photo.png";
const Describtion = (props) => {
  var colorIcon = "#000";
  return (
    <div className="py-4">
      <div className="flex items-center px-2 space-x-4">
        <a
          href="https://github.com/hamzaabdous"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version={1.0}
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            className="inline-flex items-center justify-center p-1 duration-300 transform bg-indigo-500 rounded-md shadow-lg cursor-pointer w-7 h-7 hover:translate-y-1"
          >
            <path
              clipRule="evenodd"
              d="M16.003 0C7.17 0 .008 7.162.008 15.997c0 7.067 4.582 13.063 10.94 15.179.8.146 1.052-.328 1.052-.752 0-.38.008-1.442 0-2.777-4.449.967-5.371-2.107-5.371-2.107-.727-1.848-1.775-2.34-1.775-2.34-1.452-.992.109-.973.109-.973 1.605.113 2.451 1.649 2.451 1.649 1.427 2.443 3.743 1.737 4.654 1.329.146-1.034.56-1.739 1.017-2.139-3.552-.404-7.286-1.776-7.286-7.906 0-1.747.623-3.174 1.646-4.292-.165-.404-.715-2.031.157-4.234 0 0 1.343-.43 4.398 1.641a15.31 15.31 0 0 1 4.005-.538c1.359.006 2.727.183 4.005.538 3.055-2.07 4.396-1.641 4.396-1.641.872 2.203.323 3.83.159 4.234 1.023 1.118 1.644 2.545 1.644 4.292 0 6.146-3.74 7.498-7.304 7.893C19.479 23.548 20 24.508 20 26v4.428c0 .428.258.901 1.07.746C27.422 29.055 32 23.062 32 15.997 32 7.162 24.838 0 16.003 0z"
              fill={colorIcon}
              fillRule="evenodd"
              className="fill-181616"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/hamza-abdous/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            baseProfile="tiny"
            version="1.2"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            className="inline-flex items-center justify-center p-1 duration-300 transform bg-indigo-500 rounded-md shadow-lg cursor-pointer w-7 h-7 hover:translate-y-1"
          >
            <path
              d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z"
              fill={colorIcon}
              className="fill-000000"
            />
            <ellipse
              cx="6.5"
              cy="6.5"
              rx="1.55"
              ry="1.5"
              fill={colorIcon}
              className="fill-000000"
            />
          </svg>
        </a>
        <a
          href="https://www.google.com/maps/place/Rabat-Sal%C3%A9-K%C3%A9nitra/@33.9345358,-6.7663526,8.78z/data=!4m5!3m4!1s0xda0a548e6dd5ed7:0x26653c7bdfd060b2!8m2!3d34.1727659!4d-6.2375947"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center px-3 py-1 text-base font-bold rounded-full cursor-pointer text-slate-200 bg-slate-600 hover:bg-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-3 h-3 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="pl-2 sm:text-sm">
              Morooco , Rabat
              <div className="hidden w-2 h-2 ml-2 overflow-hidden bg-gray-400 rounded-full dark:bg-white md:inline-block"></div>{" "}
            </div>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-2">
        <div className="box-border col-start-1 col-end-3 pt-1 ">
          <h1 className="py-4 text-4xl font-bold">
            Hello 👋, My name is{" "}
            <span className="text-indigo-500 underline decoration-wavy underline-offset-8 dark:text-sky-100 decoration-indigo-700">
              Hamza Abdous
            </span>{" "}
            ✌️
          </h1>
          <p className="pargh">
            I'm a ~ {new Date().getFullYear() - 1998} year old I am a junior
            full-stack developer from Morocco. Passionate about web and mobile
            development, and after 3 years of experience in an agile dev team,
            during my experience, I have acquired many skills like React and
            React-native, This motivates me to look for more challenges to
            deliver a great user experience
          </p>
        </div>
        <div className="col-start-3">
          <img
            src={photo}
            alt="my image"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Describtion;
