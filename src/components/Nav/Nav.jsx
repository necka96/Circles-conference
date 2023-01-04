import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import "./Nav.scss";
export const Nav = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <nav className='app__menu'>
        <div className='app__logo'>
          <a href='#'>
            <div className='cirlce'></div>
            <div className='triangle'></div>
            <div className='cube'></div>
          </a>
        </div>
        <ul className='app__nav-items'>
          {["conference", "speakers", "venue", "scheldule", "taks"].map(
            (item) => (
              <li className='item' key={Math.random()}>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
        <div className='app__nav-btn'>
          <a href='#'>get tickets</a>
        </div>
        <div className='app__small-screen'>
          <div className={isToggle ? "menu-icon hide" : "menu-icon"}>
            <HiMenu onClick={() => setIsToggle(true)} />
          </div>
          {isToggle && (
            <motion.div
              className='mobile-menu-nav'
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className='close-icon'>
                <IoMdClose onClick={() => setIsToggle(false)} />
              </div>
              <ul className='app__nav-items-mobile'>
                {["conference", "speakers", "venue", "scheldule", "taks"].map(
                  (item) => (
                    <li className='item' key={Math.random()}>
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};
