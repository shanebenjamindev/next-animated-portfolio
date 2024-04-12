"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import React, { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./Header/header";

export default function TransitionProvider({ children }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#navigator", {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "100px",
        onLeave: () => {
          gsap.to("#navigator", {
            scale: 1,
            duration: 0.25,
          });
        },
        onEnterBack: () => {
          gsap.to("#navigator", {
            scale: 0,
            duration: 0.25,
          });
        },
      },
    });
  }, []);

  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={path} className="">
        {/* <motion.div
          className="fixed h-screen w-screen rounded-t-[100%] z-40 bg-black bottom-0"
          initial={{ opacity: 0, height: "80vh" }}
          exit={{ height: "190vh", opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed m-auto top-0 left-0 right-0 text-white text-8xl bottom-0 z-50 w-fit h-fit"
        >
          .{path.substring(1)}
        </motion.div>

        <motion.div
          className="fixed h-screen w-screen rounded-b-[100%] bg-black top-0 z-40"
          initial={{ height: "200vh" }}
          animate={{
            opacity: 0,
            height: "0vh",
            transition: { duration: 0.5, delay: 1, ease: "easeInOut" },
          }}
        /> */}

        <div className="h-24">
          <Home />
        </div>

        <div className="h-[calc(100dvh - 6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}
