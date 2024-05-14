import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="top">
        <div>Portfolio</div>
        <div>Alejandro Perez</div>
        <div>
          <ul className="social_media">
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>NextJS</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="projects_list">
        <div className="project">
          <div>Image</div>
          <div>Lorem ipsum</div>
          <div>Excepteur sint occaecat cupidatat non proident</div>
        </div>
        <div className="project">
          <div>Image</div>
          <div>Lorem ipsum</div>
          <div>Excepteur sint occaecat cupidatat non proident</div>
        </div>
        <div className="project">
          <div>Image</div>
          <div>Lorem ipsum</div>
          <div>Excepteur sint occaecat cupidatat non proident</div>
        </div>
      </div>
    </main>
  );
}
