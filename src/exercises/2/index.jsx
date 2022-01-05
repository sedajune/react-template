import React from "react";
import Card from "../components/Card";

/**
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */
const items = Array.from({ length: 10 }, () => {
	return {
		headline: "Nature Walk",
		description:
			"The ground beneath the stiff leaves is frozen. The cold, brisk air invades my lungs, I exhale, my breath visible. I step over fallen branches and tugged by thorny vines. A red tail hawk screeches overhead, this is a sign of good luck. There is no path, no trail to mark our way, just an old, flat railroad bed surrounded by walls of shale, blown up for the path of the train so long ago. The only ties to remind of the rail are the rotting, moss covered ties that once were a part of a bridge that would have carried the train over a small creek between two steep hills. I see a fox burrow, and it's escape hatch is one of the hollowed railroad ties. I want to be a fox...",
		image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=20",
	};
});

const Exercise = () => {
	return (
		<div>
			{items.map((item) => (
				<Card
					key={item.id}
					headline={item.headline}
					description={item.description}
					image={item.image}
				/>
			))}
		</div>
	);
};

export default Exercise;
