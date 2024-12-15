import React from "react";
import SkillItem from "../menu/elements/SkillItem";

function Skills() {
  return (
    <div
      id="Skills"
      className="bg-[rgb(49,51,59)]  h-max border-x-2  border-[#ffc96b] "
    >
      {/* <img
        className="w-full h-44"
        src="transitions/transitions_grey.svg"
        alt="transition"
      /> */}
      <div>
        <div className="flex flex-col justify-center items-center text-[#f8f7f6] w-[80%] m-auto gap-5">
          <h1 className="text-5xl font-bold font-serif">My Skills</h1>
          <div className="w-[100%]  grid grid-cols-4 gap-10 justify-center items-center m-auto">
            <SkillItem icon="html" />
            <SkillItem icon="css" />
            <SkillItem icon="javascript" />
            <SkillItem icon="typescript" />
            <SkillItem icon="react" />
            <SkillItem icon="nextjs" />
            <SkillItem icon="tailwindcss" />
            <SkillItem icon="github" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
