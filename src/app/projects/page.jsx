"use client";
import Projects from "@/components/Projects/projects";
import { motion } from "framer-motion";
const ProjectPage = () => {
  return (
    <div className="h-full bg-black text-white" style={{ height: "100dvh" }}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Projects />
      </motion.div>
    </div>
  );
};

export default ProjectPage;
