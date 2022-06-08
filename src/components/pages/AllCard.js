import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import Card from '../Card'
import { getCardData } from '../../redux-store/action'

const AllCard = ({search , clearSearch}) => {
    const storeData = useSelector(state => state.cardData)

    const [cardData , setCardData] = useState([])
    const dispatch = useDispatch()
    const [page , setPage] = useState(1)

    useEffect(() =>{
        setCardData(storeData)
    } , [storeData])

    useEffect(() =>{
        const filterData = storeData.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        setCardData(filterData)
    } , [search])

    useEffect(() => {
        dispatch(getCardData(page))         
        return () => {
            clearSearch()
        }
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