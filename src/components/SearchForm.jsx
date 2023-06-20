import React from "react";

function SearchForm({ setSearchInput }) {
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
      </form>
    </>
  );
}

export default SearchForm;
