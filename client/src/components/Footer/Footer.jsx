import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div id='footer' className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">
              About
            </div>
            <div className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla asperiores laboriosam, voluptas id error possimus voluptatibus adipisci illo perferendis libero quas minima blanditiis dolores tempore commodi recusandae molestias expedita necessitatibus?
            </div>
          </div>

          <div className="col">
            <div className="title">
              Contact
            </div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">MG Road, Viman Nagar, Pune, Maharashtra - 400614</div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone: +91 1234567890</div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email: demo@gmail.com</div>
            </div>
          </div>

          <div className="col">
            <div className="title">
              Categories
            </div>
            <div className="text">Headphones</div>
            <div className="text">Smartwatches</div>
            <div className="text">Bluetooth Speakers</div>
            <div className="text">Wireless Earbuds</div>
            <div className="text">Home Theatre</div>
            <div className="text">Projectors</div>
          </div>

          <div className="col">
            <div className="title">
              Pages
            </div>
            <div className="text">Home</div>
            <div className="text">About</div>
            <div className="text">Privacy Policy</div>
            <div className="text">Returns</div>
            <div className="text">Terms & Conditions</div>
            <div className="text">Contact Us</div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              SONICSPECTRUM 2023 CREATED BY TECHWIZ302. PREMIUM E - COMMERCE SOLUTIONS
            </div>
            <img src={Payment} alt="Payment" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer