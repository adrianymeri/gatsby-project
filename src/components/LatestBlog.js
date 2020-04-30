import React from "react"
import UnderHeading from "../images/under-heading.png"
import BlogPost from "./BlogPost"

const LatestBlog = () => {
    return (
        <div id="latest-blog">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="heading-section">
                            <h2>Latest blog posts</h2>
                            <img src={UnderHeading} alt="" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </div>
            </div>
        </div>
    )
}

export default LatestBlog