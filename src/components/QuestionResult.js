import React, { Component } from "react"
import { connect } from "react-redux"
import ProgressBar from "react-bootstrap/ProgressBar"


class QuestionResult extends Component {


    render() {

        const { optionOne, optionTwo } = this.props
        const now = 60

        return (
            <div>
                <h4>Results:</h4>

                {/* className={completed ? 'text-strike' : null} */}

                <div className="result-selected-container">
                    <div className="your-vote">Your vote</div>
                    <p>Would you rather {optionOne}?</p>
                    <ProgressBar now={now} label={`${now}%`} />
                    <p className="votes">1 out of 2 votes</p>
                </div>
                <div className="result-container">
                    <p>Would you rather {optionOne}?</p>
                    <ProgressBar now={now} label={`${now}%`} />
                    <p className="votes">1 out of 2 votes</p>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ questions }, { id }) {

    const question = questions[id]

    return {
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text
    }
}

export default connect(mapStateToProps)(QuestionResult)