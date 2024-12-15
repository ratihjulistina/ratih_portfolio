import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <img
        className="w-[100%] h-44"
        src="transitions/transitions_grey.svg"
        alt="transition"
      />
      <div
        id="Footer"
        className="flex justify-center items-center h-max p-4 text-white"
      >
        Footer
      </div>
    </div>
  );
}

export default Footer;
