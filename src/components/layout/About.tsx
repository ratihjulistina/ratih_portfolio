import React from "react";

const About = () => {
  return (
    <div
      className="bg-[rgb(49,51,59)] h-screen border-x-2 border-[#ffc96b] mobile:h-max "
      id="About"
    >
      <img
        className="w-full h-44"
        src="transitions/transitions_grey.svg"
        alt="transition"
      />

      <div className="flex flex-col justify-center items-start text-[#292933] w-[70%] m-auto gap-5 pb-10">
        <h1 className="text-5xl font-bold font-serif text-[#f8f7f6]">About</h1>
        <p className="font-poppins text-[#f8f7f6]">
          Coming from an engineering background does not make me stop to learn
          new things. Everything has the same pattern and it is just repeated
          again and again. For that reason, I have chose to become a web
          developer. I am an eager person and a great team partner. Now, I am on
          the way to several core skills, such as,
        </p>
        <span>
          <p className="text-[#ffc96b]">
            Typescript, Javascript, Node.js, Reactjs, Nextjs, tailwind css.
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
