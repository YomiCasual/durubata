import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { portfolios } from '../../data';
const OwlCarousel = dynamic(import('react-owl-carousel3'));




const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
};

const CaseStudies = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])


    return (
        <div className="portfolio-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Case Studies</span>
                    <h2>Check Out Some of our Recent Works & Case Studies</h2>
                    <p>We love transforming product ideas to digital realities.</p>
                </div>
            </div>

            <div className="container">
                {display ? <OwlCarousel 
                    className="portfolio-slides owl-carousel owl-theme"
                    {...options}
                >
                    {
                        portfolios.map(({id, image, subtitle,title, desc}) => (
                    <div className="single-portfolio-item" key={id}>
                        <Link href={`/case-studies/${id}`}>
                            <a className="image d-block">
                                <img src={image} alt="image" />
                            </a>
                        </Link>

                        <div className="content">
                        <p className="subtitle">{subtitle}</p>
                            <h3>
                                <Link href="/case-studies">
                                    <a>{title}</a>
                                </Link>
                            </h3>
                        <p className="desc">{desc}</p>

                        <Link href={`/case-studies/${id}`}>
                                <a className="link-btn"><i className="flaticon-next-button"></i></a>
                            </Link>
                        </div>
                    </div>

                        ))
                    }

                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default CaseStudies;