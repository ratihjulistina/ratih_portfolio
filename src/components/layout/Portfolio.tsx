import React from "react";
import ProjectsItem from "../menu/elements/ProjectsItem";

const Portfolio = () => {
  return (
    <div
      className="bg-[rgb(49,51,59)] h-max py-10 border-x-2 border-[#ffc96b] "
      id="Portfolio"
    >
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto mt-10">
        <h1 className="text-5xl font-bold font-serif text-[#f8f7f6]">
          Portfolio
        </h1>
        <div className="w-[100%] h-[40vh] grid grid-cols-3 gap-2 mt-10 justify-center items-center mobile:flex flex-col mobile:h-[100vh]">
          <ProjectsItem title="gojek" />
          <ProjectsItem title="todolist" />
          <ProjectsItem title="todolist" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
