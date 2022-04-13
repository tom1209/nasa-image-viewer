import './SearchBar.component.css';
import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../context/SearchContext';

import { useLazyQuery } from '@apollo/client';
import { IMAGE_QUERY } from '../../queries/nasaImageQuery';


const SearchBar = ()=> {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useContext(SearchContext); //Context to save search results and query
  const [search, setSearch] = useState(""); //search query string
  const [searchForImage, { loading, error, data }] = useLazyQuery(IMAGE_QUERY);
  
  let page = "1" //setting this to 1 as a new search will always return the 1st page initially

  useEffect(()=> {
    if(loading) return <p>Loading...</p>
    if(error) return <p>There has been an error!</p>

    if(data) {
      setSearchResults({data, search});
      navigate(`/search/${page}`);
    }
  }, [data]);


  return (
    <div>
      <label>Search for an Image</label>
      <input className="search" id="search" value={search} onChange={ (e)=> setSearch(e.target.value)} />
      <button className="searchButton" id="searchButton" onClick={() => searchForImage({variables: {q: search, from: page}})}>Search</button>
    </div>
  )
}

export default SearchBar;