import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import "style.css"
import 'animate.css';

const Footer = () => {
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
    <div className="container-fluid text-light footer pt-5 wow animate__fadeIn footerbgcolour" style={{ marginTop: '6rem' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p><i className="fa fa-map-marker-alt me-3 footer_icon"></i>Bangalore, Karnataka, India</p>
            <p><i className="fa fa-phone-alt me-3 footer_icon"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope me-3 footer_icon"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="btn btn-link" href="/">Home</a>
            <a className="btn btn-link" href="/aboutus">About Us</a>
            <a className="btn btn-link" href="/services">Services</a>
            <a className="btn btn-link" href="/contactUs">Contact Us</a>
          </div>
          <div className="col-md-6 col-lg-4">
            <h5 className="text-white mb-4">Our Services</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <i className="fa fa-headset me-2 footer_icon" ></i>
                <span>Customer Support</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fa fa-tools me-2 footer_icon" ></i>
                <span>Technical Support</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fa fa-chart-line me-2 footer_icon" ></i>
                <span>Sales Support</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fa fa-user-tie me-2 footer_icon" ></i>
                <span>Recruitment Services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 ```javascript
            mb-md-0">
              © <a className="border-bottom" href="/">Zenith solutionz</a>, All Right Reserved. Designed By <a className="border-bottom" href="https://www.naveenm.in/">Naveen M</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/aboutus">About</a>
                <a href="/services">Service</a>
                <a href="/contactUs">Contact</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Footer;