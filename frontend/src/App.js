import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchProvider from "./context/SearchProvider";

import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';

function App() {
  return (

    <BrowserRouter>
      <SearchProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search/:page" element={<SearchResults />}/>
        </Routes>
      </SearchProvider>
    </BrowserRouter>

  );
}

export default App;
