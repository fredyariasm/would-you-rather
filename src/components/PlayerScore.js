import React, { Component } from 'react'
import { connect } from 'react-redux'


class PlayerScore extends Component {

    render() {
        const { answers, questions, userName, score, avatar, position } = this.props


        return (
            <div>
                <div className="score-container">

                    <h5>{position}</h5>
                    <img
                        src={avatar}
                        alt={`Avatar of ${userName}`}
                        className='avatar'
                    />

                    <div className='score-player'>                        
                        <h4>{userName}</h4>
                        <div>
                            <span className='score-item'>Answered questions</span>
                            <span className='score-count'>{answers}</span>
                        </div>
                        <div>
                            <span className='score-item'>Created questions</span>
                            <span className='score-count'>{questions}</span>
                        </div>
                    </div>
                    <div className='score-points'>
                        <h6>Score</h6>
                        <p className="score">{score}</p>
                    </div>

                </div>

            </div>
        )
    }

}


function mapStateToProps({ users }, { id, index }) {

    const answers = Object.keys(users[id].answers).length
    const questions = Object.keys(users[id].questions).length
    const score = answers + questions

    return {
        userName: users[id].name,
        avatar: users[id].avatarURL,
        answers,
        questions,
        score,
        position:++index,
    }
}

export default connect(mapStateToProps)(PlayerScore)