import "./SearchResults.css";

import { useContext } from "react";
import { Link } from 'react-router-dom';

import SearchContext from "../../context/SearchContext";

import SearchBar from "../../components/SearchBar/SearchBar.component";
import ImageCard from "../../components/ImageCard/ImageCard.component";

const SearchResults = () => {
  const searchResults = useContext(SearchContext);

  const {images} = searchResults[0];

  return (
    <div className="searchContainer">

      <div className="searchHeader">
        <div className="resultImageContainer">
          <Link to="/">
            <img className="nasaSearchResultsImg" src="https://www.pngkey.com/png/full/481-4819402_nasa-logo-png-transparent-logo-nasa-hd-png.png" alt="NASA Logo" />
          </Link>
        </div>
        <div className="resultSearchContainer">
          <SearchBar />
        </div>
      </div>

      <div className="resultsbody">
        {
          images && images.length > 0 ? 
          images.map( (image) => <div className="cardGrid" key={image.id}><ImageCard image={image} /></div>) :
          <h3 className="searchPrompt">Search for an image!</h3>
        }
      </div>

    </div>
  )
}

export default SearchResults;