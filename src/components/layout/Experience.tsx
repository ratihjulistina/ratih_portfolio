import Timeline from "@/static/Timeline";
import React from "react";

function Experience() {
  return (
    <div
      id="Experience"
      className="bg-[rgb(41,41,51)]  min-h-max py-10 border-x-2  border-[#ffc96b]"
    >
      {/* <img
        className="w-full h-44"
        src="transitions/transitions_grey.svg"
        alt="transition"
      /> */}
      <div className="flex flex-row justify-between items-start w-[80%] h-[100%] m-auto gap-10 mobile:flex-col mobile:items-center">
        <div className="text-5xl font-bold font-serif text-[#f8f7f6]">
          Experience
        </div>
        <div className="desktop:flex w-[70%] h-[100%] flex-col items-end pl-10 pt-10 mobile:pl-0 mobile:w-[60%] ">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Experience;
