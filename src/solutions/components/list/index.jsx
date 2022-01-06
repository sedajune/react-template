import React from "react";
import styles from "./styles.module.css";

const List = ({
	children,
	className,
	style = {},
	variant = "ul",
	marker,
	markerColor,
	...rest
}) => {
	const Component = variant;
	return (
		<Component
			{...rest}
			className={[styles.List, className].join(" ")}
			style={{
				...style,
				"--marker": marker ? `"${marker} " ` : undefined,
				"--marker-color": markerColor,
			}}
		>
			{children}
		</Component>
	);
};

export default List;
