import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <ul className="navbar flex justify-around py-5">
                <li className="navbar_item"><Link to="/class">Class Component</Link></li>
                <li className="navbar_item"><Link to="/function">Functin Component</Link></li>
                <li className="navbar_item"><Link to="/redux">Function component and redux</Link></li>
                <li className="navbar_item"><Link to="/redux">Function component and redux/immerjs</Link></li>
            </ul>
        </div>
    )
}

export default Header
