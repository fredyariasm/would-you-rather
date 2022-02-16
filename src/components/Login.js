import React, { Component } from "react"
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"
import logo from '../logo.svg'
import { Redirect } from 'react-router-dom'


class Login extends Component {

    state = {
        userId: null
    }

    handleSubmit = (event) => {

        event.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(this.state.userId))
    }

    handleChange = (event) => {

        const userId = event.target.value

        this.setState({
            userId,
        })
    }

    render() {

        const { usersIds, users, authedUser } = this.props


        if (authedUser) {
            return <Redirect to='/' />
        }

        return (


            <form onSubmit={this.handleSubmit}>
                <div className="login-title">
                    <h5>Welcome to the Would Rather App!</h5>
                    <h6>Please sign in to continue</h6>
                </div>
                <div className="login">
                    <img src={logo} className="App-logo" alt="logo" />

                    <select  defaultValue='' name="users" id="users" onChange={this.handleChange}>

                        <option value='' disabled>Select User</option>

                        {usersIds.map((userId) => (
                            <option key={userId} value={userId}>
                                {users[userId].name}
                            </option>))}
                    </select>
                    <button className='btn-wouldrather' type='submit'>Sign In</button>
                </div>
            </form>
        )
    }
}

function mapStateToProps({ users, authedUser }) {

    const usersIds = Object.keys(users)

    console.log(authedUser)


    return {
        authedUser,
        usersIds: usersIds,
        users,
    }

}


export default connect(mapStateToProps)(Login)
