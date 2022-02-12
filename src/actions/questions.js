import { saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_VOTE = 'ADD_VOTE'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addVote({ id, vote, author }) {
    return {
        type: ADD_VOTE,
        id,
        vote,
        author,
    }
}

export function handleAddVote({ id, vote }) {

    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestionAnswer({ authedUser, qid: id, answer: vote })
            .then(() => dispatch(addVote({ id, vote, author:authedUser })))
    }

}