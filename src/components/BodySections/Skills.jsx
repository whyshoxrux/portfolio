import React from "react";

const Skills = () => {
  return (
      <div
          className="EducationBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
          id="skills"
      >
          <div className="skills-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-amber-400">
              ..// skills
          </div>

          <div className="flex w-9/12 gap-16 justify-center items-center">
              <div className="skill-sec1 flex flex-col text-left gap-5 pt-6 pb-6 pr-10 pl-10 rounded bg-white/10 hover:bg-black/40">
                  <span className="text-3xl font-bold border-b-2 border-amber-400 p-2 text-amber-400">
                      Web Texnologiyalar
                  </span>
                  <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>TailWindCSS</li>
                      <li>NodeJs</li>
                      <li>NestJs</li>
                      <li>ExpressJs</li>
                      <li>Sequelize</li>
                      <li>TypeORM</li>
                  </ul>
              </div>
              <div className="skill-sec2 flex flex-col text-center gap-5 pt-6 pb-6 pr-12 pl-12 rounded bg-white/10 hover:bg-black/40">
                  <span className="text-3xl font-bold border-b-2 border-amber-400 p-2 text-amber-400">
                      Tools
                  </span>
                  <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
                      <li>Github</li>
                      <li>Vite.js</li>
                      <li>Postman</li>
                      <li>Chrome/Firefox Dev Tools</li>
                      <li>Visual Studio Code</li>
                      <li>Linux Ubuntu</li>
                      <li>Docker</li>
                  </ul>
              </div>
              <div className="skill-sec3 flex flex-col text-right gap-5 pt-6 pb-6 pr-10 pl-10 rounded bg-white/10 hover:bg-black/40">
                  <span className="text-3xl font-bold border-b-2 border-amber-400 p-2 text-amber-400">
                      Others
                  </span>
                  <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
                      <li>React Router</li>
                      <li>English (IELTS-6.0)</li>
                      <li>Critical Thinking</li>
                      <li>Multi-tasking</li>
                      <li>Adaptability</li>
                      <li>Sociality</li>
                  </ul>
              </div>
          </div>
      </div>
  );
};

export default Skills;
