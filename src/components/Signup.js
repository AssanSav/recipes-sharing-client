import React, { Component } from 'react';
import { connect } from "react-redux"
import { signupUser } from "../actions/signupUser"



class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.props.signupUser(this.state)
            .then(() => {
                this.props.history.push("/recipes")
        })
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ""
        })
    }


    render() {
        const { email, username, password, password_confirmation } = this.state
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            placeholder="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="username"
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={password_confirmation}
                            onChange={this.handleChange}
                        />
                    </p>
                    <input type="submit" value="Create" />

                </form>

            </div>
        )
    }
}


export default connect(null, { signupUser })(Signup)