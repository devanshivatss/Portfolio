import React from 'react';
import './Certifications.css';

const certificates = [
  { img: '/assets/lvmh.jpeg', title: 'INSIDE LVMH' },
  { img: '/assets/agile.jpeg', title: 'Agile Project Management (JIRA)' },
  { img: '/assets/genai.png', title: 'Generative AI for Digital Marketers' },
  { img: '/assets/marketing.jpeg', title: 'Marketing Foundations' },
];

function Certifications() {
  return (
    <section id="certifications" className="cert-section" data-aos="fade-up">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.img} alt={cert.title} />
            <p><strong>{cert.title}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
