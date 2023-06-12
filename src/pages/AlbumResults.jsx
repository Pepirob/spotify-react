import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import { getAlbums } from "../services/spotify.services";
import { fetchData } from "../utils/fetchData";

function AlbumResults() {
  const params = useParams();
  const { artistId } = params;
  const [fetched, setFetched] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  fetchData(getAlbums, artistId, setFetched, setisFetching);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {!isFetching && <List data={fetched.body.items} />}
    </>
  );
}
export default AlbumResults;
