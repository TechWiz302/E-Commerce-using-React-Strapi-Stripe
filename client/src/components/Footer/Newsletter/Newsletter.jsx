import React from 'react'
import  { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import "./Newsletter.scss";

function Newsletter() {
  return (
    <>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <span className="small-text">
            Newsletter
          </span>
          <span className="big-text">
            Sign up for latest updates and offers
          </span>
          <div className="form">
            <input type="text" placeholder='Enter Your Email Address' />
            <button type="button">Subscribe</button>
          </div>
          <div className="text-last">
            Will be used accordance to our privacy policy
          </div>
          <div className="social-icons">
            <div className="icon">
              <FaFacebookF size={14} />
            </div>
            <div className="icon">
              <FaInstagram size={14} />
            </div>
            <div className="icon">
              <FaTwitter size={14} />
            </div>
            <div className="icon">
              <FaLinkedinIn size={14} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter