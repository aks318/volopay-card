import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card'>
        <div className='card-top'>
            <div className='card-owner'>
                <h4>{data.name}</h4>
                <p>{data.budget_name}</p>
            </div>
            <img src={data.card_type === 'burner' ? './images/burner.png' : './images/subscription.png'}/>
        </div>
        <div className='card-type'>
            <p>{data.card_type}</p>
            {data.card_type === 'burner' ? <p>Expires: {data.expiry}</p> : <p>{data.expiry.split(" ")[1].toUpperCase()} Limit: {data.limit}</p>}
        </div>
        <div className='spent-bar'>
            <hr style={{width : `${(data.spent.value/(data.available_to_spend.value + data.spent.value))*100}%` , backgroundColor : "red"}}></hr>
            <hr style={{width : `${(data.available_to_spend.value/(data.available_to_spend.value + data.spent.value))*100}%` , backgroundColor : "green"}}></hr>
        </div>
        <div style={{marginTop : "10px"}}>
            <div className='balance'>
                <p><span className="dot" style={{backgroundColor : "red"}}></span>Spent</p>
                <p>{data.spent.value} SGD</p>
            </div>
            <div className='balance'>
                <p><span className="dot" style={{backgroundColor : "green"}}></span>Available to spend</p>
                <p>{data.available_to_spend.value} SGD</p>
            </div>
        </div>
    </div>
  )
}

export default Card