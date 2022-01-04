import React from "react";
import "./styles.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [visible, setVisible] = React.useState(true); // [Boolean, function]
	return (
		<div className="card__wrapper">
			<div className="card">
				<img
					src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=20"
					alt="tree"
					className="card__image"
				/>
				<div className="card__headline">
					<h3>Nature walk</h3>
				</div>
				{visible ? (
					<div className="card__description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
					</div>
				) : null}
				<div className="card__actions">
					<button
						onClick={() => {
							console.log("irgendwas");
							setVisible(!visible);
						}}
						className="card__button"
					>
						{visible ? "Hide" : "Show"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Exercise;
