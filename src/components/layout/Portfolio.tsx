import React from "react";
import ProjectsItem from "../menu/elements/ProjectsItem";

const Portfolio = () => {
  return (
    <div
      className="bg-[rgb(49,51,59)] min-h-max py-20 border-x-2 border-[#ffc96b] "
      id="Portfolio"
    >
      {/* <img
        className="w-full h-44"
        src="transitions/transitions_gradient.svg"
        alt="transition"
      /> */}
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto mt-10">
        <h1 className="text-5xl font-bold font-serif text-[#f8f7f6]">
          Portfolio
        </h1>
        <div className="w-[100%] h-[100vh] grid grid-cols-3 gap-2 mt-10 justify-center items-center mobile:flex flex-col mobile:h-[200vh]">
          <ProjectsItem title="gojek" />
          <ProjectsItem title="todolist" />
          <ProjectsItem title="portfoliopage" />
          <ProjectsItem title="personalwebsite" />
          <ProjectsItem title="blogpost" />
          <ProjectsItem title="companyprofile" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
