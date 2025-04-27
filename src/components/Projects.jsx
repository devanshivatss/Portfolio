import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Projects.css';

// Worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// List of projects
const projectList = [
  { file: '/assets/projects/bb.pdf', title: 'Bobby Brown Brand Strategy' },
  { file: '/assets/projects/rise.pdf', title: 'The Rise of Dermaceuticals in Beauty' },
  { file: '/assets/projects/pop.pdf', title: 'Immersive Brand Experiences' }
];

function Projects() {
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
    <section id="projects" className="proj-section" data-aos="fade-up">
      <h2>Industry Insights</h2>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <Document
              file={proj.file}
              onLoadSuccess={({ numPages }) => onDocumentLoadSuccess(numPages, index)}
              loading="Loading PDF..."
            >
              <Page
                pageNumber={pages[index]?.pageNumber || 1}
                width={280}   // Slightly smaller for padding safety
              />

            </Document>
            <div className="nav-buttons">
              <button
                onClick={() => changePage(index, 'prev')}
                disabled={!pages[index] || pages[index].pageNumber === 1}
              >
                &#8592;
              </button>
              <button
                onClick={() => changePage(index, 'next')}
                disabled={!pages[index] || pages[index].pageNumber === pages[index].numPages}
              >
                &#8594;
              </button>
            </div>
            <p>{proj.title}</p>
            <a href={proj.file} target="_blank" rel="noreferrer">
              <button className="view-full-btn">View Full PDF</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
