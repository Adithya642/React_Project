import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({setResults}) => {
    const[searchText,setSearchText]=useState('');

    const fetchData=(value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((json)=>{
            const results=json.filter((user)=>{
                return(
                    value && 
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                ); 
            });
            setResults(results);
        });
    }
    const handleData=(value)=>{
        setSearchText(value);
        fetchData(value);
    }
    return (
        <div className="input_wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="type to search" value={searchText} 
            onChange={(e)=>handleData(e.target.value)}/>
        </div>
    );
};

export default SearchBar;
