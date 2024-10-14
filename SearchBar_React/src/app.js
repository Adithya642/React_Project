import { useState } from "react";
import React from "react"
import ReactDOM from "react-dom/client";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults"
const Main=()=>{
    const [results,setResults]=useState([]);
    return (
<div className="app"  >
    <h1>working on search bar</h1>
    <div className="Search-Bar-Container">
        <SearchBar setResults={setResults}/>
        <SearchResults results={results}/>
    </div>
</div>
    )
}

const initialRender=ReactDOM.createRoot(document.getElementById("root"));
initialRender.render(<Main/>);
