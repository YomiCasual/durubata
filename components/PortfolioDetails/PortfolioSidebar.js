import React from 'react';

const PortfolioSidebar = () => {
    return (
        <div className="portfolio-sidebar-sticky">
            <div className="portfolio-details-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Client:</span>
                        <a href="https://envytheme.com/" target="_blank">I-robot</a>
                        <a href="#" target="_blank">i-robot.com</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Location:</span>
                        New York, USA
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-purchase-tag'></i>
                        </div>
                        <span>Technologies:</span>
                        React, Redux, Typescript, Nodejs, Postgress
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-check'></i>
                        </div>
                        <span>Completed:</span>
                        28 April 2020
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-globe'></i>
                        </div>
                        <span>Website:</span>
                        <a href="/" target="_blank">i-robot.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PortfolioSidebar;