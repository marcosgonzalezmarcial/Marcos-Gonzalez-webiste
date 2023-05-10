"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import config from "../../../sanity/config/client-config";
import { createClient, groq } from "next-sanity";

import AppWrap from "app/wrapper/AppWrap";
import MotionWrap from "app/wrapper/MotionWrap";
import { Tooltip } from "react-tooltip";

import { getSkills } from "../../../sanity/sanity-utils";
import { getExperiences } from "../../../sanity/sanity-utils";

import "react-tooltip/dist/react-tooltip.css";
import globalStyles from "@/styles/globalStyles.module.css";
import skillsStyles from "./Skills.module.css";

async function Skills() {
  const experiences = await getExperiences();
  const skills = await getSkills();

  return (
    <>
      <h2 className={globalStyles.headText}>Skills & Experiences</h2>

      <div className={skillsStyles.app__skillsContainer}>
        <motion.div className={skillsStyles.app__skillsList}>
          {skills.map((skill) => {
            return (
              <motion.div
                key={skill._id}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={`${skillsStyles.app__skillsItem} ${globalStyles.app__flex}`}
              >
                <div
                  className={globalStyles.app__flex}
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.imageUrl} alt={skill.name} />
                </div>
                <p className={globalStyles.pText}>{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <div className={skillsStyles.app__skillsExp}>
          {experiences.map((experience) => {
            // console.log(experience);
            return (
              <motion.div
                className={skillsStyles.app__skillsExpItem}
                key={experience._id}
              >
                <div className={skillsStyles.app__skillsExpYear}>
                  <p className={globalStyles.boldText}>{experience.year}</p>
                </div>
                <motion.div className={skillsStyles.app__skillsExpWorks}>
                  {experience.works.map((work) => {
                    console.log(work);
                    return (
                      <React.Fragment key={work._key}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className={skillsStyles.app__skillsExpWork}
                          data-tooltip-content={work.name}
                          data-tooltip-id={work.name}
                        >
                          <h4 className={globalStyles.boldText}>{work.name}</h4>
                          <p className={globalStyles.pText}>{work.company}</p>
                        </motion.div>
                        {/* <ReactTooltip */}
                        <Tooltip
                          id={work.name}
                          // effect="solid"
                          // arrowColor="#fff"
                          content={work.desc}
                          // className="skills-tooltip"
                          // classNameArrow="skills-tooltip"
                        >
                          {work.name}
                        </Tooltip>
                        {/* </ReactTooltip> */}
                      </React.Fragment>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, skillsStyles.app__skills),
  "skills",
  globalStyles.app__whitebg
);
