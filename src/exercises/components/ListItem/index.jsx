import React from "react";
import styles from "./styles.module.css";

const ListItem = ({ children, className, ...props }) => {
	return (
		<span class {...props} className={[styles.ListItem, className].join(" ")}>
			<li>{children}</li>
		</span>
	);
};

export default ListItem;
