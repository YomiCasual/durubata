import React from 'react';
import Link from 'next/link';

const FeaturedService = () => {

    const services = [
        {
            id: 1,
            icon: 'flaticon-content',
            title: 'Technology Consulting',
            subtitle: 'We offer full-cycle custom software development services specifically designed for your business.'
        },
        {
            id: 2,
            icon: 'flaticon-link',
            title: 'Sofware Developments',
            subtitle: 'We develop high performant websites, applications, and mobile apps that can help upscale your business and services.'
        },
        {
            id: 3,
            icon: 'flaticon-bar-chart',
            title: 'Business Continuity and Support',
            subtitle: 'We offer high level business ideas and expertise that can grow and widen your business horizon.'
        },
        
    ]
    return (
        <div className="boxes-area pb-70">
            <div className="container">
                <div className="row ">
                    {
                        services.map(({icon, title, subtitle}, id) => (

                    <div className="col-lg-4 col-md-6 col-sm-6" style={{display: 'flex', justifyContent: 'space-evenly'}}  key={id}>
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className={icon}></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>

                            <h3 style={{ flex: '1',}}>
                                <Link href="/single-services">
                                    <a>{title}</a>
                                </Link>
                            </h3>
                            <p>{subtitle}</p>
                            <div  style={{alignSelf: 'flex-end', marginTop: 'auto!important', }}>

                            <Link href="/single-services">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                            </div>
                        </div>
                    </div>
                        ))
                    }

                  

                    {/* <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-email-marketing"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/single-services">
                                    <a>Email Marketing</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/single-services">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FeaturedService;