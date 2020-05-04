import React from "react"
import Blogpost1 from "../images/blogpost1.jpg"

const BlogPost = () => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="blog-post">
                <div className="blog-thumb">
                    <img src={Blogpost1} alt="" />
                </div>
                <div className="blog-content">
                    <div className="content-show">
                        <h4><a href="single-post.html">Summer Sandwich</a></h4>
                        <span>29 Sep 2084</span>
                    </div>
                    <div className="content-hide">
                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost