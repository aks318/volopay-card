import React, { useState } from 'react'
import AllCard from './pages/AllCard'
import { Input } from 'antd';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import './VolopayCard.css'
import YourCard from './pages/YourCard';

const Search = Input.Search;
const VolopayCard = () => {
    const [activeLink , setActiveLink] = useState("All")
    const [search , setSearch] = useState("")

  return (
      <div className='main-div'>
        <div className='header'>
            <h1>Virtual cards</h1>
            <button>+ Virtual cards</button>
        </div>
        <div className='navbar'>
            <div className='links'>
                <p 
                    className={activeLink === "Your" ? "active" : ""}
                    onClick={() => setActiveLink("Your")}
                >Your</p>
                <p 
                    className={activeLink === "All" ? "active" : ""}
                    onClick={() => setActiveLink("All")}
                >All</p>
                <p>Blocked</p>
            </div>
            <div className='filters'>
                <Search
                    placeholder="Search Your Card"
                    style={{ width: 200 }}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <IconButton
                    aria-label="expand row"
                    size="small"
                >
                    <FilterListIcon />
                </IconButton>
            </div>
        </div>
        <div className='card-container'>
            {activeLink === "All" && <AllCard search={search}
                clearSearch = {() => setSearch("")}
            />}
            {activeLink === "Your" && <YourCard search={search}
                clearSearch = {() => setSearch("")}
            />}
        </div>
      </div>
  )
}

export default VolopayCard