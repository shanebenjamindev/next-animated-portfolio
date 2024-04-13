"use client";
import Contact from "@/components/Contact/contact";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <div className="h-full bg-black">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, delay:1 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default ContactPage;
