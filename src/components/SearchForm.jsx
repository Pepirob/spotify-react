import React from "react";

function SearchForm({ setSearchInput, redirect }) {
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="searchInput"
          onChange={handleSearch}
          placeholder="What do you want to listen to?"
        />
        <button onClick={() => redirect()}>Search for an Artist</button>
      </form>
    </>
  );
}

export default SearchForm;
