import React from "react";
import styles from "./styles.module.css";
// Variant: headline, footnote

const typeVariants = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h4",
	subtitle2: "h5",
	body1: "p",
	body2: "p",
	button: "span",
	caption: "div",
	overline: "div",
};

const Typo = ({
	children,
	className,
	variant = "body1",
	component = typeVariants[variant] ?? "span",
	...rest
}) => {
	const Component = component;
	return (
		<Component {...rest} className={[styles.Typo, styles[variant], className].join(" ")}>
			{children}
		</Component>
	);
};

export default Typo;
