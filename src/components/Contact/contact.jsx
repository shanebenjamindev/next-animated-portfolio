import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef, useState } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import emailjs from "emailjs-com";

export default function Contact() {
  const container = useRef(null);

  const form = useRef();

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const [visible, setVisible] = useState(false);

  const handleOk = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zfrjend",
        "template_q6r0u9r",
        form.current,
        "Upxiat5EO1yLQlRQX"
      )
      .then(
        (result) => {
          setSubmitMessage("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          setSubmitMessage("Error sending message. Please try again later.");
          console.log(error.text);
        }
      );
  };

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={`${styles.contactContainer} `}>
        <div className={`${styles.contactTitle}`}>
          <span>
            <div className={`${styles.contactImg}`}>
              <Image
                fill={true}
                alt={"image"}
                src={`/images/projects/background.jpg`}
              />
            </div>
            <h2>
              Let's work <br></br>
            </h2>
          </span>
          <h2>together</h2>
        </div>

        <form ref={form} className={styles.contactForm} onSubmit={handleOk}>
          {/* <motion.div style={{ x }} className={`${styles.buttonContainer}`}>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <Rounded className={`${styles.button}`}>
                  <p>Get in touch</p>
                </Rounded>
              </button>
            </motion.div> */}

          {/* <motion.svg
              style={{ rotate, scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg> */}

          {submitMessage && (
            <p className="text-center">
              {submitMessage}, Thanks for choosing me
            </p>
          )}
          <textarea
            name="message"
            className="form-control"
            rows={6}
            onChange={handleChange}
            placeholder="Message"
            required
          />
        </form>
        {/* <div className={`${styles.nav}`}>
          <Rounded onClick={() => handleCopy("(+84) 834 718 218")}>
            <p>vophonggiang0205@gmail.com</p>
          </Rounded>
          <Rounded onClick={() => handleCopy("(+84) 834 718 218")}>
            <p>(+84) 834 718 218</p>
          </Rounded>
        </div>
        <div className={`${styles.info}`}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2022 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
            <Magnetic>
              <p>Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}