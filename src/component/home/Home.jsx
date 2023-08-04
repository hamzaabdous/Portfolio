import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SelectTopSix } from "../../redux/action/githubAction";
import Describtion from "./child/Describtion";
import WhatDoIDo from "./child/WhatDoIDo";
import Gitproject from "./child/Gitproject.jsx";
import Technologies from "./child/Technologies";
import ListItem from "./child/ListItem.jsx";
import About from "../about/About.jsx";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiGit,
  SiBootstrap,
  SiTailwindcss,
  SiNpm,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiRedux,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiMicrosoftsqlserver,
  SiMysql,
  SiJava,
  SiSpringboot,
  SiLaravel,
  SiDocker,
  SiVuedotjs,
  SiPython,
  SiFlutter,
} from "react-icons/si";
import { BiWindowAlt } from "react-icons/bi";
import image from "../../assets/vecteezy_man-is-testing-web-application-network-on-smartphone-and_-removebg-preview.png";
import reactcard from "../../assets/Reactcard.png";
import generatepassword from "../../assets/generatepassword.png";
function Home() {
  const GithubProject = useSelector((state) => state.AllSixProjects.GitProject);
  const dispatch = useDispatch();
  const fetchApiGithub = async () => {
    const response = await axios
      .get(`https://gh-pinned-repos.egoist.sh/?username=hamzaabdous`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(SelectTopSix(response.data));
  };
  useEffect(() => {
    fetchApiGithub();
  }, []);
  const products = [
    {
      id: 1,
      name: "Password Generator",
      href: "https://jscodegenerator.netlify.app/",
      description:
        "In this project, you can select the options that you want to include in your password and customize the password length as per your need. You have to click on the generate password button to get the customized password. You can copy the generated password to the clipboard",
      imageSrc: generatepassword,
      imageAlt: "Password Generator",
    },
    {
      id: 2,
      name: "React card",
      href: "https://my-react-card.netlify.app/",
      imageSrc: reactcard,
      imageAlt: "React card ",
    },
  ];
  return (
    <div className="margin-lg-screen ">
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
        <div className="grid gap-2 overflow-hidden auto-cols-auto auto-rows-auto">
          <div className="col-span-7 box col-start-0">
            <div className="font-mono">
              <Describtion />
            </div>
            
          </div>
        </div>
      </AnimationOnScroll>
      <div class="grid overflow-hidden auto-cols-auto auto-rows-auto gap-2 pt-10">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInLeftBig"
        >
          <div className="pt-0 font-mono">
            <Technologies />
            <div className="flex justify-center m-3">
              <ul className="flex flex-row flex-wrap">
                <ListItem icon={SiPython} text={"Python"} />
                <ListItem icon={SiJava} text={"Java"} />
                <ListItem icon={SiSpringboot} text={"Spring boot"} />
                <ListItem icon={SiPhp} text={"PHP"} />
                <ListItem icon={SiLaravel} text={"Laravel"} />
                <ListItem icon={SiJavascript} text={"JavaScript"} />
                <ListItem icon={SiJquery} text={"JQuery"} />
                <ListItem icon={SiReact} text={"React.js"} />
                <ListItem icon={SiNextdotjs} text={"Next.js"} />
                <ListItem icon={SiVuedotjs} text={"Vue.js"} />
                <ListItem icon={SiNodedotjs} text={"Node.js"} />
                <ListItem icon={SiExpress} text={"Express.js"} />
                <ListItem icon={SiRedux} text={"Redux.js"} />
                <ListItem icon={SiFlutter} text={"Flutter"} />
                <ListItem icon={SiMicrosoftsqlserver} text={"SQL Server"} />
                <ListItem icon={SiMysql} text={"MySql"} />
                <ListItem
                  icon={SiStyledcomponents}
                  text={"styled-components"}
                />
                <ListItem icon={SiBootstrap} text={"Bootstrap"} />
                <ListItem icon={SiTailwindcss} text={"Tailwindcss"} />
                <ListItem icon={SiNpm} text={"NPM"} />
                <ListItem icon={SiDocker} text={"Docker"} />
                <ListItem icon={SiGit} text={"Git"} />
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInLeftBig"
        >
          <div class="box ">
            <div class="box row-span-0 pt-16">
              <div className="font-mono">
                <WhatDoIDo />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-5">
              {/* {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                target="_blank"
                className="bg-gray-100 border-2 border-gray-900 group rounded-xl"
              >
                <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-10 xl:aspect-h-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full group-hover:opacity-75"
                  />
                </div>
                <div className="hidden p-4 bg-gray-100 rounded-md sm:block">
                  <h3 className="text-lg font-bold text-black border-b-2 decoration-indigo-700">
                    {product.name}

                  </h3>
                  <p className="p-2 text-sm font-medium text-black border-b-2">
                    {product.description}
                  </p>
                  
                  
                </div>
              </a>
            ))} */}
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Home;

// const [v1, v2, v3, v4, v5, v6] = [
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis, sapiente neque praesentium ",
//   " ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis,",
//   "projects I've worked on. In total, the following repos have earnt",
//   "building a way to watch & browse the web, together.",
//   "software engineer from the Morocco. I'm interested in full stack web development including large scale frontend applic",
//   "Rapidly build modern websites without ever leaving your HTML",
// ];
