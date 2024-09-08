import React, { useEffect, useState } from 'react'
import data from "../python-data.json"
const Filter = (props) => {

  const [filterOptions,setFilterOptions] = useState([])

  function handleChange(e){

    if (e.target.value == "All") {
      props.onChange(null) 
    }else{
      const filteredData = []

      data.forEach((creator)=>{
        if (creator.contentType.includes(e.target.value)) {
          filteredData.push(creator)
        }
        props.onChange(filteredData) //Passes the new filtered data to the App,to render the new cards
      })
    }

  }

  
  useEffect(()=>{
    const dataContentType = []

    data.forEach((option)=>{
      if (dataContentType.includes(option.contentType)) {
      }else{
        dataContentType.push(option.contentType)
      }
    })

    setFilterOptions(dataContentType)
  },[])
  return (
    <div className='Filter'>
        
        <select name="" id="" onChange={handleChange}>
            <option value="All">All </option>
            {filterOptions.map((option)=>{
              return <option value={option}> {option}</option>
            })}
        </select>
    </div>
  )
}

export default Filter