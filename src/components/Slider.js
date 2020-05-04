import React from "react"
import SliderItems from "./SliderItems"


const Slider = () => {
  return (
    <div id="slider">
      <div class="flexslider">
        <ul class="slides">
          <SliderItems />
          {/* <SliderItems />
          <SliderItems /> */}
        </ul>
      </div>
    </div>
  )
}

export default Slider