import React from 'react';
import './Home.css';
import resume from '../assets/resume.pdf';
import './Contact.css';

function Home() {
  return (
    <section id="home" className="home-section" data-aos="fade-up">
      <br></br>
      <div className="home-container">
        <div className="home-left">
          <h1>Devanshi Vats</h1>
          <p className="tagline">From Tech to Beauty: Reshaping products and processes.</p>

          <div className="highlight-btns">
            <span>CROSS-INDUSTRY EXPERIENCE</span>
          </div>
          <p className="short-desc">
           Across Marketing, Technology, and Supply Chain Operations —<br/>
            Bringing Adaptable, 360° approach to solving business challenges.
          </p>

          <div className="highlight-btns">
            <span>GLOBAL EXPOSURE</span>
          </div>

          <div className="city-icons">
            <div>
              <img src="/assets/paris.png" alt="Paris"/>
              <p>PARIS</p>
            </div>
            <div>
              <img src="/assets/sing.png" alt="Singapore"/>
              <p>SINGAPORE</p>
            </div>
            <div>
              <img src="/assets/ind.png" alt="India"/>
              <p>INDIA</p>
            </div>
          </div>
        </div>

        <div className="home-right">
          <img src="/assets/profile1.png" alt="Devanshi Vats" className="profile-ellipse"/>
          <a href={resume} download="Devanshi_Vats_CV.pdf">
            <button className="download-cv-btn">DOWNLOAD CV</button>
          </a>
          <br></br>
          <div className="contact-item">
        <img src="/assets/email.png" alt="Email Icon" />
        <a href="mailto:b00809794@essec.edu">b00809794@essec.edu</a>
      
      
      
        <img src="/assets/linkedin.png" alt="LinkedIn Icon" />
        <a href="https://www.linkedin.com/in/devanshi-vats/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
