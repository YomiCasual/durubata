import React from 'react';

const RequestQuoteForm = () => {
    return (
        <div className="seo-analysis-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-img">
                            <img src="/images/seo-analysis.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-form">
                            <h2>Request A Quote</h2>
                            
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="your_name" placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="your_email" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="phone_number" placeholder="Phone Number" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="website" placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea type="text"
                                                rows={5}
                                             className="form-control" id="website" placeholder="Describe project in short" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="default-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestQuoteForm;