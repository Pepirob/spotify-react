import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";

function Home() {
  const [searchInput, setSearchInput] = useState(null);

  return (
    <>
      <SearchForm setSearchInput={setSearchInput} />
      <Link to={`/artist-search/${searchInput}`}>
        <button>Buscar</button>
      </Link>
    </>
  );
}

export default Home;
