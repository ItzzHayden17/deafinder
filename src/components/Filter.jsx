import React, { useEffect, useState, useMemo } from 'react';
import data from '../python-data.json';

const Filter = (props) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [countryFilterOptions, setcountryFilterOptions] = useState([]);
  const [filters, setFilters] = useState({ name: '', country: '', contentType: '' });
  const [activeCategory,setActiveCategory] = useState("All")

  // Memoize the filteredData
  var filteredData = useMemo(() => {
    return data.filter((creator) => {
      return (
        (filters.contentType === "" || creator.contentType.includes(filters.contentType)) &&
        (filters.country == "" || creator.country.toLowerCase().includes(filters.country.toLowerCase())) &&
        (filters.name == "" ||
          creator.name.toLowerCase().includes(filters.name.toLowerCase()))

      )
    });
  }, [data, filters]);

  props.onChange(filteredData)

  function handleFilter(e) {
    e.preventDefault();
    const { name, value } = e.target;
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
      if(e.target.name == "contentType"){
        setActiveCategory(e.target.value)
      }
    
  }

  useEffect(() => {
    // Set content for categories
    const dataContentType = ['Entertainer']; // Custom keywords for search purposes
    const dataCountry = []
    data.forEach((option) => {
      if (!dataContentType.some((items) => items.includes(option.contentType.split(' ')[0] || option.contentType.split(' ')[1]))) {
        // Use split to prevent duplication of words
        dataContentType.push(option.contentType.split(' ')[0]);
      }
      if (!dataCountry.some((items) => items.includes(option.country))) {
        dataCountry.push(option.country);
      }
    });
    setFilterOptions(dataContentType);
    setcountryFilterOptions(dataCountry)

    
  }, []);

  return (
    <div>
      <div className="Filter">
        <div className="buttons">
        <button onClick={handleFilter} value="" name="contentType" className={activeCategory ==  "" || activeCategory ==  "All"  ? "active" : ""}><span>#</span> All</button>
        {filterOptions.map((option) => (
          <button onClick={handleFilter} value={option} name="contentType" key={option} className={activeCategory == option ? "active" : ""}>
            <span>#</span>{option}
          </button>
        ))}
        </div>
        <div className="inputs">
          <select name="contentType" id="" onChange={handleFilter} className='hidden'>
          <option  value="" name="contentType" >All Categories</option>
          {filterOptions.map((option) => (
          <option  value={option} name="contentType" key={option}>
            {option}
          </option>
        ))}
          </select>
        <input type="text" onChange={handleFilter} name='name' placeholder='  Search name' />
        <select name="country" id="" onChange={handleFilter}>
        <option value="" >All Locations</option>
          {countryFilterOptions.map((country)=>{
            return(<option key={country} value={country} >{country}</option>)
          })}
        </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
