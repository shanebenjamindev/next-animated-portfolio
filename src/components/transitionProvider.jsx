"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header/header";

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
      <div key={path}>
        <motion.div
          className="fixed h-screen w-screen rounded-t-[100%] z-40 bg-white bottom-0"
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
          className="fixed h-screen w-screen rounded-b-[100%] bg-white top-0 z-40"
          initial={{ height: "200vh" }}
          animate={{
            height: "0vh",
            transition: { duration: 0.4, delay: 0.5, ease: "easeInOut" },
          }}
        />
        <Header />
        <div className="h-[calc(100dvh - 6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}
