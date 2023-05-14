import React from "react";
import { Link } from "react-router-dom";
const Movie = (show) => {
  return (
    <div key={show.id}>
      <p className="text-center">{show.name}</p>
      <div className="overflow-hidden">
        <Link to={`/MovieDetail/${show.id}`}>
          <img
            className=" hover:scale-105 duration-300 cursor-pointer"
            src={show.image}
            alt={show.name}
          />
        </Link>
      </div>
    </div>
  );
};

export default Movie;
