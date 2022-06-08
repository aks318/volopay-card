const initialState = {
    cardData : [],
    myCardData : []
}

const reducer = (state=initialState , action) => {
    switch(action.type){
        case "Add_Card_Data":
            return {...state,
                // cardData : [...state.cardData , ...action.payload]}
                cardData : [...action.payload]}
        case "Add_My_Card_Data":
            return {...state,
                myCardData : [...action.payload]}
        default:
            return state
    }
}

export default reducer