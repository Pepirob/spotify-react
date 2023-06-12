import React from "react";
import { Link } from "react-router-dom";

function Item({ data }) {
  return (
    <>
      {data.type === "artist" || data.type === "album" ? (
        <>
          <div>
            <img
              src={
                data.images.length === 0
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziC--miCVT2PNZN1KyfSSDNV-QbVjS0lDVw&usqp=CAU"
                  : data.images[0].url
              }
              alt={data.name}
            />
          </div>
          <div>
            <h3>{data.name}</h3>
            <Link
              to={
                data.type === "artist"
                  ? `/albums/${data.id}`
                  : `/tracks/${data.id}`
              }
            >
              <button>
                {data.type === "artist" ? "View Albums" : "View Tracks"}
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div>
          <p>{data.name}</p>
          <audio controls>
            <source src={data.preview_url} />
          </audio>
        </div>
      )}
    </>
  );
}

export default Item;
