"use client";
import Projects from "@/components/Projects/projects";
import { motion } from "framer-motion";
const ProjectPage = () => {
  return (
    <div className="bg-black text-white" >
      <motion.div
        initial={{ opacity: "0" }}
        animate={{ opacity: "1" }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Projects />
      </motion.div>
    </div>
  );
};

export default ProjectPage;
