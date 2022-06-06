import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getCardData } from '../redux-store/action'
import './VolopayCard.css'

const VolopayCard = () => {
    const cardData = useSelector(state => state.cardData)
    const dispatch = useDispatch()
    const [page , setPage] = useState(1)
    console.log(cardData)

    useEffect(() => {
        dispatch(getCardData(page))
    } , [page])

  return (
    <div className='container'>
        {cardData.map((data) =>(
            <div className='card'>
                <div className='card-top'>
                    <div className='card-owner'>
                        <h4>{data.name}</h4>
                        <p>{data.budget_name}</p>
                    </div>
                    <img src='./images/burner.png'/>
                </div>
                <div className='card-type'>
                    <p>{data.card_type}</p>
                    <p>Expires: {data.expiry}</p>
                </div>
                <div className='spent-bar'>
                    <hr style={{width : `${(data.spent.value/(data.available_to_spend.value + data.spent.value))*100}%` , backgroundColor : "red"}}></hr>
                    <hr style={{width : `${(data.available_to_spend.value/(data.available_to_spend.value + data.spent.value))*100}%` , backgroundColor : "green"}}></hr>
                </div>
            </div>
        ))}
    </div>
  )
}

export default VolopayCard