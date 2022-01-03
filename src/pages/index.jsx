import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello Home</h1>
      <nav>
        {Array.from({ length: 6 }, (_, index) => index + 1).map((page) => {
          return (
            <div key={page}>
              <Link to={`/exercises/${page}`}>Exercise {page}</Link> (
              <Link to={`/solutions/${page}`}>Solution</Link> )
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Home;
