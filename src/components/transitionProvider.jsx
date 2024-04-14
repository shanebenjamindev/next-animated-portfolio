"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "@/components/Preloader/preloader";

export default function TransitionProvider({ children }) {
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

  const path = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <div key={path}>
          <motion.div
            className="fixed h-full w-full rounded-t-[100%] z-40 bg-white bottom-0"
            initial={{ height: "0vh" }}
            exit={{ height: "200vh" }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed m-auto top-0 left-0 right-0 text-black text-8xl bottom-0 z-50 w-fit h-fit"
          >
            .{path.substring(1)}
          </motion.div>

          <motion.div
            className="fixed h-full w-full rounded-b-[100%] bg-white top-0 z-40"
            initial={{ height: "200vh" }}
            animate={{
              height: "0vh",
              transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
            }}
          />
          <div className="">{children}</div>
        </div>
      </AnimatePresence>
    </>
  );
}
