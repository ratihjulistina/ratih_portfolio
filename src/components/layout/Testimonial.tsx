import TestimonialItem from "@/static/TestimonialItem";
import React from "react";

const Testimonial = () => {
  return (
    <div
      className="bg-[rgb(41,41,51)]  min-h-max border-x-2  border-[#ffc96b] py-20 "
      id="Testimonial"
    >
      {/* <img
        className="w-full h-44"
        src="transitions/transitions_gradient.svg"
        alt="transition"
      /> */}
      <div className="w-[80%] flex flew-row justify-between items-start m-auto mobile:flex-col-reverse mobile:items-center">
        <div className="flex flex-row justify-between items-start w-[100%] mt-10 gap-10 mobile:flex-col mobile:items-center">
          <div className="desktop:flex h-[100%] pt-10 ">
            <TestimonialItem />
          </div>
        </div>
        <div className="text-5xl font-bold font-serif text-[#f8f7f6] ">
          Testimonial
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
