import React from "react"
import UnderHeading from "../images/under-heading.png"
import BlogPost from "./BlogPost"

const LatestBlog = () => {
    return (
        <div id="latest-blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section">
                            <h2>Latest blog posts</h2>
                            <img src={UnderHeading} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
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