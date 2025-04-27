import React from 'react';
import './LinkedInPosts.css';

function LinkedInPosts() {
  const posts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7302439154854830080?collapsed=1",
    // "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304779648008085504?collapsed=1",
    // "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7295799283839025152?collapsed=1",
    // "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7291818219546230784?collapsed=1"
  ];

  return (
    <section id="linkedin" className="linkedin-section" data-aos="fade-up">
  <h2>LinkedIn Posts</h2>
  <div className="linkedin-posts-container">
    {posts.map((link, index) => (
      <div className="linkedin-embed" key={index}>
        <iframe 
          src={link}
          allowFullScreen=""
          title={`LinkedIn Post ${index + 1}`}
        ></iframe>
      </div>
    ))}
  </div>
</section>

  );
}

export default LinkedInPosts;
