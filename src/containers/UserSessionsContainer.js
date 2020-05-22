import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../actions/sessionStatus"
import NavBar from "../components/NavBar"

class UserSessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        const {isLoggedIn, user} = this.props
        if (isLoggedIn) {   
            return (
                <div>
                    <NavBar isLoggedIn={isLoggedIn} user={user} />
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

const mapStateToProps = ({ usersReducer }) => {
    return {
        isLoggedIn: usersReducer.isLoggedIn,
        user: usersReducer.user
    }
}

export default connect(mapStateToProps, { sessionStatus })(UserSessionStatus)