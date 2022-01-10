import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.css";

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<br />
			<div>{children}</div>
			<br />
			<Footer />
		</div>
	);
};

export default Layout;
