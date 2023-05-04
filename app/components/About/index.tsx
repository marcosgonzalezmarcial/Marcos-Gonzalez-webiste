"use client";
// import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.module.css";

import AppWrap from "app/wrapper/AppWrap";
import MotionWrap from "app/wrapper/MotionWrap";
import { getAbouts } from "../../../sanity/sanity-utils";

const About = async () => {
  // const [abouts, setAbouts] = useState([]);
  const abouts = await getAbouts();

  console.log(abouts.at(0));

  //   useEffect(() => {
  //     const query = '*[_type == "abouts"]';

  //     client.fetch(query).then((data) => {
  //       setAbouts(data);
  //     });
  //   }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            {about.image && <img src={about.imageUrl} alt={about.title} />}

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
