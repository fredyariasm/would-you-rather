export function formatQuestion(question, author) {

    const { id, optionOne, optionTwo} = question
    const { name, avatarURL } = author
    
    return {
        name,
        id,
        optionOne,
        optionTwo,
        avatar : avatarURL
    }

}


export function formatResults(questions, id, authedUser){
    
    const question = questions[id]
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const percentageOne = Math.round(optionOneVotes/totalVotes * 100)
    const percentageTwo = Math.round(optionTwoVotes/totalVotes * 100)
    const myAnswer = question.optionOne.votes.includes(authedUser) ? 'one':'two'

    return {
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text,
        optionOneVotes,
        optionTwoVotes,
        percentageOne,
        percentageTwo,
        totalVotes,
        myAnswer,
    }
}



