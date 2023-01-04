import { motion } from "framer-motion";
import React from "react";
import "./Schedule.scss";
const Schedule = ({ name, program, color }) => {
  return (
    <div className='app__schedule'>
      <motion.h2
        style={{ color: `${color}` }}
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.5 }}
      >
        {name}
        <sup>th</sup>
      </motion.h2>
      <div className='holder'>
        {program.map((item) => (
          <motion.div
            className='holder-item'
            key={Math.random()}
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 0.5 }}
          >
            <p>{item.date}</p>
            <div className='text'>
              <h3>
                {item.title} <br /> <span> {item.text}</span>
              </h3>
            </div>
            <div className='user-holder'>
              {item.imgOne && (
                <div className='user'>
                  <img src={item.imgOne} alt='speaker' />
                </div>
              )}
              {item.imgTwo && (
                <div className='user'>
                  <img src={item.imgTwo} alt='speaker' />
                </div>
              )}
              {item.imgThree && (
                <div className='user'>
                  <img src={item.imgThree} alt='speaker' />
                </div>
              )}
              {item.imgFour && (
                <div className='user'>
                  <img src={item.imgFour} alt='speaker' />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
