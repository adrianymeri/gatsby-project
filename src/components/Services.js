import React from "react"
import ServiceItem from "./ServiceItem"
import UnderHeading from "../images/under-heading.png"

const Services = () => {
    return (
        <div id="services">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="heading-section">
                            <h2>Free Website Templates</h2>
                            <img src={UnderHeading} alt="" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                </div>
            </div>
        </div>
    )
}

export default Services