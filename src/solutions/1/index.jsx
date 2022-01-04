import React, { useState } from "react";
import styles from "../components/card/styles.module.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [hidden, setHidden] = useState(true);
	return (
		<div>
			<article className={styles.Card}>
				<figure className={styles.CardMedia}>
					<img
						src="https://images.unsplash.com/photo-1590922065094-effdbfec0a6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
						alt="A bee on a yellow background"
					/>
				</figure>
				<h3 className={styles.CardHeadline}>The Bee</h3>
				<aside className={`${styles.CardDescription} ${hidden ? styles.isHidden : ""}`}>
					Bees are insects with wings closely related to wasps and ants, known for their
					role in pollination and, in the case of the best-known bee species, the western
					honey bee, for producing honey. Bees are a monophyletic lineage within the
					superfamily Apoidea. They are presently considered a clade, called Anthophila.
					There are over 16,000 known species of bees in seven recognized biological
					families.[1][2] Some species – including honey bees, bumblebees, and stingless
					bees – live socially in colonies while most species (>90%) – including mason
					bees, carpenter bees, leafcutter bees, and sweat bees – are solitary.
				</aside>
				<footer className={styles.CardActions}>
					<button
						onClick={() => {
							setHidden((state) => !state);
						}}
					>
						{hidden ? "Show" : "Hide"}
					</button>
				</footer>
			</article>
		</div>
	);
};

export default Exercise;
