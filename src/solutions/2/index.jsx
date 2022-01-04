import React from "react";
import Card from "../components/card/index.jsx";
import Grid from "../components/grid/index.jsx";
import { random, randomWord } from "../utils/index.jsx";

let id = 0;
const items = Array.from({ length: 5 }, (_, index) => ({
	id: id++,
	headline: Array.from({ length: random(4, 2) }, () => randomWord()).join(" "),
	description: Array.from({ length: random(60, 40) }, () => randomWord()).join(" "),
	image: {
		alt: Array.from({ length: random(10, 3) }, () => randomWord()).join(" "),
		src: `https://picsum.photos/seed/${(index + 10) * 128761}/800/450`,
	},
}));

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
const Exercise = () => {
	return (
		<Grid>
			{items.map((item) => (
				<Card
					key={item.id}
					headline={item.headline}
					description={item.description}
					image={item.image}
				/>
			))}
		</Grid>
	);
};

export default Exercise;
