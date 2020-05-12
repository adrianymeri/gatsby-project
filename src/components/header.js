// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GrillLogo from "../images/logo.png"
import MainMenu from "./MainMenu"

const getImages = graphql`
query Images{
    fixed:file(relativePath:{eq:"logo.png"}){
      childImageSharp{
        fixed(width:137,height:64){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`
const Header = ({ siteTitle }) => {
    const data = useStaticQuery(getImages)
    return (
        <div>
            <header>
                <div id="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="home-account">
                                    <a href="#">Home</a>
                                    <a href="#">My account</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cart-info">
                                    <i className="fa fa-shopping-cart"></i>
                                    (<a href="#">5 items</a>) in your cart (<a href="#">$45.80</a>)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="logo">
                                    <Img fixed={data.fixed.childImageSharp.fixed} />
                                    {/* <img src={GrillLogo} alt="" /> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <MainMenu />
                            </div>
                            <div className="col-md-3">
                                <div className="search-box">
                                    <form name="search_form" method="get" className="search_form">
                                        <input id="search" type="text" />
                                        <input type="submit" id="search-button" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
