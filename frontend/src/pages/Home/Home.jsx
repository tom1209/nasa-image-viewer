import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar.component';

const Home = () => (
  <div className="homeContainer">
    <div>
      <img className="nasaHomeImage" src="https://www.pngkey.com/png/full/481-4819402_nasa-logo-png-transparent-logo-nasa-hd-png.png" alt="NASA Logo" />
    </div>
    <div>
      <SearchBar />
    </div>
  </div>
)

export default Home;