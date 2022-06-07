import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getCardData } from '../redux-store/action'
import Card from './Card'
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
        {cardData.map((data , index) =>(
            <Card key={index} data={data}/>
        ))}
    </div>
  )
}

export default VolopayCard