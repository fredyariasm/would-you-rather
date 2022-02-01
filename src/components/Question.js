import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import QuestionPreview from "./QuestionPreview";

class Question extends Component {

    render() {

        const { id,name, avatar } = this.props.question
        const { mode } = this.props
        
        let content = null;

        switch (mode) {
            case 'preview':                
                content = <QuestionPreview id={id}/>;
            default:
                break;
        }

        return (

            <div>
                <div className="question-title">{name} asks:</div>
                <div className="question">
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                    {content}                    
                </div>

            </div>

        )
    }
}


function mapStateToProps({ authedUser, users, questions }, {id, mode}) {

    const question = questions[id]

    return {
        authedUser,
        mode,
        question: formatQuestion(question, users[question.author])
    }
}

export default connect(mapStateToProps)(Question)

