import React, { Component } from "react"
import { connect } from "react-redux"
import ProgressBar from "react-bootstrap/ProgressBar"
import { formatResults } from "../utils/helpers"


class QuestionResult extends Component {


    render() {

        const { optionOne,
            optionTwo,
            optionOneVotes,
            optionTwoVotes,
            totalVotes,
            percentageOne,
            percentageTwo,
            myAnswer } = this.props.results


        return (
            <div>
                <h4>Results:</h4>
                <div className={myAnswer === 'one' ? "result-selected-container" : "result-container"} >
                    {myAnswer === 'one' && <div className="your-vote">Your vote</div>}

                    <p>Would you rather {optionOne}?</p>
                    <ProgressBar now={percentageOne} label={`${percentageOne}%`} />
                    <p className="votes">{optionOneVotes} out of {totalVotes} votes</p>
                </div>
                <div className={myAnswer === 'two' ? "result-selected-container" : "result-container"} >
                    {myAnswer === 'two' && <div className="your-vote">Your vote</div>}
                    <p>Would you rather {optionTwo}?</p>
                    <ProgressBar now={percentageTwo} label={`${percentageTwo}%`} />
                    <p className="votes">{optionTwoVotes} out of {totalVotes} votes</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }, { id }) {

    return {
        results: formatResults(questions, id, authedUser)
    }
}

export default connect(mapStateToProps)(QuestionResult)