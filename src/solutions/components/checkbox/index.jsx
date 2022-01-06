import React from "react";
import styles from "./styles.module.css";

const Checkbox = ({ label, ...props }) => {
	return (
		<label>
			<div>{label}</div>
			<input {...props} className={styles.Input} type="checkbox" />
			<div className={styles.Check} />
		</label>
	);
};

export default Checkbox;
