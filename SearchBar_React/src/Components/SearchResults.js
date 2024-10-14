import ResultComponent from "./ResultComponent";

const SearchResults = ( {results} ) => {
    return (
        <div className="searchResults">
            { results.map((result, id) => {
                return <ResultComponent name={result.name} key={id}/>;  // Access result.name instead of results.name
            })}
        </div>
    );
};

export default SearchResults;
