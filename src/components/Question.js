import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import QuestionPreview from "./QuestionPreview";
import QuestionUnanswered from "./QuestionUnanswered";
import QuestionResult from "./QuestionResult";
import NoFound from "./NoFound";


class Question extends Component {

    render() {

        if (!this.props.question) {
           return  <NoFound />
        }

        const { id, name, avatar } = this.props.question
        const { mode } = this.props

        let content = null;

        switch (mode) {
            case 'preview':
                content = <QuestionPreview id={id} />;
                break;
            case 'unanswered':
                content = <QuestionUnanswered id={id} />;
                break;
            case 'result':
                content = <QuestionResult id={id} />;
                break;          
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


function mapStateToProps({ authedUser, users, questions }, { id, mode }) {


    const question = (mode !== 'nofound') ?
        formatQuestion(questions[id], users[questions[id].author]) :
        null

    return {
        authedUser,
        mode,
        question: question
    }
}

export default connect(mapStateToProps)(Question)

