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
} from "react-icons/si";
import image from "../../assets/vecteezy_man-is-testing-web-application-network-on-smartphone-and_-removebg-preview.png";
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

  return (
    <div className="margin-lg-screen ">
      <div className="grid overflow-hidden auto-cols-auto auto-rows-auto gap-2">    
        <div className="box col-start-0 col-span-0">
          <div className="font-mono">
            <Describtion />
          </div>
        </div>
      </div>
      <div class="grid overflow-hidden auto-cols-auto auto-rows-auto gap-2 pt-10">
        
        <div className="font-mono pt-0">
        <Technologies />
        <div className="flex justify-center ">
          <ul className="grid gap-4 grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
            <ListItem icon={SiJava} text={"Java "} />
            <ListItem icon={SiSpringboot} text={"Spring boot"} />
            <ListItem icon={SiPhp} text={"PHP"} />
            <ListItem icon={SiJavascript} text={"JavaScript "} />
            <ListItem icon={SiHtml5} text={"HTML 5"} />
            <ListItem icon={SiJquery} text={"JQuery "} />
            <ListItem icon={SiReact} text={"React.js "} />
            <ListItem icon={SiNextdotjs} text={"Next.js "} />
            <ListItem icon={SiNodedotjs} text={"Node.js "} />
            <ListItem icon={SiExpress} text={"Express.js "} />
            <ListItem icon={SiRedux} text={"Redux.js "} />
            <ListItem icon={SiMicrosoftsqlserver} text={"SQL Server "} />
            <ListItem icon={SiMysql} text={"MySql "} />
            <ListItem icon={SiStyledcomponents} text={"styled-components"} />
            <ListItem icon={SiCss3} text={"CSS 3"} />
            <ListItem icon={SiBootstrap} text={"Bootstrap "} />
            <ListItem icon={SiTailwindcss} text={"Tailwindcss "} />
            <ListItem icon={SiNpm} text={"NPM "} />
            <ListItem icon={SiGit} text={"Git "} />
          </ul>
        </div>
      </div>
        <div class="box ">
      <div class="box row-span-0 pt-16">
          <div className="font-mono">
            <WhatDoIDo />
          </div>
        </div>
          <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3">
            {Object.keys(GithubProject).length !== 0 &&
              GithubProject.map((Proj) => {
                return (
                  <Fragment key={Proj.repo}>
                    <Gitproject
                      repo={Proj.repo}
                      stars={Proj.stars}
                      forks={Proj.forks}
                      description={Proj.description}
                      link={Proj.link}
                    />
                  </Fragment>
                );
              })}
          </div>
        </div>
       
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
