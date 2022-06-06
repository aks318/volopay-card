import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getCardData } from '../redux-store/action'
const VolopayCard = () => {
    const cardData = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(cardData)
    useEffect(() => {
        dispatch(getCardData())
    } , [])
  return (
    <div>VolopayCard</div>
  )
}

export default VolopayCard