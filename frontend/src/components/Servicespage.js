import React from 'react'
import Hero from './Hero';
import Service from './Service';
import HowWeWork from './HowWeWork';
import Benefits from './Benefits';
import "style.css"
import 'animate.css';



function Servicespage() {
  return (
    <div>
        <Hero heading="Services" page="Services" link="/services" />
        <Service/>
        <HowWeWork/>
        <Benefits/>
    </div>
  )
}

export default Servicespage