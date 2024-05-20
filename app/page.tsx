import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { VscLinkExternal } from "react-icons/vsc";
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

import { Roboto, Nunito } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const handwritting = Nunito({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <div className="space">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="content">
        <div className="banner">
          <div className="top">
            <div className={handwritting.className}>Alejandro Perez</div>
            <div>
              <ul className="social_media">
                <li>
                  <Link href="https://github.com/alejandro3469">
                    <FaGithub />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-22060b180/">
                    <FaLinkedin />
                  </Link>
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
          <section className="tools">
            <h3>My tools</h3>
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
                <FaSpotify />
                Spotify ^w^
              </li>
            </ul>
          </section>
        </div>
        <section className="latest_projects">
          <h3>Latest projects</h3>
          <div className="projects_list">
            <Link href="https://food-menu-mu.vercel.app/la-casa-de-las-gargolas">
              <div className="project">
                <img src="/albert-hu-RII9HuLDz4M-unsplash.jpg" alt="" />
                <div className="project_title">
                  <span>Food menu</span>
                  <VscLinkExternal />
                </div>
                <div className="description">
                  {
                    "Food app for restaurants with dashboard to add, delete and edit dishes and categories' names, descriptions, prices and availability"
                  }
                </div>
              </div>
            </Link>
            <Link href="https://event-chi-six.vercel.app/">
              <div className="project">
                <img src="/nathan-dumlao-w5hhoYM_JsU-unsplash (1).jpg" alt="" />
                <div className="project_title">
                  <span>Wedding website</span>
                  <VscLinkExternal />
                </div>
                <div className="description">
                  Website to display photos, wedding date, location and days
                  left for couples
                </div>
              </div>
            </Link>

            <Link href="https://rest-countries-docs.vercel.app/">
              <div className="project">
                <img src="/vladislav-klapin-YeO44yVTl20-unsplash.jpg" alt="" />
                <div className="project_title">
                  <span>Countries API</span>
                  <VscLinkExternal />
                </div>
                <div className="description">REST API about countries data</div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
