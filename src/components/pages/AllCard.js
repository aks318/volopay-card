import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import Card from '../Card'
import { getCardData } from '../../redux-store/action'

const AllCard = () => {
    const cardData = useSelector(state => state.cardData)
    const dispatch = useDispatch()
    const [page , setPage] = useState(1)
    console.log(cardData)

    useEffect(() => {
        dispatch(getCardData(page))
    } , [page])

  return (
    <>
    {cardData.map((data , index) =>(
            <Card key={index} data={data}/>
        ))}
    </>
  )
}

export default AllCard