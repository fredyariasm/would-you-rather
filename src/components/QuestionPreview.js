import React, { Component } from "react"
import { connect } from "react-redux"


class QuestionPreview extends Component {

    render() {
        return (
            <div>
                <h4>Would you rather</h4>
                <span>...{this.props.text}...</span>
                <button className='btn' type='submit'>View Poll</button>
            </div>
        )
    }
}


function mapStateToProps({ questions }, { id }) {

    const question = questions[id]

    return {
        text: question.optionOne.text
    }
}

export default connect(mapStateToProps)(QuestionPreview)