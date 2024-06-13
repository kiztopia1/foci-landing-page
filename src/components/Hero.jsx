import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>
          Elevate Customer Satisfaction with the Power of <span>AI Agents</span>
        </h1>
        <p>
          Enhance guest experiences and streamline bookings with our AI agents,
          providing instant, personalized service 24/7.
        </p>
        <a href="">Book a Free Discvery Call Now!</a>
      </div>
      <div className="image">
        <img src="img/hero.png" alt="" />
      </div>
    </div>
  );
}
