import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<br />
			<nav>
				<Link to="/portfolio/about-me"> About Me</Link>
				<Link to="/portfolio/my-journey"> My Journey </Link>
				<Link to="/portfolio/contact"> Contact Me </Link>
			</nav>
			<br />
		</header>
	);
};

export default Header;
