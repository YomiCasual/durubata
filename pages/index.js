import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import MainBanner from '../components/HomeDemoTwo/MainBanner';
import FeaturedService from '../components/HomeDemoTwo/FeaturedService';
import AboutSection from '../components/HomeDemoTwo/AboutSection';
import ServicesCard from '../components/Common/ServicesCard';
import WhatWeDo from '../components/Common/WhatWeDo';
import CaseStudies from '../components/Common/CaseStudies';
import Partner from '../components/Common/Partner';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Footer from '../components/_App/Footer';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import RequestQuoteForm from '../components/Common/RequestQuote';
import OurTeamStyleOne from '../components/Common/OurTeamStyleOne';

const Index2 = () => {
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