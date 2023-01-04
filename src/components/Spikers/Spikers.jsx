import { motion } from "framer-motion";
import React from "react";
import "./Spikers.scss";
const Spikers = ({ name, image, job }) => {
  return (
    <motion.div
      className='speakers-holder'
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt='' />
      <div>
        <h4>{name}</h4>
        <p>{job}</p>
      </div>
    </motion.div>
  );
};

export default Spikers;
