import { motion } from "framer-motion";
import React, { useState } from "react";
import Spikers from "../../components/Spikers/Spikers";
import Image from "../../constants/Image";
import spikers from "../../spikers";
import Text from "./../../components/TextHolder/Text";
import "./Desain.scss";
const Desain = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className='desain'>
      <Text
        btnOne={"Buy Tickets"}
        btnTwo={"Learn more"}
        headerOneText={"THE FUTURE OF DESIGN"}
        paragraph={
          "Creating perfect color combinations is more than just picking two colors and running with it. There’s actually quite a bit of science and design theory behind it. We’ll help you create a perfect color palette."
        }
      />
      <div className='gallery-container'>
        <motion.div
          className='img-holder '
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/9937411/pexels-photo-9937411.jpeg'
            alt='imgOne'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
        <motion.div
          className='img-holder'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/12119316/pexels-photo-12119316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='imageTwo'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
        <motion.div
          className='img-holder'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/4617762/pexels-photo-4617762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='imageEight'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
        <motion.div
          className='img-holder'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/10015476/pexels-photo-10015476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='imageSeven'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
        <motion.div
          className='img-holder'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/4722305/pexels-photo-4722305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='imageThree'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
        <motion.div
          className='img-holder'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/7587298/pexels-photo-7587298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='imageFour'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
        <motion.div
          className='img-holder'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/10855256/pexels-photo-10855256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='imageFive'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
        <motion.div
          className='img-holder'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.pexels.com/photos/9890649/pexels-photo-9890649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='imageSix'
          />
          <motion.p whileHover={{ opacity: [0, 1], y: [-100, 0] }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            ut cumque architecto suscipit, velit debitis quia. At ab quos animi
            porro magni accusantium quibusdam sed adipisci ea, eaque natus?
          </motion.p>
        </motion.div>
      </div>
      <Text
        headerFourText={"PAST TALKS"}
        paragraph={
          "The biggest event of the year for creatives from all across the country. Be there as the design community comes together."
        }
      />
      <div className='app__blog-container'>
        <motion.div
          className='app__single-blog'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img src={Image.blog1} alt='blogImg' />
          <div className='app__blog-text'>
            <p>
              <span> Tom Wujec: </span> Got a wicked problem? First, tell me how
              you make toast.
            </p>
            <div className='btn'>
              <a href='#'>Read More</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='app__single-blog'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img src={Image.blog2} alt='blogImg' />
          <div className='app__blog-text'>
            <p>
              <span> Noy Thrupkaew: </span> Human trafficking is all around you.
              This is how it works.
            </p>
            <div className='btn'>
              <a href='#'>Read More</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='app__single-blog'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img src={Image.blog3} alt='blogImg' />
          <div className='app__blog-text'>
            <p>
              <span> Bryan Stevenson: </span> We need to talk about an
              injustice.
            </p>
            <div className='btn'>
              <a href='#'>Read More</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={isShow ? "app__single-blog show" : "app__single-blog"}
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.2 }}
        >
          <img src={Image.blog4} alt='blogImg' />
          <div className='app__blog-text'>
            <p>
              <span> Jimmy Guterman:: </span> How information security is
              changing life around us.
            </p>
            <div className='btn'>
              <a href='#'>Read More</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={isShow ? "app__single-blog show" : "app__single-blog"}
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.2 }}
        >
          <img src={Image.blog5} alt='blogImg' />
          <div className='app__blog-text'>
            <p>
              <span> Lisa Dazols: </span> Women at war, women as friends: The
              talks in Session 6.
            </p>
            <div className='btn'>
              <a href='#'>Read More</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={isShow ? "app__single-blog show" : "app__single-blog"}
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.2 }}
        >
          <img src={Image.blog6} alt='blogImg' />
          <div className='app__blog-text'>
            <p>
              <span> Jon Ronson: </span> Strange answers to the psychopath test.
            </p>
            <div className='btn'>
              <a href='#'>Read More</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='toggle__btn'
          onClick={() => setIsShow(!isShow)}
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        >
          {isShow ? <span>Show Less</span> : <span>Show More</span>}
        </motion.div>
      </div>
      <Text
        headerFourText={"EXPO CENTER"}
        paragraph={
          "The biggest event of the year for creatives from all across the country. Be there as the design community comes together."
        }
      />
      <div className='img-holder'>
        <motion.img
          src={Image.conference}
          alt='conference'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={Image.conference2}
          alt='conference'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={Image.conference3}
          alt='conference'
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className='app__speakers'>
        <Text
          headerFourText={"SPEAKERS"}
          paragraph={
            "The biggest event of the year for creatives from all across the country. Be there as the design community comes together."
          }
        />
        <div className='app__speakers-item'>
          {spikers.map((item) => (
            <div key={item.id}>
              <Spikers {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desain;
