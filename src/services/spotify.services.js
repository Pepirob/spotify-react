import service from "./config.services";

const getAllArtists = (query) => {
  return service.get(`/artist-search?artist=${query}`);
};
const getAlbums = (params) => {
  return service.get(`/album/${params}`);
};
const getTracks = (params) => {
  return service.get(`/tracks/${params}`);
};

export { getAllArtists, getAlbums, getTracks };
