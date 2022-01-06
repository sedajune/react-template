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

// const tagNames = {
// 	h1: "h1",
// 	h2: "h2",
// 	sub1: "p",
// 	caption: "div",
// 	button1: "span",
// 	body1: "p",
// };
// const Typography = ({
// 	children,
// 	className,
// 	variant = "body1",
// 	component = tagNames[variant] ?? "span",
// }) => {
// 	const Component = component;
// 	return <Component className={[className, styles[variant]].join(" ")}>{children}</Component>;
// };
// export default Typography;
