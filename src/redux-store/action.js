import axios from "axios"

export const getCardData = (page) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:8080/cardData?_page=${page}`)
            dispatch({
                type : "Add_Card_Data",
                payload : response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}