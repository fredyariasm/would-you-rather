import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
    }


    handleSubmit = (event) =>{

        event.preventDefault()

        const {dispatch, history} = this.props
        const {optionOne, optionTwo} = this.state

        dispatch(handleAddQuestion(optionOne,optionTwo))

        this.setState({
            optionOne: '',
            optionTwo: '',
        })

        history.push('/')
    }

    handleOnChangeOne = (event) => {

        const optionOne = event.target.value

        this.setState(
            {
                optionOne
            }
        )
    }

    handleOnChangeTwo = (event) => {
        const optionTwo = event.target.value

        this.setState(
            {
                optionTwo
            }
        )
    }

    render() {

        const { optionOne, optionTwo } = this.state

        return (

            <div>
                <div className="question-add-title">Create New Question</div>
                <div className="question-add">

                    <h6>Complete the question:</h6>

                    <form onSubmit={this.handleSubmit}>
                        <h4>Would you rather ...</h4>
                        <textarea
                            value={optionOne}
                            className='textarea'
                            placeholder='Enter option one text here...'
                            onChange={this.handleOnChangeOne}>
                        </textarea>
                        <h5>OR</h5>
                        <textarea
                            value={optionTwo}
                            className='textarea'
                            placeholder='Enter option two text here...'
                            onChange={this.handleOnChangeTwo}></textarea>
                        <button                           
                            className='btn-wouldrather'
                            type='submit'                            
                            disabled={optionOne === '' || optionTwo === ''}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        )
    }

}


export default withRouter(connect()(NewQuestion))
