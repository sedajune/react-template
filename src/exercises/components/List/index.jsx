import React from "react";
import styles from "./styles.module.css";

const List = ({ children, className, ...props }) => {
	return (
		<ul class {...props} className={[styles.List, className].join(" ")}>
			<li>{children}</li>
			<li>{children}</li>
			<li>{children}</li>
			<li>{children}</li>
		</ul>
	);
};

export default List;
