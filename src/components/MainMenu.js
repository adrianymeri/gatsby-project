import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import links from "../constants/links"



const MainMenu = () => {
    return (
        <div className="main-menu">
            <ul>
                {links.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default MainMenu
