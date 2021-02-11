import React from 'react'


const SearchBox = (props) =>{

    return(
        <input type="search"
         className="search"
         placeholder="search"
         onChange={props.handleChange}
         />
    )
}
export default SearchBox;