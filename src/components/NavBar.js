import React from "react"
import { NavLink } from "react-router-dom"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"


function NavBar(props) {

    const handleClick = () => {
        const { logoutUser, isLogged_in, user } = props
        if (isLogged_in) {
            logoutUser(user.id)
        }
    }

    return (
        <div className="nav_bar">
            <ul>
                <li><NavLink to="/recipes">HomePage</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li>{props.isLoggedIn ? <NavLink to="/login" onClick={handleClick}>Logout</NavLink> : null}</li>
                <li><NavLink to="/recipes/new">Create New Recipe</NavLink></li>
            </ul>
        </div>
    )
}


export default connect(null, { logoutUser })(NavBar)