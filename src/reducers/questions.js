import { RECEIVE_QUESTIONS ,ADD_VOTE} from "../actions/questions"

export default function questions (state={} , action){

    console.log(state)
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
        default:
            return state            
    }
}