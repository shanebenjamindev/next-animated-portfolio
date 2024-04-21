"use client";
import Landing from "@/components/Landing/landing";
import Description from "@/components/Description/description";
import Contact from "@/components/Contact/contact";
import SlidingImages from "@/components/SlidingImages/slidingImages";
import Projects from "@/components/Projects/projects";

export default function Home() {
 
  return (
    <main>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
