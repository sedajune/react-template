import React, { useEffect, useState } from "react";

/**
 * ## Guest-list
 * 1. Fetch 10 users from the https://randomuser.me/ API
 * 2. Make a list with a checkbox besides each name
 *      When the guest has been checked in
 *      Then the Checkmark is checked
 *      And the name has a line-through
 *
 */
const Exercise = () => {
	const [items, setItems] = useState([]);
	const [checked, setChecked] = useState({});
	useEffect(() => {
		void fetch("https://randomuser.me//api?results=10")
			.then((response) => response.json())
			.then(({ results }) => {
				setItems(results);
			})
			.catch((error_) => {
				console.error(error_);
			});
	}, []);

	return (
		<div>
			<ul>
				{items.map((item) => {
					const key = item.login.uuid;
					const isChecked = Boolean(checked[key]);
					return (
						<li key={key}>
							<label style={{ textDecoration: isChecked ? "line-through" : "none" }}>
								<input
									type="checkbox"
									checked={isChecked}
									onChange={(event_) => {
										setChecked((state) => ({
											...state,
											[key]: event_.target.checked,
										}));
									}}
								/>
								{item.name.first} {item.name.last}
							</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Exercise;
