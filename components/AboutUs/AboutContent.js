import React from 'react';

const AboutContent = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row">
                 

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">Our Purpse</span>
                                <h2>We believe that technology should always bring about a positive experience.</h2>
                                <p>We believe that people should be able to produce with no limitations. That their problems should be dealt with efficiently to bring rocking results – for now and for the future.
Most people do not understand when they first hear “beautiful IT service” for the first time. After working with us for a while, they all do.</p>

<ul className="features-list">
                                    <li><i className="flaticon-speed"></i> We Produce Pleasant Technology Experience.</li>
                                    <br />
                                    <li><i className="flaticon-speed"></i> We Produce Beautiful Services.</li>
                                    <br />
                                    <li><i className="flaticon-speed"></i> We Produce Rocking Results.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/images/about-img1.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;