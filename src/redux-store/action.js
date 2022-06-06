import axios from "axios"

export const getCardData = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get("http://localhost:8080/cardData")
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
}