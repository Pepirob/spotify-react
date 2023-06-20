import { useParams } from "react-router-dom";
import List from "../components/List";
import { useSoptify } from "../hooks/useSpotify";
import { DATA_TYPE } from "../consts/spotify.consts";

function TracksResults() {
  const params = useParams();
  const { albumId } = params;
  const { data } = useSoptify({ query: albumId, type: DATA_TYPE.TRACKS });

  return <>{!data ? <p>Loading...</p> : <List data={data.body.items} />}</>;
}
export default TracksResults;
