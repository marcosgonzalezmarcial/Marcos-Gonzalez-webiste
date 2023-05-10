"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

import AppWrap from "app/wrapper/AppWrap";
import MotionWrap from "app/wrapper/MotionWrap";
import { Tooltip } from "react-tooltip";

import { getSkills } from "../../../sanity/sanity-utils";
import { getExperiences } from "../../../sanity/sanity-utils";

import globalStyles from "@/styles/globalStyles.module.css";
import skillsStyles from "./Skills.module.css";
import Image from "next/image";

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
                  <Image
                    width={45}
                    height={45}
                    src={skill.imageUrl}
                    alt={skill.name}
                  />
                </div>
                <p className={globalStyles.pText}>{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <div className={skillsStyles.app__skillsExp}>
          {experiences.map((experience) => {
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
                    return (
                      <Fragment key={work._key}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className={skillsStyles.app__skillsExpWork}
                          data-tooltip-content={work.desc}
                          data-tooltip-id={work.name}
                        >
                          <h4 className={globalStyles.boldText}>{work.name}</h4>
                          <p className={globalStyles.pText}>{work.company}</p>
                        </motion.div>

                        <Tooltip
                          id={work.name}
                          content={work.desc}
                          variant="info"
                        />
                      </Fragment>
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
