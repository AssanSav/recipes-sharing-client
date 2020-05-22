import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../actions/sessionStatus"

class UserSessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        const {isLoggedIn, user} = this.props
        if (isLoggedIn) {   
            return (
                <div>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ usersReducer }) => {
    debugger
    return {
        isLoggedIn: usersReducer.isLoggedIn,
        user: usersReducer.user
    }
}

export default connect(mapStateToProps, { sessionStatus })(UserSessionStatus)