import React from "react";
import ProjectsItem from "../menu/elements/ProjectsItem";

const Portfolio = () => {
  return (
    <div
      className="bg-[rgb(49,51,59)] h-screen pt-20 border-x-2 border-[#ffc96b]  "
      id="Portfolio"
    >
      {/* <img
        className="w-full h-44"
        src="transitions/transitions_gradient.svg"
        alt="transition"
      /> */}
      <div className="w-[80%] flex flex-col justify-center items-center m-auto">
        <h1 className="text-5xl font-bold font-serif text-[#f8f7f6]">
          Portfolio
        </h1>
        <div className="w-[100%] h-[40vh] grid grid-cols-3 gap-2 mt-8 justify-center items-center">
          <ProjectsItem title="gojek" />
          <ProjectsItem title="todolist" />
          <ProjectsItem title="todolist" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
