import React, { useEffect, useState, useMemo } from 'react';
import data from '../python-data.json';

const Filter = (props) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [filters, setFilters] = useState({ name: '', country: '', contentType: '' });

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
    

    if (value == "All") {
      window.location.reload()
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    }
    
  }

  useEffect(() => {
    // Set content for categories
    const dataContentType = ['All', 'Entertainer']; // Custom keywords for search purposes
    data.forEach((option) => {
      const string = 'Researcher (Ghost)';
      if (!dataContentType.some((items) => items.includes(option.contentType.split(' ')[0] || option.contentType.split(' ')[1]))) {
        // Use split to prevent duplication of words
        dataContentType.push(option.contentType.split(' ')[0]);
      }
    });
    setFilterOptions(dataContentType);
  }, []);

  return (
    <div>
      <div className="Filter">
        <div className="buttons">
        {filterOptions.map((option) => (
          <button onClick={handleFilter} value={option} name="contentType" key={option}>
            #{option}
          </button>
        ))}
        </div>
        <div className="inputs">
          <select name="contentType" id="" onChange={handleFilter} className='hidden'>
          {filterOptions.map((option) => (
          <option  value={option} name="contentType" key={option}>
            #{option}
          </option>
        ))}
          </select>
        <input type="text" onChange={handleFilter} name='name' placeholder='Search for a name' />
        <input type="text" onChange={handleFilter} name='country' placeholder='Search by country'/>
        </div>
      </div>
    </div>
  );
};

export default Filter;
