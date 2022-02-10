import React, { Component } from "react"
import { connect } from "react-redux"


class QuestionUnanswered extends Component {

    state = {
        optionSelected: ''
    }


    handleSubmit = (event) => {
        event.preventDefault()

       
    }

    handleChange = (event) => {        
        const optionSelected = event.target.value
        this.setState(
            {
                optionSelected: optionSelected
            }
        )
        console.log(event.target.value)
    }

    render() {

        const { optionOne, optionTwo } = this.props

        return (
            <div>
                <h4>Would you rather...</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="radio" name="wouldrather" id="option1" value={optionOne} onChange={this.handleChange}></input>
                        <label htmlFor="option1">{optionOne}</label>
                    </div>
                    <div>
                        <input type="radio" name="wouldrather" id="option2" value={optionTwo} onChange={this.handleChange}></input>
                        <label htmlFor="option2">{optionTwo}</label>
                    </div>
                    <button className='btn-wouldrather' type='submit' value="Submit">Submit</button>
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