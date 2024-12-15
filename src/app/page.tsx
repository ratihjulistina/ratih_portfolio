"use client";
import About from "@/components/layout/About";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Skills from "@/components/layout/Skills";
import Portfolio from "@/components/layout/Portfolio";
import { GlobalStateContext } from "@/contexts/GlobalStateContext";
import { useGlobal } from "@/hooks/global.customhooks";
import Experience from "@/components/layout/Experience";
import Testimonial from "@/components/layout/Testimonial";
import Contact from "@/components/layout/Contact";
import Modal from "@/components/layout/Modal";

export default function Home() {
  const {
    isMenuOpen,
    toggleMenu,
    exitMenu,
    isModalOpen,
    toggleModal,
    exitModal,
  } = useGlobal(false);
  return (
    <GlobalStateContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        exitMenu,
        isModalOpen,
        toggleModal,
        exitModal,
      }}
    >
      <Navbar />
      <Modal />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contact />
    </GlobalStateContext.Provider>
  );
}
