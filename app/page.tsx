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

export default function Home() {
  return (
    <main>
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
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </section>
      <img src="/gilles-lambert-pb_lF8VWaPU-unsplash.jpg" alt="" />
      <section>
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
            <FaGithub />
            Github
          </li>
          <li>
            <BsFiletypeSql />
            SQL
          </li>
          <li>
            <BiLogoPostgresql />
            PostgreSQL
          </li>
          <li><SiPhp />
PHP</li>
        </ul>
      </section>
      <section className="latest_projects">
        <h3>Latest projects</h3>
        <div className="projects_list">
          <div className="project">
            <img src="/ES STUDIO_ VISUAL IDENTITY & WEB DESIGN.jpg" alt="" />
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
              src="/ES STUDIO_ VISUAL IDENTITY & WEB DESIGN (1).jpg"
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
