import { RECEIVE_QUESTIONS ,ADD_VOTE, ADD_QUESTION} from "../actions/questions"

export default function questions (state={} , action){

    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions 
            }            
        case ADD_VOTE:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.vote] : {
                        ...state[action.id][action.vote],
                        votes: state[action.id][action.vote].votes.concat(action.author)
                    }
                }                
            }
        case ADD_QUESTION:
            return {
                ...state, 
                [action.question.id]: action.question
            }                
        default:
            return state            
    }
}