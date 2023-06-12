import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(null);

  const redirect = () => {
    navigate(`/artist-search/${searchInput}`);
  };

  return (
    <>
      <SearchForm setSearchInput={setSearchInput} redirect={redirect} />
    </>
  );
}

export default Home;
