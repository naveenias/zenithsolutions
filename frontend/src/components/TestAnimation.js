import React from 'react';

// Define the data for services with short descriptions and icons
const servicesData = [
  {
    title: "Targeted Recruitment",
    description: "Find top-tier talent with the right skills and experience for your startup.",
    icon: "bi-person-circle" // Using Bootstrap Icons
  },
  {
    title: "Specialized Training",
    description: "Provide customized training to ensure your hires are ready to excel from day one.",
    icon: "bi-book" // Using Bootstrap Icons
  },
  {
    title: "Focus on Sales Roles",
    description: "Recruit and train sales experts for inside sales, SDRs, and account management roles.",
    icon: "bi-graph-up-arrow" // Using Bootstrap Icons
  },
  {
    title: "Focus on Technical Support Roles",
    description: "Recruit skilled tech support specialists and customer service representatives.",
    icon: "bi-gear" // Using Bootstrap Icons
  },
  {
    title: "Remote-Ready Professionals",
    description: "Find professionals with remote work experience and the tools to thrive remotely.",
    icon: "bi-laptop" // Using Bootstrap Icons
  },
  {
    title: "Ongoing Support",
    description: "Ensure smooth onboarding and long-term success with our ongoing support.",
    icon: "bi-headset" // Using Bootstrap Icons
  }
];

const Service = () => {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="mx-auto text-center" style={{ maxWidth: '600px' }}>
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">What We Offer</div>
          <h2 className="mb-5">Our Services</h2>
        </div>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-item rounded h-100">
                <div className="p-5 text-center">
                  <i className={`bi ${service.icon} mb-4`} style={{ fontSize: '40px', color: '#007bff' }}></i>
                  <h5 className="mb-3">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
