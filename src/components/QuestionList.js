import React, { Component } from 'react'
import { connect } from 'react-redux';
import Question from './Question';


class QuestionList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.questionsIds.map((id) => (

                        <li key={id}>
                            <Question id={id} mode='preview'></Question>
                            <Question id={id} mode='unanswered'></Question>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }, { option }) {


    const answered = Object.keys(questions)
        .filter(key => {
            const answers = Object.keys(users[authedUser].answers)
            return answers.includes(key)
        }).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unanswered = Object.keys(questions)
        .filter(key => {
            const answers = Object.keys(users[authedUser].answers)
            return !answers.includes(key)
        }).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {        
        questionsIds: (option === 'answered') ? answered : unanswered
    }
}

export default connect(mapStateToProps)(QuestionList)



