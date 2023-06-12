import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import { getTracks } from "../services/spotify.services";
import { fetchData } from "../utils/fetchData";

function TracksResults() {
  const params = useParams();
  const { albumId } = params;
  const [fetched, setFetched] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  fetchData(getTracks, albumId, setFetched, setisFetching);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {!isFetching && <List data={fetched.body.items} />}
    </>
  );
}
export default TracksResults;
