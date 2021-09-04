import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';


const skilss = [
    {
        id: 1, 
        name:  'Technology Consulting',
        skillLevel: 95
    }
]

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content">
                            <span className="sub-title">What We Do</span>
                            <h2>We Create Next Level Technology Experience</h2>
                            <p>Develop results-driven products for entrepreneurs, startups, and enterprises with a leading software development company.</p>
                            
                            {/* <div className="skills-item">
                                <div className="skills-header">
                                    <h4 className="skills-title">Digital Marketing & SEO</h4>
                                    <div className="skills-percentage">
                                        <div className="count-box">95%</div>
                                    </div>
                                </div>
                                <div className="skills-bar">
                                    <div className="bar-inner"><div className="bar progress-line" data-width="95"></div></div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            Clean code
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            Extensive documentation
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            Modern design
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;