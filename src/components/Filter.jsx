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
    const dataContentType = ["All","Entertainer",] //Custom keywords for search purposes
    data.forEach((option)=>{
      var string = "Researcher (Ghost)"
      console.log(dataContentType.some(items => items.includes(string)));
      if (!dataContentType.some(items => items.includes(option.contentType.split(" ")[0] || option.contentType.split(" ")[1]))) { //We use split to prevent duplication on the words
        dataContentType.push(option.contentType.split(" ")[0])
      }
    })

    
    
    setFilterOptions(dataContentType)
  },[])
  return (
    <div className='Filter'>
      {filterOptions.map((option=>{
        return(<button onClick={handleChange} value={option}>{option}</button>)
      }))}
    </div>
  )
}

export default Filter