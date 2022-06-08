import React, {useEffect, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getMyCardData } from '../../redux-store/action'
import Card from '../Card'

const YourCard = ({search , clearSearch}) => {
    const owner_id = 2   //My card id
    const storeData = useSelector(state => state.myCardData)

    const [cardData , setCardData] = useState([])
    const dispatch = useDispatch()

    useEffect(() =>{
        setCardData(storeData)
    } , [storeData])

    useEffect(() =>{
        const filterData = storeData.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        setCardData(filterData)
    } , [search])

    useEffect(() => {
        dispatch(getMyCardData(owner_id))    
        return () => {
            clearSearch()
        }
    } , [])
  return (
    <>
    {cardData.map((data , index) =>(
            <Card key={index} data={data}/>
        ))}
    </>
  )
}

export default YourCard