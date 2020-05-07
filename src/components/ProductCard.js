import React from "react"
import Blogpost1 from "../images/blogpost1.jpg"
import ProductData from "../productdata.json"
import UnderHeading from "../images/under-heading.png"


const ProductCard = () => (

    <div id="products-post">

        <div className="container">
            <div className="col-md-4 col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <div id="product-heading">
                            <h2>Hungry ?</h2>
                            <img src={UnderHeading} alt="" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="filters col-md-12 col-xs-12">
                        <ul id="filters" class="clearfix">
                            <li><span class="filter" data-filter="all">All</span></li>
                            <li><span class="filter" data-filter=".ginger">Ginger</span></li>
                            <li><span class="filter" data-filter=".pizza">Pizza</span></li>
                            <li><span class="filter" data-filter=".pasta">Pasta</span></li>
                            <li><span class="filter" data-filter=".drink">Drink</span></li>
                            <li><span class="filter" data-filter=".hamburger">Hamburger</span></li>
                        </ul>
                    </div>
                </div>
                {ProductData.map((data, index) => {
                    return (
                        <>
                            <div className="blog-post">
                                <div className="blog-thumb">
                                    <img src={Blogpost1} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="content-show">
                                        <h4><a href="single-post.html">{data.name}</a></h4>
                                        <span>{data.price}</span>
                                    </div>
                                    <div className="content-hide">
                                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>

    </div>
)

export default ProductCard