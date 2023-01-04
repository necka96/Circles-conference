import { motion } from "framer-motion";
import React from "react";
import "./Text.scss";
const Text = ({ headerOneText, headerFourText, paragraph, btnOne, btnTwo }) => {
  return (
    <div
      className='app__text'
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 }}
    >
      {headerOneText ? (
        <motion.h2
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          {headerOneText}
        </motion.h2>
      ) : (
        <motion.h4
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          {headerFourText}
        </motion.h4>
      )}
      <motion.p
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.5 }}
      >
        {paragraph}
      </motion.p>
      {btnOne && (
        <motion.div
          className='btn btn-one'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <a href='#'>{btnOne}</a>
        </motion.div>
      )}
      {btnTwo && (
        <motion.div
          className='btn btn-two'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <a href='#'>{btnTwo}</a>
        </motion.div>
      )}
    </div>
  );
};

export default Text;
