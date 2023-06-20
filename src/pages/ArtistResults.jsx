import { useParams } from "react-router-dom";
import List from "../components/List";
import { DATA_TYPE } from "../consts/spotify.consts";
import { useSoptify } from "../hooks/useSpotify";

function ArtistResults() {
  const params = useParams();
  const { results } = params;
  const { data } = useSoptify({ query: results, type: DATA_TYPE.ARTISTS });

  return (
    <>{!data ? <p>Loading...</p> : <List data={data.body.artists.items} />}</>
  );
}

export default ArtistResults;
