"use client";

import { useState } from "react";
import Image from "next/image";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import navbar from "./Navbar.module.css";
import globalStyles from "@/styles/globalStyles.module.css";

const sections = ["home", "about", "work", "skills", "contact", "test"];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={navbar.app__navbar}>
      <div className={navbar.app__navbarLogo}>
        <Image
          src={images.logo.src}
          width={images.logo.width}
          height={images.logo.height}
          alt="logo"
        />
      </div>
      <ul className={navbar.app__navbarLinks}>
        {sections.map((item) => (
          <li
            className={`${globalStyles.app__flex} ${globalStyles.pText}`}
            key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={navbar.app__navbarMenu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
