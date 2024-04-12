"use client";
import Hero from "@/components/Hero/hero";
import Preloader from "@/components/Preloader/preloader";
import Projects from "@/components/Projects/projects";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "@/components/Landing/landing";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      {/* 
      <Description />
      <SlidingImages />
      <Contact />  */}
    </main>
  );
}
