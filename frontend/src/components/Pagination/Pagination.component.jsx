import './Pagination.component.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchContext from '../../context/SearchContext';
import { useLazyQuery } from '@apollo/client';
import { IMAGE_QUERY } from '../../queries/nasaImageQuery';

/**
 * Displaying total number of items found in search, number of pages (default was 100 per page)
 * As well as giving the user an option to choose a different page via Select
 */
const Pagination = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useContext(SearchContext);
  const [page, setPage] = useState("1")   
  const [changeImagePage, { loading, error, data }] = useLazyQuery(IMAGE_QUERY);

  const search = searchResults.search || "";
  const total = searchResults.data ?  searchResults.data.images.total : 0;

  const pageCount = Math.ceil(total / 100);

  const goToPage = async (e)=> {
    setPage(e);

    //Re-query for new results when page changes
    await changeImagePage({variables: {q: search, from: page}})

    if(loading) console.log(`loading......`);
    if(error) console.warn(`Error.....errror!`);

    if(data) {
      setSearchResults({data, search});
      navigate(`/search/${page}`);
    }
  }

  return (
    <div className="paginationContainer">
      <p className="paginateItem"><strong>You searched for: {search}</strong></p>
      <p className="paginateItem"><strong>Total Items: {total}</strong></p>

      {
        total > 0 ?
        <p className="paginateItem">Page {page} of {pageCount}</p> : ''
      }


      <select className="paginateItem pageSelect" value={page} onChange={(e)=> goToPage(e.target.value)}>
        {
          Array.from(Array(pageCount)).map( (e,i) => {return (<option key={i+1} value={i+1}>{i+1}</option>)})
        }
      </select>


      
    </div>
  )
}

export default Pagination;