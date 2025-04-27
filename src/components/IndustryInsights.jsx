import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './IndustryInsights.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const insightsList = [
  { file: '/assets/insights/Scalp+.pdf', title: 'L\'Oréal Brandstorm 2025', info: '1st Runner Up from France, developing innovative hair growth solution for men suffering from hair thinning and hair loss.' },
  { file: '/assets/insights/Lumi.pdf', title: 'Build Your Own Brand: Case Study', info: "Developed Eyelixir—a sustainable eye care duo with reusable silicone masks and eye cream to address the environmental impact of single-use sheet masks." },
  { file: '/assets/insights/quant.pdf', title: 'Quantitative Marketing Research', info: "Evaluating the impact of personalised advertising on brand perception and consumer purchase intent in retail media." },
  { file: '/assets/insights/LV1.pdf', title: 'Trends in Luxury Industry', info: "Demonstrated product sensibility by identifying and illustrating key luxury trends anticipated for Louis Vuitton in 2025, blending market analysis with creative foresight." }
  ];

function IndustryInsights() {
  const [pages, setPages] = useState({});

  const onDocumentLoadSuccess = (numPages, index) => {
    setPages(prev => ({ ...prev, [index]: { numPages, pageNumber: 1 } }));
  };

  const changePage = (index, direction) => {
    setPages(prev => {
      const current = prev[index];
      const newPage = direction === 'prev'
        ? Math.max(current.pageNumber - 1, 1)
        : Math.min(current.pageNumber + 1, current.numPages);
      return { ...prev, [index]: { ...current, pageNumber: newPage } };
    });
  };

  return (
    <section id="insights" className="insights-section" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="insights-grid">
        {insightsList.map((insight, index) => (
          <div className="insight-card" key={index}>

            <Document
              file={insight.file}
              onLoadSuccess={({ numPages }) => onDocumentLoadSuccess(numPages, index)}
            >
              <div className="pdf-wrapper">
                <Page
                  pageNumber={pages[index]?.pageNumber || 1}
                  width={400}
                  renderMode="canvas"
                />
              </div>
            </Document>
            <div className="nav-buttons">
              <button
                onClick={() => changePage(index, 'prev')}
                disabled={!pages[index] || pages[index].pageNumber === 1}
              >
                &lt;
              </button>
              <button
                onClick={() => changePage(index, 'next')}
                disabled={!pages[index] || pages[index].pageNumber === pages[index].numPages}
              >
                &gt;
              </button>
            </div>
            <div>
              <h3>{insight.title}</h3>
              {insight.info.includes('1st Runner Up') ? (
                <p>
                  <strong>1st Runner Up</strong>
                  {insight.info.replace('1st Runner Up', '')}
                </p>
              ) : (
                <p>{insight.info}</p>
              )}

            </div>
            <a href={insight.file} target="_blank" rel="noreferrer">
              <button className="view-full-btn">View Full PDF</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustryInsights;
