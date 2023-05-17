import { faInstagram, faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#212121]">
        <div className="mx-4">
          <h1 className="hero uppercase text-white">
            travel<span className="hero text-[#7AB739]">er</span>
          </h1>
          <p className='text-[]'>
            Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore
            rebum lorem ipsum dolor. No sed vero lorem dolor dolor
          </p>
          <div>
            <h3>follow us</h3>
            <div className='flex'>
                <span className='border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col mr-2'>
                    <FontAwesomeIcon icon={faTwitter} className='text-[#7AB730] text-[0.9rem]'/>
                </span>
                <span className='border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col mr-2'>
                    <FontAwesomeIcon icon={faFacebookF} className='text-[#7AB730] text-[0.9rem]'/>
                </span>
                <span className='border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col mr-2'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='text-[#7AB730] text-[0.9rem]'/>
                </span>
                <span className='border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col'>
                    <FontAwesomeIcon icon={faInstagram} className='text-[#7AB730] text-[0.9rem]'/>
                </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer