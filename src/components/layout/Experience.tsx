import Timeline from "@/static/Timeline";
import React from "react";

function Experience() {
  return (
    <div
      id="Experience"
      className="bg-[rgb(41,41,51)]  h-max border-x-2  border-[#ffc96b] pt-10 "
    >
      {/* <img
        className="w-full h-44"
        src="transitions/transitions_grey.svg"
        alt="transition"
      /> */}
      <div className="flex flex-row justify-between items-start w-[80%] m-auto gap-10">
        <div className="text-5xl font-bold font-serif text-[#f8f7f6] ">
          Experience
        </div>
        <div className="desktop:flex mobile:hidden w-[70%] h-[100%] flex-col items-end pl-10 pt-10">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Experience;
