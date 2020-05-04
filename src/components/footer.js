// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import RecentPostImg2 from "../images/recent-post2.jpg"
import RecentPostImg1 from "../images/recent-post1.jpg"

const Footer = () => (
    <footer>
        <div className="container">
            <div className="top-footer">
                <div className="row">
                    <div className="col-md-9">
                        <div className="subscribe-form">
                            <span>Get in touch with us</span>
                            <form method="get" className="subscribeForm">
                                <input id="subscribe" type="text" />
                                <input type="submit" id="submitButton" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="social-bottom">
                            <span>Follow us:</span>
                            <ul>
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-rss"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer">
                <div className="row">
                    <div className="col-md-3">
                        <div className="about">
                            <h4 className="footer-title">About Grill</h4>
                            <p>Grill is free HTML5 template by <span className="blue">template</span><span className="green">mo</span> and it is a free responsive bootstrap layout that can be applied for any purpose.
                                    Credit goes to <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for photos used in this template. Nam commodo erat quis ligula placerat viverra.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="shop-list">
                            <h4 className="footer-title">Shop Categories</h4>
                            <ul>
                                <li><a href="#"><i className="fa fa-angle-right"></i>New Grill Menu</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i>Healthy Fresh Juices</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i>Spicy Delicious Meals</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i>Simple Italian Pizzas</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i>Pure Good Yogurts</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i>Ice-cream for kids</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="recent-posts">
                            <h4 className="footer-title">Recent posts</h4>
                            <div className="recent-post">
                                <div className="recent-post-thumb">
                                    <img src={RecentPostImg1} alt="" />
                                </div>
                                <div className="recent-post-info">
                                    <h6><a href="#">Delicious and Healthy Menus</a></h6>
                                    <span>24/12/2084</span>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="recent-post-thumb">
                                    <img src={RecentPostImg2} alt="" />
                                </div>
                                <div className="recent-post-info">
                                    <h6><a href="#">Simple and effective meals</a></h6>
                                    <span>18/12/2084</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="more-info">
                            <h4 className="footer-title">More info</h4>
                            <p>Sed dignissim, diam id molestie faucibus, purus nisl pretium quam, in pulvinar velit massa id elit.</p>
                            <ul>
                                <li><i className="fa fa-phone"></i>010-020-0340</li>
                                <li><i className="fa fa-globe"></i>123 Dagon Studio, Yakin Street, Digital Estate</li>
                                <li><i className="fa fa-envelope"></i><a href="#">info@company.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <p>
                    <span>Copyright © 2084 <a href="#">Your Company Name</a>
                            | Design: <a rel="nofollow" href="http://www.templatemo.com" target="_parent"><span className="blue">template</span><span className="green">mo</span></a></span>
                </p>
            </div>

        </div>
    </footer>
)

export default Footer