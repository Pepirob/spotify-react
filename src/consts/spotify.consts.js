import {
  getAlbums,
  getAllArtists,
  getTracks,
} from "../services/spotify.services";

export const DATA_TYPE = {
  ARTISTS: "artists",
  ALBUMS: "albums",
  TRACKS: "tracks",
};

export const SPOTIFY_SERVICES = {
  ARTISTS: getAllArtists,
  ALBUMS: getAlbums,
  TRACKS: getTracks,
};
