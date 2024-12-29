import React from 'react'
import Hero from "./Hero"
import About from './About'
import HowWeWork from './HowWeWork'

function AboutUs() {
  return (
    <div>
        <Hero heading="About Us" page="About" link="/aboutus" />
        <About/>
        <HowWeWork/>
    </div>
  )
}

export default AboutUs