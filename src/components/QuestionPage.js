import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";



class QuestionPage extends Component {

    render() {
        const { id, mode } = this.props

        return (
            <Question id={id} mode={mode}></Question>
        )
    }
}


function mapStateToProps({ questions, authedUser }, props) {


    const { id } = props.match.params
    let mode = null


    if (!questions[id]) {
        mode = 'nofound'
    }
    else {
        const question = questions[id]

        mode = (question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser)) ?
            'result' : 'unanswered'
    }

    return {
        id,
        mode,
    }
}

export default connect(mapStateToProps)(QuestionPage)