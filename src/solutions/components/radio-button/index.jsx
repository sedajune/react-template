import React from "react";
import styles from "./styles.module.css";

const RadioButton = ({ label, ...props }) => {
	return (
		<label className={styles.RadioButton}>
			<input {...props} className={styles.Input} type="radio" />
			<span className={styles.Radio} />
			<span className={styles.Label}>{label}</span>
		</label>
	);
};

export default RadioButton;
