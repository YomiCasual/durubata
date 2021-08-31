import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { portfolios } from '../components/Common/CaseStudies';

const CaseStudies = () => {
    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="Case Studies" 
            />  
			
            <div className="portfolio-area ptb-100">
                <div className="container">
                    <div className="row">
                        {
                            portfolios.map(({id, image, subtitle, title, desc}) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                                <div className="single-portfolio-box">
                                    <Link href="/single-portfolio">
                                        <a className="image d-block">
                                            <img src={image} alt="image" />
                                        </a>
                                    </Link>
            
                                    <div className="content">
                                        <p className="subtitle">{subtitle}</p>
                                        <h3>
                                            <Link href="/single-portfolio">
                                                <a>{title}</a>
                                            </Link>
                                        </h3>
                                        <p className="desc">{desc}</p>
    
                                        <Link href="/single-portfolio">
                                            <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                      
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default CaseStudies;