import { ADD_VOTE } from "../actions/questions";
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {

    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        //todo:  change vote by answer
        case ADD_VOTE:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    answers: {
                        ...state[action.author].answers,
                        [action.id] : action.vote
                    }
                }
            }
        default:
            return state
    }
}


