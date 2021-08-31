import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const TestimonialStyleOne = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    const testimonials = [
        {
            id: 1,
            testimonial: 'I was very imporessed by the professionalism, customer service and structure of the desingand evaluation process.',
            clientName: 'Nick Jones',
            clientJob: 'Tech. Director Meanbee',
        },
        {
            id: 2,
            testimonial: 'I was very imporessed by the professionalism, customer service and structure of the desingand evaluation process.',
            clientName: 'Abiodun Onisade',
            clientJob: 'Tech. Director Meanbee',
        },
        {
            id: 3,
            testimonial: 'I was very imporessed by the professionalism, customer service and structure of the desingand evaluation process.',
            clientName: 'Tega Saduvwu',
            clientJob: 'Tech. Director Meanbee',
        },
    ]

    return (
        <div className="testimonials-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="testimonials-content">
                            <span className="sub-title">Testimonials</span>
                            <h2>What Our Clients Are Saying?</h2>

                            {display ? <OwlCarousel 
                                className="testimonials-slides owl-carousel owl-theme"
                                {...options}
                            >
                                {
                                    testimonials.map(({id, testimonial, clientName, clientJob}) => (
                                <div className="single-testimonials-item" key={id}>
                                    <p>{testimonial}</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user1.jpg" alt="image" />
                                            <div className="title">
                                                <h3>{clientName}</h3>
                                                <span>{clientJob}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                    ))
                                }

                            </OwlCarousel> : ''}
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="testimonials-image">
                            <img src="/images/durub/testimonial.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialStyleOne;