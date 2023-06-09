import service from "./config.services";

const getAllArtists = (body) => {
  return service.get("/artist-search", body);
};
const getAlbums = (params) => {
  return service.get(`/album/${params}`);
};
const getTracks = (params) => {
  return service.get(`/tracks/${params}`);
};

export { getAllArtists, getAlbums, getTracks };
