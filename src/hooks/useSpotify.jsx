import { useEffect, useState } from "react";
import { DATA_TYPE, SPOTIFY_SERVICES } from "../consts/spotify.consts";

export function useSoptify({ query, type }) {
  const [data, setData] = useState(null);
  let service;
  if (type === DATA_TYPE.ARTISTS) {
    service = SPOTIFY_SERVICES.ARTISTS;
  } else if (type === DATA_TYPE.ALBUMS) {
    service = SPOTIFY_SERVICES.ALBUMS;
  } else {
    service = SPOTIFY_SERVICES.TRACKS;
  }
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service(query);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { data };
}
