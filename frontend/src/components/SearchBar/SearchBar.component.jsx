import './SearchBar.component.css';
import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../context/SearchContext';

import { gql, useLazyQuery } from '@apollo/client';


const IMAGE_QUERY = gql`
query GetImages($q: String!) {
  images(q: $q) {
    id
    href
    description
    title
  }
}
`;

const SearchBar = ()=> {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useContext(SearchContext);
  const [search, setSearch] = useState("");
  const [searchForImage, { loading, data }] = useLazyQuery(IMAGE_QUERY);


  useEffect(()=> {
    if(loading) return <p>Loading...</p>

    if(data) {
      setSearchResults(data);
      navigate('/search');
    }
  }, [data]);


  return (
    <div>
      <label>Search for an Image</label>
      <input className="search" id="search" value={search} onChange={ (e)=> setSearch(e.target.value)} />
      <button className="searchButton" id="searchButton" onClick={() => searchForImage({variables: {q: search}})}>Search</button>
    </div>
  )
}

export default SearchBar;