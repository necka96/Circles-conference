import React from "react";
import { image } from "../../constants";
import { Nav } from "./../../components/Nav/Nav";
import "./Header.scss";
const Header = () => {
  return (
    <header className='header'>
      <Nav />
      <div className='img'>
        <img src={image.mainBg} alt='' />
      </div>
      <div className='text-holder'>
        <h1>
          CIRCLES <br /> CONFERENCE.
        </h1>
        <div className='text'>
          <h3>WHEN</h3>
          <p>SEPTEMBER 28-30 </p>
          <p>19:00</p>
        </div>
        <div className='text'>
          <h3>WHERE</h3>
          <p>UTAH, USA </p>
          <p>South Town Expo Center</p>
        </div>
        <div className='text'>
          <h3>WHO</h3>
          <p>UX/UI DESIGNERS, </p>
          <p>WEB DEVELOPERS</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
