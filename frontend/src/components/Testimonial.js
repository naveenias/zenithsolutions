import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OwlCarousel from 'react-owl-carousel';
import "style.css"; // Ensure this path is correct
import 'animate.css'; // Ensure this path is correct
import "../styles/owl.carousel.css"; // Ensure this path is correct


const Testimonial = () => {
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

  // Testimonials data
  const testimonials = [
    {
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      imgSrc: '/img/testimonial-1.jpg',
      name: 'Client Name 1',
      profession: 'Profession 1',
    },
    {
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      imgSrc: '/img/testimonial-2.jpg',
      name: 'Client Name 2',
      profession: 'Profession 2',
    },
    {
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
      imgSrc: '/img/testimonial-3.jpg',
      name: 'Client Name 3',
      profession: 'Profession 3',
    },
  ];

  // Owl Carousel Options
  const options = {
    loop: true,
    margin: 30,
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    nav: true, // Enable navigation arrows
    navText: [
      '<i class="bi bi-chevron-left borderdesign"></i>', // Left arrow
      '<i class="bi bi-chevron-right borderdesign"></i>', // Right arrow
    ],
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl py-6">
        <div className="container">
          <div
            className="mx-auto text-center wow animate__slideInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '600px' }}
          >
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
              Testimonial
            </div>
            <h2 className="mb-5">What Our Clients Say!</h2>
          </div>
          <OwlCarousel className="testimonial-carousel wow animate__slideInUp" {...options}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item rounded p-4 " key={index}>
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>{testimonial.text}</p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={testimonial.imgSrc}
                    alt={`Client ${index + 1}`}
                  />
                  <div className="ps-3">
                    <h6 className="mb-1">{testimonial.name}</h6>
                    <small>{testimonial.profession}</small>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>

      {/* Back to Top Button */}
      {/* <a href="#" className="btn btn-lg btn-primary btn-lg-circle back-to-top"><i class="bi bi-arrow-up"></i></a> */}
    </div>
  );
};

export default Testimonial;
