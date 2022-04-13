import SearchContext from './SearchContext';
import {React, useState} from 'react';

/**
 * Saving both the data from the graphql query and the query string the user types to search in context
 */
const SearchProvider = (props) => {
  const [searchResults, setSearchResults] = useState({});

  return (
    <SearchContext.Provider value={[searchResults, setSearchResults]}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;