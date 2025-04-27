import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="edu-section" data-aos="fade-up">
      <h2>Education</h2>
      <div className="edu-container">

        {/* ESSEC Card */}
        <div className="edu-card">
          <div className="campus-images">
            <div>
              <img src="/assets/education/essec_singapore.jpg" alt="ESSEC Singapore" />
              <p className="campus-label">Year 1 - Singapore</p>
            </div>
            <div>
              <img src="/assets/education/essec_paris.jpg" alt="ESSEC Paris" />
              <p className="campus-label">Year 2 - France</p>
            </div>
          </div>
          <div className="edu-details">
            <h3>ESSEC Business School</h3>
            <p className="degree">Grande École - Master in Management</p>
            <p className="dates">2023 - 2025</p>
            <p className="spec-title">Specialisation:</p>
            <ul>
              <li>Business Management</li>
              <li>ESSEC Beauty Chair (6th cohort)</li>
            </ul>
          </div>
        </div>

        {/* GBPUAT Card */}
        <div className="edu-card">
          <div className="single-campus">
            <img src="/assets/education/gbpuat.jpg" alt="GBPUAT" />
            <p className="campus-label">India</p>
          </div>
          <div className="edu-details">
            <h3>G.B. Pant University of Agriculture and Technology</h3>
            <p className="degree">Bachelor of Technology - Engineering</p>
            <p className="dates">2016 - 2020</p>
            <p className="spec-title">Specialisation:</p>
            <p className="specialisation-text">Electronics and Communication Engineering</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
