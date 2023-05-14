import React, { useState, useEffect } from "react";
import Movie from "../Movie";
import Navbar from "../Navbar";
import useShowContext from "../Context/ShowContext";

const Home = () => {
  const show = useShowContext();

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[60px] max-w-sm md:max-w-none md:mx-0">
          {show.map((show) => (
            <Movie
              id={show.id}
              name={show.name}
              image={show.image}
              runtime={show.runtime}
              genre={show.genre}
              premiered={show.premiered}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
