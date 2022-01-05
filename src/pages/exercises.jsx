import React from "react";
import { useParams } from "react-router-dom";
import Exercise1 from "../exercises/1/index.jsx";
import Exercise2 from "../exercises/2/index.jsx";
import Exercise2_5 from "../exercises/2_5/index.jsx";
import Exercise2_6 from "../exercises/2_6/index.jsx";
import Exercise3 from "../exercises/3/index.jsx";
import Exercise4 from "../exercises/4/index.jsx";
import Exercise5 from "../exercises/5/index.jsx";
import Exercise6 from "../exercises/6/index.jsx";

const Exercises = () => {
	const { page } = useParams();
	switch (page) {
		case "1":
			return <Exercise1 />;
		case "2":
			return <Exercise2 />;
		case "2_5":
			return <Exercise2_5 />;
		case "2_6":
			return <Exercise2_6 />;
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
