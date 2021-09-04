import { useRef } from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import MainBanner from '../components/HomeDemoTwo/MainBanner';
import FeaturedService from '../components/HomeDemoTwo/FeaturedService';
import WhatWeDo from '../components/Common/WhatWeDo';
import CaseStudies from '../components/Common/CaseStudies';
import Partner from '../components/Common/Partner';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Footer from '../components/_App/Footer';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import RequestQuoteForm from '../components/Common/RequestQuote';

const Index2 = () => {

    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()   
    
    return (
        <>
            <NavbarStyleTwo />

            <MainBanner />

            <FeaturedService />

            <CaseStudies />
            <TestimonialStyleOne />

            <Partner />

            <RequestQuoteForm />

            {/* <AboutSection /> */}

            {/* <ServicesCard /> */}

            <WhatWeDo />




            <OurTeamStyleTwo />

            {/* <Pricing /> */}

            <StartProjectWithUs />

            <LatestBlogPost />
            
            <Footer />
        </>
    )
}

export default Index2;