import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class QuestionPreview extends Component {

    render() {
        return (
            <div>
                <h4>Would you rather</h4>
                <span>...{this.props.text}...</span>                
                <Link to={`/questions/${this.props.id}`}>
                    <button className='btn-wouldrather' type='submit'>View Poll</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps({ questions }, { id }) {

    const question = questions[id]

    return {
        id,
        text: question.optionOne.text
    }
}

export default connect(mapStateToProps)(QuestionPreview)