import React, { Component } from "react";
import { connect } from "react-redux";
import { sessionStatus } from "../actions/sessionStatus";
import NavBar from "../components/NavBar";

class UserSessionStatus extends Component {
  componentDidMount() {
    this.props.sessionStatus();
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.props.isLoggedIn} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  const { isLoggedIn, user } = usersReducer;
  return {
    isLoggedIn: isLoggedIn,
    user: user,
  };
};

export default connect(mapStateToProps, { sessionStatus })(UserSessionStatus);
