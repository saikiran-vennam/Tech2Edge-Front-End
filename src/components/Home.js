import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import SpinnerComp from "./Spinner";
import RatingComp from "./Rating";
import CardComp from "./Card";
import Model from "./Model";

const Home = () => {
  const [state, setState] = useState({
    characters: [],
    series: {
      desc: "",
      img: "",
      ott: "",
      title: "",
    },
  });
  useEffect(() => {
    axios
      .get("https://demo.tech2edge.co/samples/data-sg")
      .then((data) => setState(data.data))
      .catch((err) => console.log(err));
  }, []);
  const imageUrl = `https://demo.tech2edge.co/samples/${state.series.img}`;
  return (
    <div className="my-container">
      {state.characters.length > 0 ? (
        <div className="mt-100" style={{ backgroundImage: `url(${imageUrl})` }}>
          <NavBar className="b-t" />
          <div className="main-container">
            <div className="series">
              <h1 className="custom-title heading">{state.series.title}</h1>
              <p className="custom-title para">
                <strong>Story Line: </strong>
                {state.series.desc}
              </p>
              <span className="rating">
                <strong>Your Rating:</strong>
                <RatingComp />
              </span>
              <span className="rating mt-3">
                <Model />
              </span>
            </div>
            <div className="characters">
              <h2 className="custom-h2">characters</h2>
              <div className="card-container">
                {state.characters.map((data, i) => (
                  <CardComp key={i} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SpinnerComp />
      )}
    </div>
  );
};

export default Home;
