const initialState = {
    cardData : [],
    currentPage : 0
}

const reducer = (state=initialState , action) => {
    switch(action.type){
        case "addCardData":
            return {...state,
                cardData : [...state.cardData , action.payload],
                currentPage : state.currentPage + 1}
            default:
                return state
    }
}

export default reducer