import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact Me</h2>
      
      <div className="contact-item">
        <img src="/assets/email.png" alt="Email Icon" />
        <a href="mailto:b00809794@essec.edu">b00809794@essec.edu</a>
      </div>
      
      <div className="contact-item">
        <img src="/assets/linkedin.png" alt="LinkedIn Icon" />
        <a href="https://www.linkedin.com/in/devanshi-vats/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
      </div>
      
    </section>
  );
}

export default Contact;
