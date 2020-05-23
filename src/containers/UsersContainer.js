import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../actions/sessionStatus"

class UserSessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        // const {isLoggedIn, user} = this.props
        // if (isLoggedIn) {   
            return (
                <div>
                    {/* <RecipeShow user={user}/> */}
                </div>
            )
        }
    //     else {
    //         return <div></div>
    //     }
    // }
}

const mapStateToProps = ({ usersReducer }) => {
    const {isLoggedIn, user} = usersReducer
    return {
        isLoggedIn: isLoggedIn,
        user: user
    }
}

export default connect(mapStateToProps, { sessionStatus })(UserSessionStatus)