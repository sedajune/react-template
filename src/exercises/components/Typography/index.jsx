import React from "react";
import styles from "./styles.module.css";
// Variant: headline, footnote
const Typo = ({ children, className, variant, ...props }) => {
	return (
		<span {...props} className={[styles.Typo, styles[variant], className].join(" ")}>
			{children}
		</span>
	);
};

export default Typo;
