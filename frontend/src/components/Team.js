import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import Footer from './Footer';
// import { Container, Row, Col, Button } from 'react-bootstrap'; // Use Bootstrap components through react-bootstrap
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
// import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import "style.css"
import 'animate.css';


const TeamMember = ({ name, designation, imgSrc, delay }) => (
  <div className="col-lg-3 col-md-6 wow animate__slideInUp" data-wow-delay={delay}>
    <div className="team-item">
      <h5>{name}</h5>
      <p className="mb-4">{designation}</p>
      <img className="img-fluid rounded-circle w-100 mb-4" src={imgSrc} alt={name} />
      <div className="d-flex justify-content-center">
        <a className="btn btn-square text-primary bg-white m-1" href="#"><i className="fab fa-facebook-f"></i></a>
        <a className="btn btn-square text-primary bg-white m-1" href="#"><i className="fab fa-twitter"></i></a>
        <a className="btn btn-square text-primary bg-white m-1" href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
);

const Team = () => (
  <div className="container-xxl py-6">
    <div className="container">
      <div className="mx-auto text-center wow animate__slideInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
        <h2 className="mb-5">Meet Our Team Members</h2>
      </div>
      <div className="row g-4">
        <TeamMember name="Full Name" designation="Designation" imgSrc="img/team-1.jpg" delay="0.2s"/>
        <TeamMember name="Full Name" designation="Designation" imgSrc="img/team-2.jpg" delay="0.3s"/>
        <TeamMember name="Full Name" designation="Designation" imgSrc="img/team-3.jpg" delay="0.4s"/>
        <TeamMember name="Full Name" designation="Designation" imgSrc="img/team-4.jpg" delay="0.5s"/>
      </div>
    </div>
  </div>
);

const App = () => {
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
  <div className="container-xxl bg-white p-0">
    <Team />
    {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a> */}
  </div>
  )
  };

export default App;
