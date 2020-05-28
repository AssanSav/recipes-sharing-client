import React, { Component } from 'react';
import { connect } from "react-redux"
import { loginUser } from "../actions/loginUser"



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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
        this.props.loginUser(this.state)
        this.setState({
            email: '',
            password: ''
        })
        this.props.history.push("/recipes")
    }


    render() {
        const { email, password } = this.state
        return (
            <div>
                <h1>Log In</h1>

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
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </p>
                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}


export default connect(null, { loginUser })(Login)