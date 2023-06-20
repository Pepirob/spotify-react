import { useParams } from "react-router-dom";
import List from "../components/List";
import { useSoptify } from "../hooks/useSpotify";
import { DATA_TYPE } from "../consts/spotify.consts";

function AlbumResults() {
  const params = useParams();
  const { artistId } = params;
  const { data } = useSoptify({ query: artistId, type: DATA_TYPE.ALBUMS });

  return <>{!data ? <p>Loading...</p> : <List data={data.body.items} />}</>;
}
export default AlbumResults;
