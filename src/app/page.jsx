"use client";
import Preloader from "@/components/Preloader/preloader";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "@/components/Landing/landing";
import Description from "@/components/Description/description";
import Contact from "@/components/Contact/contact";
import SlidingImages from "@/components/SlidingImages/slidingImages";
import Projects from "@/components/Projects/projects";

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

        <Landing />
        <Description />
        <Projects />
        <SlidingImages />
        <Contact />
      </AnimatePresence>
    </main>
  );
}
