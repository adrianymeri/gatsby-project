import React from "react"
import Blogpost1 from "../images/blogpost1.jpg"

const BlogPost = () => {
    return (
        <div class="col-md-4 col-sm-6">
            <div class="blog-post">
                <div class="blog-thumb">
                    <img src={Blogpost1} alt="" />
                </div>
                <div class="blog-content">
                    <div class="content-show">
                        <h4><a href="single-post.html">Summer Sandwich</a></h4>
                        <span>29 Sep 2084</span>
                    </div>
                    <div class="content-hide">
                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost