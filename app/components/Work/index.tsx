"use client";

import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "app/wrapper/AppWrap";
import MotionWrap from "app/wrapper/MotionWrap";
import { getWorks } from "../../../sanity/sanity-utils";
import workStyles from "./Work.module.css";
import globalStyles from "@/styles/globalStyles.module.css";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });
  console.log(works);
  useEffect(() => {
    const fetchWorks = async () => await getWorks();
    fetchWorks().then((res) => {
      setWorks(res);
      setFilterWork(res);
    });
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className={globalStyles.headText}>
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className={workStyles.app__workFilter}>
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${workStyles.app__workFilterItem} ${
                globalStyles.app__flex
              } ${globalStyles.pText}                                       
              ${activeFilter === item ? "item-active" : ""}`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={workStyles.app__workPortfolio}
      >
        {filterWork.map((work, index) => {
          return (
            <div
              className={`${workStyles.app__workItem} ${globalStyles.app__flex}`}
              key={index}
            >
              <div
                className={`${workStyles.app__workImg} ${globalStyles.app__flex}`}
              >
                <img src={work.imageUrl} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className={`${workStyles.app__workHover} ${globalStyles.app__flex}`}
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={globalStyles.app__flex}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={globalStyles.app__flex}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div
                className={`${workStyles.app__workContent} ${globalStyles.app__flex}`}
              >
                <h4 className={globalStyles.boldText}>{work.title}</h4>
                <p className={globalStyles.pText} style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div
                  className={`${workStyles.app__workTag} ${globalStyles.app__flex}`}
                >
                  <p className={globalStyles.pText}>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, workStyles.app__works),
  "work",
  globalStyles.app__primarybg
);
