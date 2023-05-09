"use client";

import { motion } from "framer-motion";
import aboutStyles from "./About.module.css";
import globalStyles from "@/styles/globalStyles.module.css";
import AppWrap from "app/wrapper/AppWrap";
import MotionWrap from "app/wrapper/MotionWrap";
import { getAbouts } from "../../../sanity/sanity-utils";

const About = async () => {
  const abouts = await getAbouts();

  // console.log(abouts);

  return (
    <>
      <h2 className={globalStyles.headText}>
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className={aboutStyles.app__profiles}>
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={aboutStyles.app__profileItem}
            key={about._id}
          >
            {about.image && <img src={about.imageUrl} alt={about.title} />}

            <h2 className={globalStyles.boldText} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={globalStyles.pText} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, aboutStyles.app__about),
  "about",
  globalStyles.app__whitebg
);
