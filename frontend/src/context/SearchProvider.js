import SearchContext from './SearchContext';
import {React, useState} from 'react';

const SearchProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={[searchResults, setSearchResults]}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;