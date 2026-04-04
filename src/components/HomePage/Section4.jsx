import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Section4.css';
import { FaEnvelope, FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function Section4() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(""); // "", "sending", "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const formData = {
      fullName: e.target[0].value,
      email: e.target[1].value,
      projectName: e.target[2].value,
      mobile: e.target[3].value,
      details: e.target[4].value,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        e.target.reset();
        navigate("/messagesuccess");
      } else {
        setErrorMessage(data.error || "Something went wrong");
        setStatus("error");
      }

    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Network error");
      setStatus("error");
    }
  };

  // auto-hide error after 4s
  useEffect(() => {
    if (status === "error") {
      const timer = setTimeout(() => {
        setStatus("");
        setErrorMessage("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="section4Container" id="contactform">
      <div className="section4">
        <div>
          <h1>Getting in Touch</h1>
          <h3>Do you have a project in mind?</h3>

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

        <form onSubmit={handleSubmit}>
          <div className="formField">
            <label>Full Name</label>
            <input type="text" required />
          </div>

          <div className="formField">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className="formField">
            <label>Project Name</label>
            <input type="text" required />
          </div>

          <div className="formField">
            <label>Mobile</label>
            <input type="tel" required />
          </div>

          <div className="formField full">
            <label>Project Details</label>
            <textarea rows="7" required></textarea>
          </div>

          <button type="submit" className='formField full subtn'>
            Send Message
          </button>
        </form>
      </div>

      {/* Sending Popup */}
      {status === "sending" && (
        <div className="popupOverlay">
          <div className="popupBox sending">
            Sending...
            <div className="spinner"></div>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {status === "error" && (
        <div className="popupOverlay">
          <div className="popupBox error">
            {errorMessage}
          </div>
        </div>
      )}
    </section>
  );
}