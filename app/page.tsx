import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { FaSpotify } from "react-icons/fa";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <div className="banner">
        <div className="top">
          <div>Alejandro Perez</div>
          <div>
            <ul className="social_media">
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <section className="banner_text">
          {"I design and "}
          <span className="simple">develop</span>{" "}
          {" experiences that make people's lives "}
          <span className="simple">simple</span>
        </section>
        {/*<img src="/gilles-lambert-pb_lF8VWaPU-unsplash.jpg" alt="" />*/}
        <section>
          <span>Mu tools</span>
          <ul className="skills">
            <li>
              <IoLogoJavascript />
              Javascript
            </li>
            <li>
              <SiTypescript />
              Typescript
            </li>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <SiNextdotjs />
              NextJS
            </li>
            <li>
              <FaCss3 />
              CSS
            </li>
            <li>
              <FaNodeJs />
              NodeJS
            </li>
            <li>
              <FaGitAlt />
              Git
            </li>
            <li>
              <FaGithub />
              GitHub
            </li>
            <li>
              <VscGithub />
              GitHub Desktop
            </li>
            <li>
              <BsFiletypeSql />
              SQL
            </li>
            <li>
              <BiLogoPostgresql />
              PostgreSQL
            </li>
            <li>
              <SiPhp />
              PHP
            </li>
            <li>
              <BiLogoVisualStudio />
              Visual Studio
            </li>
            <li>
              <BiLogoVisualStudio />
              FaSpotify ^w^
            </li>
          </ul>
        </section>
      </div>
      <section className="latest_projects">
        <h3>Latest projects</h3>
        <div className="projects_list">
          <div className="project">
            <img
              src="/Social Templates - Natural State Kinesiology.jpg"
              alt=""
            />
            <div>Lorem ipsum</div>
            <div>Excepteur sint occaecat cupidatat non proident</div>
          </div>

          <div className="project">
            <img
              src="/Social Templates - Natural State Kinesiology.jpg"
              alt=""
            />
            <div>Lorem ipsum</div>
            <div>Excepteur sint occaecat cupidatat non proident</div>
          </div>
          <div className="project">
            <img
              src="/Social Templates - Natural State Kinesiology.jpg"
              alt=""
            />
            <div>Lorem ipsum</div>
            <div>Excepteur sint occaecat cupidatat non proident</div>
          </div>
        </div>
      </section>
    </main>
  );
}
