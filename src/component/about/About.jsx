import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SelectTopSix } from "../../redux/action/githubAction.js";
import Describtion from "../home/child/Describtion";
import WhatDoIDo from "../home/child/WhatDoIDo";
import Gitproject from "../home/child/Gitproject.jsx";
import Technologies from "../home/child/Technologies";
import ListItem from "../home/child/ListItem.jsx";
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
  SiJava,SiSpringboot,
} from "react-icons/si";
function About() {
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
    <div className="">
      <div className="margin-lg-screen ">
      <div className="font-mono">
        <WhatDoIDo />
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
      <div className="font-mono ">
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
    </div>
    </div>
  );
}

export default About;
