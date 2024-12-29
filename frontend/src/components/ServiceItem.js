// ServiceItem.js
import React from 'react';
import "style.css"
import 'animate.css';

const ServiceItem = ({ icon, title, description }) => (
  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="service-item rounded h-100">
      <div className="d-flex justify-content-between">
        <div className="service-icon">
          <i className={`fa ${icon} fa-2x`}></i>
        </div>
        <a className="service-btn" href="">
          <i className="fa fa-link fa-2x"></i>
        </a>
      </div>
      <div className="p-5">
        <h5 className="mb-3">{title}</h5>
        <span>{description}</span>
      </div>
    </div>
  </div>
);

export default ServiceItem;