import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import "style.css"
import 'animate.css';

const Benefits = () => {
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
      <div className="container-xxl bg-white p-0">
  <div className="container-xxl py-6">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-5 wow animate__slideInLeft" data-wow-delay="0.1s">
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Benefits</div>
          <h2 className="mb-4">Benefits of Choosing Zenith Solutions</h2>
          <p>Discover the advantages of partnering with us for your recruitment and support needs.</p>
          <p>
            Zenith Solutions helps tech startups tackle challenges in customer and technical support. Our teams provide quick resolutions to client inquiries, while our sales support drives revenue by engaging prospects. With us, you can focus on your core business as we handle operational challenges, boosting productivity and customer satisfaction.
          </p>
        </div>
        <div className="col-lg-7">
          <section className="benefits mb-5">
            <div className="row">
              <div className="col-sm-6 wow animate__slideInRight mb-3" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-dollar-sign text-white"></i>
                  </div>
                  <h6 className="mb-0">Reduced Hiring Costs</h6>
                </div>
                <span>Save on recruitment fees, office space, and other overhead costs associated with traditional hiring.</span>
              </div>
              <div className="col-sm-6 wow animate__slideInRight mb-3" data-wow-delay="0.4s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-chart-line text-white"></i>
                  </div>
                  <h6 className="mb-0">Increased Productivity</h6>
                </div>
                <span>Benefit from dedicated and trained remote professionals who are focused on delivering results.</span>
              </div> 
              <div className="col-sm-6 wow animate__slideInRight mb-3" data-wow-delay="0.2s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-globe text-white"></i>
                  </div>
                  <h6 className="mb-0">Access to a Global Talent Pool</h6>
                </div>
                <span>Tap into the vast pool of skilled professionals in India.</span>
              </div>
              <div className="col-sm-6 wow animate__slideInRight mb-3" data-wow-delay="0.3s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-clock text-white"></i>
                  </div>
                  <h6 className="mb-0">Faster Time to Hire</h6>
                </div>
                <span>Quickly scale your team with our efficient recruitment process.</span>
              </div>
             
              <div className="col-sm-6 wow animate__slideInRight mb-3" data-wow-delay="0.5s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-briefcase text-white"></i>
                  </div>
                  <h6 className="mb-0">Focus on Your Core Business</h6>
                </div>
                <span>Delegate your recruitment and training needs to us so you can focus on growing your startup.</span>
              </div>
              <div className="col-sm-6 wow animate__slideInRight mb-3" data-wow-delay="0.6s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-headset text-white"></i>
                  </div>
                  <h6 className="mb-0">Comprehensive Technical Support</ h6>
                </div>
                <span>Our trained technical support specialists deliver timely solutions, enhancing customer satisfaction and loyalty.</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div> 
    </div>
  );
};

export default Benefits;
