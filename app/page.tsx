import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>NextJS</li>
          <li>CSS</li>
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
          <img src="/ES STUDIO_ VISUAL IDENTITY & WEB DESIGN.jpg" alt="" />
            <div>Lorem ipsum</div>
            <div>Excepteur sint occaecat cupidatat non proident</div>
          </div>
          <div className="project">
          <img src="/ES STUDIO_ VISUAL IDENTITY & WEB DESIGN.jpg" alt="" />
            <div>Lorem ipsum</div>
            <div>Excepteur sint occaecat cupidatat non proident</div>
          </div>
        </div>
      </section>
    </main>
  );
}
