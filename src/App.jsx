import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ArtistResults from "./pages/ArtistResults";
import AlbumResults from "./pages/AlbumResults";
import TracksResults from "./pages/TracksResults";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist-search/:results" element={<ArtistResults />} />
        <Route path="/albums/:artistId" element={<AlbumResults />} />
        <Route path="/tracks/:albumId" element={<TracksResults />} />
      </Routes>
    </>
  );
}

export default App;
