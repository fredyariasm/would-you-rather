import React, { Component } from "react";
import QuestionList from "./QuestionList";


class QuestionToggle extends Component {

    state = {
        option: 'unanswered',
    }

    handleToggle = (e, option) => {
        e.preventDefault()

        this.setState(
            {
                option
            }
        )

    }
    render() {
        return (
            <div>
                <div className="tab">
                    <button className={"tablinks " + ((this.state.option === 'unanswered') ? 'active' : '')} onClick={(e) => this.handleToggle(e, 'unanswered')}>
                        Unanswered Questions
                    </button>
                    <button className={"tablinks " + ((this.state.option === 'answered') ? 'active' : '')} onClick={(e) => this.handleToggle(e, 'answered')} >
                        Answered Questions
                    </button>
                </div>              
                <QuestionList option={this.state.option}></QuestionList>
            </div>

        )
    }
}

export default QuestionToggle