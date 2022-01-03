import React from "react";
import { useParams } from "react-router-dom";
import Exercise1 from "../solutions/1/index.jsx";
import Exercise2 from "../solutions/2/index.jsx";
import Exercise3 from "../solutions/3/index.jsx";
import Exercise4 from "../solutions/4/index.jsx";
import Exercise5 from "../solutions/5/index.jsx";
import Exercise6 from "../solutions/6/index.jsx";

const Exercises = () => {
  const { page } = useParams();
  switch (page) {
    case "1":
      return <Exercise1 />;
    case "2":
      return <Exercise2 />;
    case "3":
      return <Exercise3 />;
    case "4":
      return <Exercise4 />;
    case "5":
      return <Exercise5 />;
    case "6":
      return <Exercise6 />;
    default:
      return <div>Not Found</div>;
  }
};

export default Exercises;
