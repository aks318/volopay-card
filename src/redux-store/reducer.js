const initialState = {
    cardData : [],
}

const reducer = (state=initialState , action) => {
    switch(action.type){
        case "Add_Card_Data":
            return {...state,
                cardData : [...state.cardData , ...action.payload]}
            default:
                return state
    }
}

export default reducer