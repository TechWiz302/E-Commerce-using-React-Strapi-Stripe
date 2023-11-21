import React from 'react'
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";


function Banner() {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>
            SALES
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tempora cumque odio cupiditate recusandae explicabo numquam, consequuntur laudantium sit quis, id nulla aperiam error odit mollitia excepturi voluptate! Accusantium, similique.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>

          </div>
        </div>
        <img className='banner-img' src={BannerImg} alt="Banner Img" />
      </div>
    </div>
  )
}

export default Banner