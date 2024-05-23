import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const[insights, setInsights] = useState(null);
  const[error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(input);
    let url = `https://colorsays-api.vercel.app/${input.toLowerCase()}`;
    let proxyUrl = `https://api.allorigins.win/raw?url=`;

    fetch(proxyUrl + url)
      .then((res) => res.json())
      .then((data) => {
        setInsights(data);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred while fetching data.");
      });
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-8 text-cyan-400 font-poppins md:text-3xl">
        AachRang
      </h1>
      <p className=" text-center m-5 text-lg text-white font-poppins md:pt-2 md:mx-10 md:text-xl">
        AachRang gives your personality (Aachran) insights based on your
        favorite color (Rang).
      </p>
      <div className="flex justify-center items-center">
        <input
          value={input}
          onChange={handleInputChange}
          className="m-auto py-2 px-14 border border-gray-300 rounded mt-12 text-center md:py-4 md:px-28 md:text-xl"
          placeholder="Enter Your Favorite Color Here "
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handleButtonClick}
          className="py-2 px-5 bg-cyan-600 text-white rounded font-semibold md:px-44 md:py-4 md:font-semibold md:text-xl"
        >
          Get Insights
        </button>
      </div>
      <div className="mt-14 p-6 font-poppins">
        <h1 className=" font-bold text-lg text-blue-300 md:text-3xl">
          Your Personality Insights:
        </h1>
        {insights ? (<p className="text-white text-lg font-poppins md:text-2xl md:mt-5">
          {insights.character_info}
        </p>): (<p className="text-white text-lg font-poppins md:text-2xl md:mt-5">Enter a color to get insights.</p>)}
        
        {error && <p className="text-red-500 md:text-2xl">{error}</p>}
        
      </div>

      <h2 className="mt-16 text-red-400 text-center md:text-xl">
        Made by <a className=" underline text-blue-300" href="https://www.digibag.in/">DIGIBAG</a> with{" "}
        <a className=" underline text-blue-300" href="https://www.digibag.in/what-is-colorsays-api/">
          colorSays API
        </a>
      </h2>
    </>
  );
}

export default App;
