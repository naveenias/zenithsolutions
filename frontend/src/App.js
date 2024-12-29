import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Team from './components/Team';
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import TestAnimation from './components/TestAnimation';
import Servicespage from './components/Servicespage';

function App() {
  return (
    <Router>
      
      <Navbar />
     
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/services" element={<Servicespage />} />
          <Route exact path="/testimonial" element={<Testimonial />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
        </Routes>
      <Footer/>
      

    </Router>
  );
}

export default App;
