import React from "react";
import styles from "./styles.module.css";

const Checky = ({ label, className, ...props }) => {
	return (
		<span>
			<input
				type="checkbox"
				id="input1"
				class
				{...props}
				className={[styles.Checky, className].join(" ")}
			/>
			<label for="input2">{label}</label>
		</span>
	);
};

export default Checky;
