import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArtists } from "../services/spotify.services";
import Item from "./Item";

function List({ data }) {
  return (
    <>
      {data.type === "track" && (
        <header>
          <h2>Title</h2>
          <h2>Listen</h2>
        </header>
      )}
      {data.map((eachData) => {
        return <Item key={eachData.id} data={eachData} />;
      })}
    </>
  );
}

export default List;
