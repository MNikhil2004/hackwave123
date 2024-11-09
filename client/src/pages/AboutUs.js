import React from 'react';
import '../styles/AboutUs.css';  // Make sure this is linked correctly in your project
// import aboutImage from '../assets/about-image.jpg';  // Replace with the actual image path

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our team and mission</p>
      </header>
      
      <section className="company-info">
        <div className="company-info-content">
          <img src='https://imgs.search.brave.com/-_DiL5YW5ADmf3SaHH--i_Nh1HfyDXiOiNTTjbhuEmE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/NjcwMTI0L3Bob3Rv/L2Nvcm4tZmllbGQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUd4UUJ2Mk9WdEU1/MU5OU29DWEVtbVVu/VXBDUVNnU29iOF9R/blA1cDFCdzg9' alt="About Us" className="company-info-image" />
          <div className="company-info-text">
            <h2>Who We Are</h2>
            <p>
              We are a dedicated team focused on providing innovative solutions for agriculture. Our mission is to empower farmers and agricultural professionals with cutting-edge tools that improve productivity and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <div className="value-items">
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We believe in constant innovation to meet the challenges of the agricultural industry.</p>
          </div>
          <div className="value-item">
            <h3>Collaboration</h3>
            <p>Working together with farmers, suppliers, and technology providers to create the best solutions.</p>
          </div>
          <div className="value-item">
            <h3>Sustainability</h3>
            <p>We focus on sustainable practices to ensure long-term success for both farmers and the planet.</p>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div className="contact-item">
            <h3>Mobile</h3>
            <p>(+123) 456-7890</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>sustainableagrico.in</p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Los Angeles</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;