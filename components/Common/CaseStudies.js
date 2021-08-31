import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));


export const portfolios = [
    {
        id: 1,
        image: '/images/durub/mobile-app.png',
        subtitle: 'MOBILE APP',
        title: 'Banking Mobile App',
        desc: 'We love transforming product ideas to digital realities.',
    },
    {
        id: 2,
        image: '/images/durub/malware.png',
        subtitle: 'IT SECURITY',
        title: 'Protect against malwares',
        desc: 'We love transforming product ideas to digital realities.',
    },
    {
        id: 3,
        image: '/images/durub/summer-class.png',
        subtitle: 'E-LEARNING AND TRAINING',
        title: 'Durubata Summer Class',
        desc: 'We love transforming product ideas to digital realities.',
    },
    {
        id: 4,
        image: '/images/durub/i-tech.png',
        subtitle: 'AI AND MACHINE LEARNING',
        title: 'Durubata I-Tech ',
        desc: 'We love transforming product ideas to digital realities.',
    },
]

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

            <div className="container-fluid">
                {display ? <OwlCarousel 
                    className="portfolio-slides owl-carousel owl-theme"
                    {...options}
                >
                    {
                        portfolios.map(({id, image, subtitle,title, desc}) => (
                    <div className="single-portfolio-item" key={id}>
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

                        ))
                    }

                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default CaseStudies;