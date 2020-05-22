import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchSessionStatus } from "../actions/fetchSessionStatus"

class UserSessionStatus extends Component {

    componentDidMount() {
        this.props.fetchSessionStatus()
    }

    render() {
        if (isLoggedIn) {   
            return (
                <div>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ usersReducer}) => {
    return {
        isLoggedIn: usersReducer.isLogged_in,
        user: userReducer.user
    }
}

export default connect(mapStateToProps, { fetchSessionStatus })(UserSessionStatus)