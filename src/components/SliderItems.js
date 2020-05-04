import React from "react"
import Slide1 from "../images/slide1.jpg"

const SliderItems = () => {
    return (
        <li>
            <div className="slider-caption">
                <h1>Delicious Meals</h1>
                <p>Donec justo dui, semper vitae aliquam euzali, ornare pretium enim. Maecenas molestie diam
                eget tellus luctus fermentum.</p>
                <a href="single-post.html">Shop Now</a>
            </div>
            <img src={Slide1} alt="test" className="slider-imgs"/>
        </li>
    )
}

export default SliderItems