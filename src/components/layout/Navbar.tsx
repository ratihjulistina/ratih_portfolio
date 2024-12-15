"use client";
import React from "react";
import MenuItem from "../menu/elements/MenuItem";
import useScrollPos from "@/hooks/useScrollPos";
import BurgerMenu from "../menu/BurgerMenu";
import Link from "next/link";

function Navbar() {
  const isAtTop2 = useScrollPos();
  return (
    <div
      id="Navbar"
      className={`sticky -mt-14 top-0 z-50 flex flex-row justify-around items-center ${
        isAtTop2
          ? "opacity-100"
          : "opacity-0 hover:opacity-100 transition-opacity duration-500"
      } flex justify-end items-center h-14 w-full `}
      //bg-gradient-to-r from-transparent to-black text-white
    >
      <Link
        className="h-[100%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
        href="/#Hero"
      >
        <img className="object-cover h-[100%]" src="/logo.png" alt="logo" />
      </Link>
      <div className="hidden desktop:flex justify-center text-0.5xl w-3/4 font-poppins text-slate-400 gap-10 mr-10 ">
        <div className=" hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <MenuItem title="About" />
        </div>
        <div className=" hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <MenuItem title="Portfolio" />
        </div>
        <div className=" hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <MenuItem title="Contact" />
        </div>
      </div>
      <BurgerMenu />
    </div>
  );
}

export default Navbar;
