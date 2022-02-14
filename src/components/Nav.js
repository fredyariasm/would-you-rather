import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';


class Nav extends Component {

    render() {

        const { userName , avatar} = this.props

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
                        Hello,  {userName}
                        <img
                            src={avatar}
                            alt={`Avatar of ${userName}`}
                            className='mini-avatar'
                        />
                    </li>
                    <li>
                        Logout
                    </li>
                </ul>
            </nav>
        )
    }
}


function mapStateToProps({ authedUser, users }) {

    return {
        userName: users[authedUser].name,
        avatar: users[authedUser].avatarURL,
    }

}


export default connect(mapStateToProps)(Nav)