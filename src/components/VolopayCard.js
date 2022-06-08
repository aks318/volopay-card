import React, { useState } from 'react'
import AllCard from './pages/AllCard'
import { Input } from 'antd';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Select } from 'antd';
import './VolopayCard.css'
import YourCard from './pages/YourCard';

const { Option } = Select;
const Search = Input.Search;
const VolopayCard = () => {
    const [activeLink , setActiveLink] = useState("All")
    const [search , setSearch] = useState("")
    const [openFilter , setOpenFilter] = useState(false)

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
                    onClick={() => setOpenFilter(!openFilter)}
                >
                    <FilterListIcon />
                </IconButton>
                <div className={`filter-box ${openFilter ? 'show-filters' : ''}`}>
                    <h4>Filters</h4>
                    <div className='card-type'>
                        <p>Type</p>
                        <div className='checkbox'>
                            <FormControlLabel control={<Checkbox style={{color : "red"}}/>} label="Subscription" />
                            <FormControlLabel control={<Checkbox style={{color : "red"}}/>} label="Burner" />
                        </div>
                    </div>
                    <div className='card-holder'>
                        <p>Cardholder</p>
                        <Select placeholder="Select Cardholder" allowClear style={{ width: "100%" }}>
                            <Option value="Aakash">Aakash</Option>
                            <Option value="Kartik">Kartik</Option>
                            <Option value="Hritik">Hritik</Option>
                        </Select>
                    </div>
                    <div className='buttons'>
                        <button>Apply</button>
                        <button>Clear</button>
                    </div>
                </div>
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