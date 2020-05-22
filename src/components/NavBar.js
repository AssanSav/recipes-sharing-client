import React from "react"
import { Link } from "react-router-dom"
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
            <Link to="/recipes">HomePage</Link>
            <br/>
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/signup">Sign Up</Link>
            <br />
            {props.isLoggedIn ? <Link to="/login" onClick={handleClick}>Logout</Link> : null}
            <br /> 
        </div>
    )
}

const mapStateToProps = ({ usersReducer }) => {
    return {
        isLoggedIn: usersReducer.isLoggedIn,
        user: usersReducer.user
    }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)