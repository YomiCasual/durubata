import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 5,
    items: 1,
    autoplayTimeout: 20000,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    // Carousel
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    const  carousel = [
        {
            id: 1,
            textOne: 'Sofware Developments',
            caption: 'We like things straightforward and simple.',
            subtitle: 'We believe an intuitive, flexible, well-organized workflow helps to enure project success.',
            buttonText: 'Talk to our Expert',
            image: '/images/durub/banner-one.jpg'
        },
        {
            id: 2,
            textOne: 'Business Continuity and Support',
            caption: 'We strive to embrace and drive change in tech industry.',
            subtitle: 'Great MORDERN Applications that are easy to maintain, on time, on budget. Learn how we can help you',
            buttonText: 'Talk to our Expert',
            image: '/images/durub/banner-two.jpg'
        },
    ]

    return (
        <>
            <div className="home-wrapper-area">
                <div className="container-fluid">
                    {display ? <OwlCarousel 
                        className="home-slides owl-carousel owl-theme"
                        {...options}
                    > 
                    {
                        carousel.map(({textOne, caption, subtitle, buttonText, image},id) => (

                        <div className="single-banner-item" key={id}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <span className="sub-title">{textOne}</span>
                                        <h1>{caption}</h1>
                                        <p>{subtitle}</p>
                                        
                                        <div className="btn-box">
                                            <div className="d-flex align-items-center">
                                                <Link href="/">
                                                    <a className="default-btn">{buttonText}</a>
                                                </Link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src={image} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    
                    </OwlCarousel> : ''}
                </div>

                <div className="shape1"><img src="/images/shape/shape1.png" alt="image" /></div>
                <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
                <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
                <div className="shape4"><img src="/images/shape/shape4.png" alt="image" /></div>
                <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
                <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
                <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
                <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
                <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
                <div className="shape14"><img src="/images/shape/shape14.png" alt="image" /></div>
            </div>

        
        </>
    )
}

export default MainBanner;