import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import About from './About';
import Service from './Service';
import Team from "./Team"
import Testimonial from './Testimonial';
import Benefits from './Benefits';
import "style.css"
import 'animate.css';

const Home = () => {
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
        <div>
          <div className="container-fluid bg-primary hero-header">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h2 className="text-white mb-4 animated animate__zoomIn">Scale Your Tech Startup Without Breaking the Bank, Expert Remote Support & Sales Teams from India</h2>
                        <p className="text-white pb-3 animated animate__zoomIn">
                        Focus on your core innovation while we handle all the operational aspects of running a business efficiently. From technical support and sales to customer success and back-office tasks, we provide comprehensive solutions that streamline your operations and free up your time to focus on what matters most
                        </p>
                        {/* <a href="/" className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated animate__slideInRight">Learn More</a> */}
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid animated animate__zoomIn" src="img/hero.png" alt="Hero Image" />
                    </div>
                </div>
            </div>
          </div>
          <About/>
          <Service/>
          <Benefits/>
        </div>
        
    );
};

export default Home;
