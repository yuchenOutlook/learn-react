import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

// import "./index.css";
// import App from "./App";
import StartRating from "./StartRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StartRating maxRating={5} onSetRating={setMovieRating} />
      <p>Thos movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating maxRating={5} />
    <StartRating maxRating={10} />
    <StartRating />
    <StartRating size={24} color="red" className="test" />
    <StartRating
      size={45}
      color="green"
      maxRating={4}
      messages={["bad", "terrible", "great", "fabulous"]}
    />
    <StartRating size={46} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
