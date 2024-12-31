// Services.js
import React from 'react';
import "style.css"
import 'animate.css';

const services = [
  {
    icon: "fa-user-tie",
    title: "Customer Support",
    description: "We provide empathetic and resourceful customer support representatives who can address inquiries and ensure a positive customer experience.",
    delay: "0.1s"
  },
  {
    icon: "fa-tools",
    title: "Technical Support",
    description: "Our technical support specialists are trained to provide timely and effective solutions to customer issues, ensuring smooth operations.",
    delay: "0.2s"
  },
  {
    icon: "fa-chart-line",
    title: "Sales Support",
    description: "We recruit and train skilled sales representatives who can generate leads, qualify prospects, and close deals remotely.",
    delay: "0.3s"
  },
];

const Services = () => (
  <div className='container-xxl py-6'>
  <header className="text-center mb-5 ml-5  wow animate__slideInUp" data-wow-delay="0.1s" data-wow-offset="0">
     <h1 className='mb-5'>Zenith solutionz - Your Partner in Growth</h1>
        <p>
          Is your tech startup ready to scale but struggling to find the right support talent? 
          Zenith solutionz specializes in connecting innovative startups like yours with highly skilled remote professionals from India. 
          We provide comprehensive solutions that include Customer Support, Technical Support, and Sales Support to ensure your success.
        </p>
  </header>
 
  <section className="services mb-5">
    <div className="row g-5 align-items-center wow animate__slideInLeft" data-wow-delay="0.1s" data-wow-offset="0">
      <div className="col-12 text-center">
        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Services</div>
        </div>
    </div>
    <div className="row g-4">
    {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 wow animate__slideInUp" data-wow-delay={service.delay} key={index}>
              <div className="service-item rounded h-100">
                <div className="p-5 text-center">
                  <i className={`fa ${service.icon} fa-2x mb-4`} style={{ fontSize: '40px', color: '#007bff' }}></i>
                  <h5 className="mb-3">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
    </div>
  </section>
  
</div>
);

export default Services;