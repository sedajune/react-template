import React from "react";

const Button = ({ children, className, ...rest }) => {
	return (
		<button {...rest} className={["internal-classname", className].join(" ")}>
			{children}
		</button>
	);
};

export default Button;
