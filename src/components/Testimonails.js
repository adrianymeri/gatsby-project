import React from "react"
import TestimonailsContent from "./TestimonailsContent"
import UnderHeading from "../images/under-heading.png"

const Testimonails = () => {
    return (
        <div id="Testimonails">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section">
                            <h2>What Customers Say</h2>
                            <img src={UnderHeading} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="testimonails-slider">
                            <ul className="slides">
                                <TestimonailsContent />
                                <TestimonailsContent />
                                <TestimonailsContent />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonails