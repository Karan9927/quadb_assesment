import { useEffect, useState } from "react";

const useShowContext = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShow(
          data.map((show) => ({
            id: show.show.id,
            name: show.show.name,
            image: show.show.image ? show.show.image.medium : "",
            runtime: show.show.runtime,
            premiered: show.show.premiered,
            genres: show.show.genres,
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return show;
};

export default useShowContext;
