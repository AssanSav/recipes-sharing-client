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
            <NavLink to="/recipes">HomePage</NavLink>
            <br/>
            <NavLink to="/login">Log In</NavLink>
            <br />
            <NavLink to="/signup">Sign Up</NavLink>
            <br />
            {props.isLoggedIn ? <NavLink to="/login" onClick={handleClick}>Logout</NavLink> : null}
            <br /> 
        </div>
    )
}


export default connect(null, { logoutUser })(NavBar)