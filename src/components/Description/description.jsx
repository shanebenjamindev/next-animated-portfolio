import styles from "./style.module.scss";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "@/common/RoundedButton";
export default function Description() {
  const phrase =
    "Have 1 year experience in web development, my objective is to leverage to contribute effectively to your team, I am eager to continue my professional growth journey within your esteemed organization.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div className={styles.descriptionContainer}>
      <div ref={description} className={styles.description}>
        <div className={`${styles.body} md:flex`}>
          <p>
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            Can Tho University of Technology
            <br></br>
            09/2018 - 09/2022
            <br></br>A Bachelor of Science (BS)
            <br></br>
            Degree Major: Information Systems
            <br></br>
            CyberSoft Academy
            <br></br>
            02/2023 - 08/2023
          </motion.p>
          <div data-scroll data-scroll-speed={0.1}>
            <div className={styles.button}>
              <Image
                src="/images/projects/avatar.jpg"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="avatar"
              />
            </div>
          </div>
        </div>

        <div>
          <p>
            Tech Stack: Node.js, ReactJS (Redux, React-Router-DOM,...), HTML,
            JavaScript, CSS (SASS), PHP
          </p>
          <p>API Development: RESTful APIs, Express</p>
          <p>Databases: MongoDB, MySQL</p>
          <p>Tools: Figma, WordPress, Git (GitHub, SourceTree)</p>
        </div>
        <div>
          Other:
          <p>Responsive design, UI/UX design </p>
          <p>
            Effective communication, Teamwork Problem solving, Attention to
            Detail
          </p>
          <p>Design pattern, styled-components, clean code, OOP</p>
        </div>
      </div>
    </div>
  );
}
