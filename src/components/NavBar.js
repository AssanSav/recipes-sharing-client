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
            <ul>
                <li><Link to="/recipes">HomePage</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li>{props.isLoggedIn ? <Link to="/login" onClick={(e) => handleClick(e)}>Logout</Link> : null}</li>
                <li><Link to="/recipes/new">Create New Recipe</Link> </li>
            </ul>
            
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