import { ADD_VOTE } from "../actions/questions";
import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {

    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_VOTE:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    answers: {
                        ...state[action.author].answers,
                        [action.id]: action.vote
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }                
            }
        default:
            return state
    }
}


