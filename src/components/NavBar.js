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
                <li>
                    <Link to="/recipes">
                        HomePage
                    </Link>
                </li>
                {props.isLoggedIn ? null :
                <li>
                    <Link to="/login">
                        Log In
                    </Link>
                </li>}
                {props.isLoggedIn ? null :
                    <li>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </li>}
                {props.isLoggedIn ?
                    <li>
                        <Link to="/login" onClick={(e) => handleClick(e)} className="logout">
                            Logout
                        </Link>
                    </li> : null}
                {props.isLoggedIn ?
                    <li>
                        <Link to="/recipes/new">
                            Create New Recipe
                            </Link>
                    </li> : null}
            </ul>
        </div>
    )
}


export default connect(null, { logoutUser })(NavBar)