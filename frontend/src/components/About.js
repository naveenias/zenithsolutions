import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import "style.css"
import 'animate.css'; 

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Initialize WOW.js only for larger screens
    if (!isMobile) {
      new WOW.WOW({
        live: false, // For performance, only check DOM once
      }).init();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className={`col-lg-6 ${!isMobile ? 'wow animate__zoomIn' : ''}`} data-wow-delay="0.1s" data-wow-offset="0">
            <img className="img-fluid" src="img/about.png" alt="About Us" />
          </div>
          <div className={`col-lg-6 ${!isMobile ? 'wow animate__slideInUp' : ''}`} data-wow-delay="0.1s" data-wow-offset="0">
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">About Us</div>
            <h2 className="mb-4">Zenith Solutions</h2>
            <p className="mb-4">
            Zenith Solutions empowers the next generation of tech professionals by connecting exceptional Indian talent with dynamic global startups. We provide remote opportunities in sales, technical support, and talent acquisition, fostering a culture of growth, learning, and work-life balance. We believe in providing hands-on experience and continuous development, enabling individuals to reach their full potential while contributing to cutting-edge projects. At Zenith Solutions, we're not just building careers; we're shaping the future of tech.
            </p>
            <p className="mb-4">
            While we're a new-stage business, our team brings extensive industry experience in customer success and sales operations. We're now channeling that expertise to empower tech startups worldwide, connecting them with top-tier talent and providing tailored solutions to their operational challenges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;