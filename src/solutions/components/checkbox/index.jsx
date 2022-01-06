import React from "react";
import styles from "./styles.module.css";

const Checkbox = ({ label, ...props }) => {
	return (
		<label className={styles.Checkbox}>
			<input {...props} className={styles.Input} type="checkbox" />
			<span className={styles.Check} />
			<span className={styles.Label}>{label}</span>
		</label>
	);
};

export default Checkbox;
