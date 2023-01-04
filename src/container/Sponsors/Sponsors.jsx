import { motion } from "framer-motion";
import React from "react";
import Image from "../../constants/Image";
import Text from "./../../components/TextHolder/Text";
import "./Sponsors.scss";
const Sponsors = () => {
  return (
    <div className='sponsors'>
      <motion.h3
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.5 }}
      >
        GENERAL SPONSORS
      </motion.h3>
      <div className='sponsors-holder'>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.sponsor1} alt='sponsor' />
          </div>
        </motion.a>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.sponsor2} alt='sponsor' />
          </div>
        </motion.a>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.sponsor3} alt='sponsor' />
          </div>
        </motion.a>
      </div>
      <motion.h3
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.5 }}
      >
        PARTNERS
      </motion.h3>
      <div className='sponsors-holder'>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.partner1} alt='partners' />
          </div>
        </motion.a>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.partner2} alt='partners' />
          </div>
        </motion.a>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.partner3} alt='partners' />
          </div>
        </motion.a>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.partner4} alt='partners' />
          </div>
        </motion.a>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.partner5} alt='partners' />
          </div>
        </motion.a>
        <motion.a
          href='#'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className='logo'>
            <img src={Image.partner6} alt='partners' />
          </div>
        </motion.a>
      </div>
      <Text
        headerFourText={"TICKETS AVAILABLE NOW"}
        paragraph={
          "The biggest event of the year for creatives from all across the country. Be there as the design community comes together."
        }
        btnOne={"Get tickets"}
      />
    </div>
  );
};

export default Sponsors;
