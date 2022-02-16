import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';


class Nav extends Component {


    handleLogOut= (event)=>{
        
        event.preventDefault()

        const {dispatch} = this.props

        dispatch(setAuthedUser(null))

    }

    render() {

        const { userName, avatar } = this.props

        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li>
                        {(userName) ? `Hello, ${userName}` : null}

                        {(userName) ?
                            <img
                                src={avatar}
                                alt={`Avatar of ${userName}`}
                                className='mini-avatar'
                            /> : null
                        }

                    </li>
                    <li>
                        {(userName) ? <a href="#" className='logout' onClick={this.handleLogOut}>Log out</a> : null}
                    </li>
                </ul>
            </nav>
        )
    }
}


function mapStateToProps({ authedUser, users }) {

    const userName = (authedUser) ? users[authedUser].name : null
    const avatar = (authedUser) ? users[authedUser].avatarURL : null

    return {
        userName,
        avatar,
    }

}


export default connect(mapStateToProps)(Nav)