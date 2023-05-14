import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Form = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form values
    const formData = {
      username,
      number,
      date,
    };

    // Store the form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Clear the form inputs
    setUsername("");
    setNumber("");
    setDate("");

    alert("Booking Made Succesfully !");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-[400px] shadow-lg shadow-gray-600 rounded-md">
        <h1 className="bg-gray-500 text-white text-3xl text-center font-semibold h-10 rounded-t-md">
          Book Your Show
        </h1>
        <div className="flex flex-1 justify-center items-center overflow-hidden">
          <img
            className="w-[150px] pt-5 lg:max-w-md hover:scale-105 duration-700"
            src={show.image.medium}
            alt=""
          />
        </div>
        <div className="text-center py-5">
          <h1 className="text-3xl font-semibold">{show.name}</h1>
          <h1 className="text-xl">Genres: {show.genres}</h1>
          <h1 className="text-xl">Runtime: {show.runtime}</h1>
        </div>
        <form onSubmit={handleFormSubmit} className="text-center">
          <div>
            <label>Name</label>
            <br />
            <input
              className="border border-gray-300"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>No. Of People</label>
            <br />
            <input
              className="border border-gray-300"
              type="number"
              value={number}
              required
              onChange={(e) => setNumber(e.target.value)}
            />
            <div>
              <label>Date:</label>
              <br />
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <button
            className=" my-5 bg-red-600 p-2 rounded-md text-white w-[100px] hover:bg-red-500"
            type="submit"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
