import React, { Component } from "react"
import { connect } from "react-redux"
import { handleAddVote } from "../actions/questions"


class QuestionUnanswered extends Component {

    state = {
        optionSelected: 'optionOne'
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { id } = this.props
        const { optionSelected } = this.state

        console.log(optionSelected)

        this.props.dispatch(handleAddVote({
            id,
            vote: optionSelected,
        }))

    }

    handleChange = (event) => {

        const optionSelected = event.target.value
        this.setState(
            {
                optionSelected: optionSelected
            }
        )
    }

    render() {

        const { optionOne, optionTwo } = this.props

        return (
            <div className="options-would">
                <h4>Would you rather...</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="radio" name="wouldrather" id="option1" value='optionOne' onChange={this.handleChange} defaultChecked ></input>
                        <label htmlFor="option1">{optionOne}</label>
                    </div>
                    <div>
                        <input type="radio" name="wouldrather" id="option2" value='optionTwo' onChange={this.handleChange}></input>
                        <label htmlFor="option2">{optionTwo}</label>
                    </div>
                    <button className='btn-wouldrather' type='submit'>Submit</button>
                </form>
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

export default connect(mapStateToProps)(QuestionUnanswered)