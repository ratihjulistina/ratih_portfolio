import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";

import React from "react";

function Hero() {
  return (
    <div
      id="Hero"
      //className="flex items-center h-screen px-20 bg-gradient-to-r from-gradientLeft to-gradientRight"
      className="flex items-center h-screen bg-[rgb(41,41,51)] border-x-2 border-t-2 border-[#ffc96b] mobile:h-max "
    >
      <div className=" w-full flex justify-center items-center ml-20 px-10 mobile:flex-col-reverse mobile:ml-0 pt-20">
        <div className="flex flex-col z-20 pointer-events-none text-white w-3/5 mobile:bg-[rgb(41,41,51)] mt-10 mobile:w-[100%] px-5 justify-center items-end m-auto mobile:pt-10">
          <p className="text-[3vw] font-bold text-left w-full font-poppins mobile:text-[4vw]">
            I&apos;M{" "}
            <span className="font-serif text-[4vw] text-[#ffc96b] mobile:text-[5vw] ">
              Ratih Julistina
            </span>
          </p>
          <p className="text-[3vw] w-full font-poppins text-left mobile:text-[4vw]">
            a full-stack web developer with
            <Typing />
          </p>
          <div className="mt-10 w-[17vw] mobile:mt-0">
            <div className=" font-poppins text-[rgb(41,41,51)] font-medium  rounded-md m-auto px-3 py-2  ">
              <SocialMedia size={50} />
            </div>
          </div>
        </div>
        <div className="w-96 h-96 bg-yellow-400 rounded-full mobile:p-5">
          <img
            className="object-cover self-center border border-transparent rounded-full grayscale grayscale-0]"
            src="profil.png"
            alt="potrait"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
