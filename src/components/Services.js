import React from "react"
import ServiceItem from "./ServiceItem"
import UnderHeading from "../images/under-heading.png"

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section">
                            <h2>Free Website Templates</h2>
                            <img src={UnderHeading} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
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