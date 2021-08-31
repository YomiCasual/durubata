import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SEOAnalysisForm from '../components/Common/SEOAnalysisForm';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';

const Services = () => {

    const servicesContent = [
        {
            id: 1,
            title: 'Technology Consulting',
            list: [
                'IT Security',
                'Governance & Compliance',
                'Enterprise Implementation & Integration',
                'Software Consulting',
                'Cloud Services',
                'DevOps and Automation',
                'Agile Remote Developer & Operator',
                'Software Outsourcing'
            ]
        },
        {
            id: 2,
            title: 'Sofware Developments',
            list: [
                'Architecture Centric Approach',
                'Custom Software Development',
                'Liferay Development',
                'Magento Development',
                'AI & Machine Learning',
                'Java, Spring Microservices Development',
                'Enterprise Mobility Solutions',
                'Software Outsourcing',
                'UI/UX Development',
                'Web Development, Mobile First Designs',
                'Mobile Development',
                'Automated Testing & QA',
                'Reverse Engineering'
            ]
        },
        {
            id: 3,
            title: 'Business Continuity and Support',
            list: [
                'Cloud Contact Center & Unified Communication System',
                'E-Learning & Training',
                'Enterprise Implementation & Integration',
                'Managed IT Infrastructure & Support',
                'IT Monitoring',
                'Performance Tuning',
            ]
        },
    ]

    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="Services" 
            /> 

            <div className="overview-area ptb-100">
                <div className="container">
                    {/* section 1 */}
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content">
                                <span className="sub-title">01</span>
                                <h2>{servicesContent[0].title}</h2>
                                <ul className="features-list">
                                    {
                                        servicesContent[0].list.map((item,id) => (
                                            <li key={id}><span><i className='bx bx-check'></i> {item}</span></li>
                                        ))
                                    }
                               
                                </ul>
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/services-img1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                        
                        {/* section two */}
                    <div className="overview-box">
                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/services-img2.png" alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <span className="sub-title">02</span>
                                <h2>{servicesContent[1].title}</h2>
                                <ul className="features-list">
                                    {
                                        servicesContent[1].list.map((item,id) => (
                                            <li key={id}><span><i className='bx bx-check'></i> {item}</span></li>
                                        ))
                                    }
                               
                                </ul>
                            </div>
                        </div>
                    </div>
                        {/* section two */}
                    <div className="overview-box">
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <span className="sub-title">04</span>
                                <h2>{servicesContent[2].title}</h2>
                                <ul className="features-list">
                                    {
                                        servicesContent[2].list.map((item,id) => (
                                            <li key={id}><span><i className='bx bx-check'></i> {item}</span></li>
                                        ))
                                    }
                               
                                </ul>
                            </div>
                        </div>
                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/services-img2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    {/* End of section */}
                </div>
            </div>

            


            <StartProjectWithUs />
			  
			<Footer />
		</>
    )
}

export default Services;