import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, explicabo quod assumenda reiciendis nam voluptas
            atque incidunt laborum in, quidem quis dolore, placeat vero illo
            sequi. Minima hic consequatur officiis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </div>
        <div className="footer-content-right">
          <h2>Get IN TOUCH</h2>
          <ul>
            <li>+91 9876522431</li>
            <li>contact@funfam.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
