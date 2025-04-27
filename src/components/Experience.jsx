import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [showLoreal, setShowLoreal] = useState(false);
  const [showSP3D, setShowSP3D] = useState(false);
  const [showJio, setShowJio] = useState(false);
  const [showESSEC, setShowESSEC] = useState(false);

  return (
    <section id="experience" className="exp-section" data-aos="fade-up">
      <h2>Work Experience</h2>
        {/* ESSEC Beauty Chair */}
      <div className="exp-card">
        <div className="exp-header">
          <img src="/assets/essec.png" alt="ESSEC Logo" className="company-logo" />
          <h3>ESSEC Beauty Chair – Estée Lauder, IFF, Marionnaud</h3>
        </div>
        <p className="role">External Consultant</p>
        <p className="location">📍 France | Jan 2025 – Jun 2025</p>
        <button onClick={() => setShowESSEC(!showESSEC)}>
          {showESSEC ? "Hide Details" : "View Details"}
        </button>
        {showESSEC && (
          <ul>
            <li>Partnered with leading companies to address real-world business challenges via strategic case studies.</li>
  <li>Conducted in-depth market research, competitive analysis, and formulated 360° marketing and GTM strategies.</li>

          </ul>
        )}
      </div>
      {/* L'Oréal */}
      <div className="exp-card">
        <div className="exp-header">
          <img src="/assets/loreal.png" alt="L'Oréal Logo" className="company-logo" />
          <h3>L'Oréal</h3>
        </div>
        <p className="role">Supply Chain and Operations Intern</p>
        <p className="location">📍 Singapore | Jul 2024 – Dec 2024</p>
        <button onClick={() => setShowLoreal(!showLoreal)}>
          {showLoreal ? "Hide Details" : "View Details"}
        </button>
        {showLoreal && (
          <ul>
             <li>Oversee entire order-to-cash process for 5 APAC regions and ensure timely order fulfilment.</li>
  <li>Led cross-functional collaboration across Demand Planning, Customer Care, Commercial, and IT teams to streamline operations and support strategic initiatives.</li>
  <li>Conducted daily out-of-stock simulations (in Excel) to optimize inventory and minimize stockouts.</li>
  <li>Primary POC for daily order processing, collaborating with Regional Warehouse Partner to ensure on-time deliveries across APAC markets.</li>
  <li>Designed and enhanced Power BI dashboards and daily reports to deliver actionable insights to internal and external stakeholders.</li>

          </ul>
        )}
      </div>

      {/* Spare Parts 3D */}
      <div className="exp-card">
        <div className="exp-header">
          <img src="/assets/sp3d.jpeg" alt="SP3D Logo" className="company-logo" />
          <h3>Spare Parts 3D</h3>
        </div>
        <p className="role">Marketing Intern</p>
        <p className="location">📍 Singapore | Feb 2024 – Jun 2024</p>
        <button onClick={() => setShowSP3D(!showSP3D)}>
          {showSP3D ? "Hide Details" : "View Details"}
        </button>
        {showSP3D && (
          <ul>
          <li>Developed B2B marketing strategies and managed lead generation automation tools to optimize customer acquisition and engagement.</li>
  <li>Spearheaded creative content planning for newsletters, articles, and social media to strengthen brand positioning and visibility.</li>
  <li>Coordinated with partner agencies to track KPIs and enhance marketing campaign effectiveness.</li>
</ul>
        )}
      </div>

      {/* Reliance Jio */}
      <div className="exp-card">
        <div className="exp-header">
          <img src="/assets/jio.png" alt="Jio Logo" className="company-logo" />
          <h3>Reliance Jio</h3>
        </div>
        <p className="role">Solution Design Engineer</p>
        <p className="location">📍 India | Dec 2020 – Jul 2023</p>
        <button onClick={() => setShowJio(!showJio)}>
          {showJio ? "Hide Details" : "View Details"}
        </button>
        {showJio && (
          <ul>
            <li>As Junior Project Manager, collaborated with cross-functional teams and external partners to ensure alignment and meet project deadlines smoothly.</li>
  <li>Partnered with Intel R&D on CGNAT App Development, handling logic, analysis, capacity planning, and performance testing, achieving 80% performance improvement.</li>
  <li>Led competitive analysis and conducted detailed research on open-source technologies to provide strategic recommendations and drive innovation.</li>

          </ul>
        )}
      </div>

      

    </section>
  );
}

export default Experience;
