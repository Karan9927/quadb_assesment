import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div>
      <section className=" font-mono pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* IMAGE */}

            <div className="flex flex-1 justify-center items-center overflow-hidden">
              <img
                className="w-[250px] lg:max-w-md hover:scale-105 duration-700"
                src={show.image.medium}
                alt=""
              />
            </div>

            {/* INFORMATION */}

            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-semibold mb-2 max-w-[450px] mx-auto lg:mx-0 text-4xl">
                {show.name}
              </h1>
              <div>
                <h1 className="text-2xl font-semibold">Summary:</h1>
                <p className="w-[400px] text-justify font-semibold leading-[25px]">
                  {truncate(show?.summary, 150)}
                </p>
              </div>
              <div className="font-semibold leading-[40px] text-xl">
                Genre: {show.genres}
              </div>
              <div className="font-semibold leading-[40px] text-xl">
                Premiered: {show.premiered}
              </div>
              <div className="font-semibold leading-[40px] text-xl">
                Runtime: {show.runtime}min
              </div>

              {/* BUTTON */}

              <Link to="form">
                <button className="my-8 bg-red-600 p-2 rounded-md text-white w-[100px] hover:bg-red-500 ">
                  Book
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
