import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"


function NavBar(props) {

    const handleClick = () => {
        const { logoutUser, isLoggedIn, user } = props
        if (isLoggedIn) {
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
            {props.isLoggedIn ? <Link to="/login" onClick={(e) => handleClick(e)}>Logout</Link> : null}
            <br /> 
            <Link to="/recipes/new">Create New Recipe</Link> <br/>
        </div>
    )
}

const mapStateToProps = ({ usersReducer }) => {
    const { isLoggedIn, user } = usersReducer
    return {
        isLoggedIn: isLoggedIn,
        user: user
    }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)