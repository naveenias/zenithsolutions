import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import "style.css"
import 'animate.css';

const Hero = ({heading, page, link}) => {
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
    <div className="container-fluid bg-primary page-header display">
      <div className="container text-center">
        <h1 className="text-white animated animate__zoomIn mb-3">{heading}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
            <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
            <li className="breadcrumb-item"><a className="text-white" href={link}>{page}</a></li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Hero;
