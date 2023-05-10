"use client";
import { motion } from "framer-motion";
import globalStyles from "@/styles/globalStyles.module.css";

type ReturnType = Promise<JSX.Element> | JSX.Element | React.ElementType;

type TypedComponent = {
  Component: <T>() => T;
};

const MotionWrap = (Component: React.Element, classNames: string) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} ${globalStyles.app__flex}`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
