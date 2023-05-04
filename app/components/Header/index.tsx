"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { images } from "../../constants";
import header from "./Header.module.css";
import globalStyles from "@/styles/globalStyles.module.css";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <header className={`${header.app__header} ${globalStyles.app__flex}`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={header.app__headerInfo}
      >
        <div className={header.app__headerBadge}>
          <div className={`${header.badgeCmp} ${globalStyles.app__flex}`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={globalStyles.pText}>Hello, I am</p>
              <h1 className={globalStyles.headText}>Micael</h1>
            </div>
          </div>

          <div className={`${header.tagCmp}  ${globalStyles.app__flex}`}>
            <p className={globalStyles.pText}>Web Developer</p>
            <p className={globalStyles.pText}>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={header.app__headerImg}
      >
        <Image
          width={images.profile.width}
          height={images.profile.height}
          src={images.profile.src}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle.src}
          alt="profile_circle"
          className={header.overlayCircle}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={header.app__headerCircles}
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className={`${header.circleCmp} ${globalStyles.app__flex}`}
            key={`circle-${index}`}
          >
            <Image
              width={circle.width}
              height={circle.height}
              src={circle.src}
              alt="profile_bg"
            />
          </div>
        ))}
      </motion.div>
    </header>
  );
}

export default AppWrap(Header, "home", header.homeSectionStyles);
