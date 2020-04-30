import React from "react"
import TestimonailsContent from "./TestimonailsContent"
import UnderHeading from "../images/under-heading.png"

const Testimonails = () => {
    return (
        <div id="Testimonails">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="heading-section">
                            <h2>What Customers Say</h2>
                            <img src={UnderHeading} alt="" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="testimonails-slider">
                            <ul class="slides">
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