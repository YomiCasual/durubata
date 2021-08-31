import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import AboutContentTwo from '../components/AboutUs/AboutContentTwo';
import OurHistory from '../components/AboutUs/OurHistory';
import OurTeamStyleOne from '../components/Common/OurTeamStyleOne';
import Partner from '../components/Common/Partner';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
    return (
        <>
			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="About Us" 
            />  
            
          
            <AboutContentTwo />
            <AboutContent />
           
           

            <OurHistory />


            <Partner />

            <TestimonialStyleOne />
		  
			<Footer />
		</>
    )
}

export default AboutUs;