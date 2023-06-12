import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import { getAllArtists } from "../services/spotify.services";
import { fetchData } from "../utils/fetchData";

function ArtistResults() {
  const params = useParams();
  const { results } = params;

  const [fetched, setfetched] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  fetchData(getAllArtists, results, setfetched, setisFetching);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {!isFetching && <List data={fetched.body.artists.items} />}
    </>
  );
}

export default ArtistResults;
