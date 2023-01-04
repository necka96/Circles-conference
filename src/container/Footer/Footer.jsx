import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  const handleChande = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  return (
    <div className='app__footer'>
      <motion.div
        className='address'
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p>9575 S Ferriger St. </p>
          <p>Los Angeles, CA</p>
          <p>91203</p>
          <div className='btn'>
            <a href='#'>Get Direction</a>
          </div>
        </div>
        <div>
          <div className='item'>
            <span>Phone</span>
            <a href='tel:568.234.0926'>568.234.0926</a>
          </div>
          <div className='item'>
            <span>GENERAL ENQUIRES</span>
            <a href='mailto:info@conference.com'>info@conference.com</a>
          </div>
          <div className='item'>
            <span>FOR PRESS</span>
            <a href='mailto:press@conference.com'>press@conference.com</a>
          </div>
        </div>
      </motion.div>
      <div className='copyright'>
        <motion.div
          className='form'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p>The best creative news delivered weekly</p>
          </div>
          <div>
            <form>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChande}
                placeholder='mr.madbyte@gmail.com'
              />
              <button>Sing up</button>
            </form>
          </div>
        </motion.div>
        <div className='copyright-holder'>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <p>
              <span>
                Copyright © {date} All rights reserved | This template is made
                with{" "}
              </span>
              <span className='heart'>♥</span> <span>by</span>{" "}
              <a
                href='https://nemanjadjordjevicportfolio.netlify.app'
                rel='noreferrer'
                target='_blank'
              >
                Nemanja Djordjevic
              </a>
            </p>
            <nav>
              <ul>
                <li>
                  <a href='#'>Privacy</a>
                </li>
                <li>
                  {" "}
                  <a href='#'>Terms</a>
                </li>
                <li>
                  {" "}
                  <a href='#'>Press</a>
                </li>
                <li>
                  {" "}
                  <a href='#'>
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaTwitterSquare />
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
