import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchSessionStatus } from "../actions/fetchSessionStatus"

class UserSessionStatus extends Component {

    componentDidMount() {
        this.props.fetchSessionStatus()
    }

    render() {
        if (isLogged_in) {   
            return (
                <div>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ usersReducer}) => {
    return {
        isLogged_in: usersReducer.isLogged_in,
        user: userReducer.user
    }
}

export default connect(mapStateToProps, { fetchSessionStatus })(UserSessionStatus)