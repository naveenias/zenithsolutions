import React, { useEffect, useState } from 'react';
import Hero from "./Hero";
import WOW from 'wowjs';
import { sendemail } from "../apicalls/email";
import "style.css";
import 'animate.css';

const ContactUs = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

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

    const submitform = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true
        console.log(data);
        try {
            const response = await sendemail(data);
            console.log(response);
            alert(response.message);
        } catch (error) {
            console.error('Error sending mail:', error.message);
        } finally {
            setLoading(false); // Set loading to false after the process
        }
    };

    return (
        <div>
            <Hero heading="Contact Us" page="Contact" link="/contactUs" />
            <div className="container-fluid py-6">
                <div className="container">
                    <div className="mx-auto text-center wow animate__slideInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Contact Us</div>
                        <h2 className="mb-5">If You Have Any Query, Please Feel Free To Contact Us</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 wow animate__slideInUp" data-wow-delay="0.3s">
                            <form onSubmit={submitform}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" onChange={(event) => setname(event.target.value)} />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" onChange={(event) => setemail(event.target.value)} />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" onChange={(event) => setsubject(event.target.value)} />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" onChange={(event) => setmessage(event.target.value)} style={{ height: '150px' }}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" disabled={loading}>
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {loading && <div className="loader">Sending Mail...</div>} {/* Loader component */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;