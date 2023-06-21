import React from 'react'
import Nav from '../components/Nav';
import Service from '../components/Service';
import Footer from '../components/Footer';
const Services = () => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <div className="mb-32">
        {/* <AboutMe /> */}
      </div>
      <div className="mb-32">
        <Service/>
      </div>
      <div className="mb-32">
        {/* <Offer /> */}
      </div>
      <div className="mb-24">
        {/* <Guide /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Services