import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerScore from './PlayerScore'

class LeaderBoard extends Component {

    render() {
        return (
            <div>
                <ol>
                    {this.props.ids.map(
                        (id, index) =>
                            <li key={id}>
                                <PlayerScore id={id} index={index} />
                            </li>
                    )}
                </ol>
            </div>
        )
    }
}

function mapStateToProps({ users }) {

    const ids = Object.keys(users)
        .sort((a, b) => (Object.keys(users[b].answers).length + Object.keys(users[b].questions).length)
            - (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length))

    return {
        ids
    }
}

export default connect(mapStateToProps)(LeaderBoard)

