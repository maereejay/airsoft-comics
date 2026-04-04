import React from "react";
import "./Footer.css";
import { FaEnvelope, FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mftr-footer">

      <div className="mftr-container">

        {/* LEFT - BRAND */}
        <div className="mftr-col">
          <div className="mftr-logo">
            <img src="/logo/Airsoft text transparet.png" alt="" />
          </div>

          <p className="mftr-text">
            Your Trusted Comic Book Artists. Welcome to AirSoft. We specialize in
            crafting high-quality comics and illustrations, helping creators
            bring their worlds, characters, and ideas to life.
          </p>
        </div>

        {/* SERVICES */}
        <div className="mftr-col">
          <h3 className="mftr-heading">Services</h3>
          <ul>
            <li>Comic Book Cover</li>
            <li>Character Development</li>
            <li>Character Design</li>
            <li>Storyboarding</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="mftr-col">
          <h3 className="mftr-heading">Contact Us</h3>
 <p className='contactItem'>
        <FaEnvelope className="contactIcon" />
        <a href="mailto:Airsoftstudio01@gmail.com">
          Airsoftstudio01@gmail.com
        </a>
      </p>

      <p className='contactItem'>
        <FaInstagram className="contactIcon" />
        <a
          href="https://www.instagram.com/airsoft__studio?igsh=cWhtMnY5OG40b2xy&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          @airsoft__studio
        </a>
      </p>

      <p className='contactItem'>
        <FaWhatsapp className="contactIcon" />
        <a
          href="https://api.whatsapp.com/send/?phone=447445230599&text=Hello&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat us on WhatsApp
        </a>
      </p>

      <p className='contactItem'>
        <FaTelegramPlane className="contactIcon" />
        <a
          href="https://t.me/Creativeworld03"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat us on Telegram
        </a>
      </p>

        </div>
        

      </div>

      {/* BOTTOM BAR */}
      <div className="mftr-bottom">
        <span>Copyright © 2025 Comic Art Studio.</span>

        <div className="mftr-links">
          <button>Terms of Use</button>
          <button>Privacy Policy</button>
        </div>
      </div>

    </footer>
  );
}