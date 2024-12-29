import React from 'react';
import "style.css";
import 'animate.css';

const HowWeWork = () => {
    return (
        <div className="container-xxl">
            <div className="container">
                <div className="row g-5 align-items-center wow animate__slideInLeft" data-wow-delay="0.1s" data-wow-offset="0">
                    <div className="col-12 text-center">
                        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">How We Work</div>
                    </div>
                </div>
                <p className="text-center wow animate__slideInUp" data-wow-delay="0.1s" data-wow-offset="0">
                    At Zenith Solutions, we follow a structured approach to ensure that our clients receive the best support possible. Here’s how we operate:
                </p>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow animate__zoomIn" data-wow-delay="0.1s" data-wow-offset="0">
                        <img className="img-fluid" src="/img/hiring.png.jpg" alt="Recruitment" />
                    </div>
                    <div className="col-lg-6 wow animate__slideInUp" data-wow-delay="0.1s" data-wow-offset="0">
                        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Targeted Recruitment</div>
                        <p>
                            We leverage our extensive network and proven recruitment strategies to identify top-tier talent with the specific skills and experience your startup needs.
                        </p>
                    </div>
                </div>
                <div className="row g-5 align-items-center mb-4">
                    <div className="col-lg-6 order-lg-2 wow animate__zoomIn" data-wow-delay="0.1s" data-wow-offset="0">
                        <img className="img-fluid" src="/img/training.jpg" alt="Training" />
                    </div>
                    <div className="col-lg-6 pl-5 order-lg-1 wow animate__slideInUp" data-wow-delay="0.1s" data-wow-offset="0">
                        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Specialized Training</div>
                        <p>
                            We provide customized training programs designed to equip your new hires with the product knowledge, technical expertise, and customer service skills they need to excel in their roles.
                        </p>
                    </div>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow animate__zoomIn" data-wow-delay="0.1s" data-wow-offset="0">
                        <img className="img-fluid" src="/img/manager.jpg" alt="Dedicated Manager" />
                    </div>
                    <div className="col-lg-6 wow animate__slideInUp" data-wow-delay="0.1s" data-wow-offset="0">
                        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Dedicated Manager</div>
                        <p>
                            Each client is assigned a dedicated manager who oversees the entire process, ensuring seamless communication and support. 
                            This manager acts as your primary point of contact, coordinating between your team and our support staff to ensure all needs are met efficiently.
                        </p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default HowWeWork;