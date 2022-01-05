import React from "react";
import Button from "../components/Button";
import Typo from "../components/Typography";
import Checky from "../components/Checkbox";
import List from "../components/List";
/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const Exercise = () => {
	return (
		<div>
			<Typo variant={"headline"} className={"Hallo"}>
				Test Typo
			</Typo>
			<Typo variant={"footnote"}>Test Typo</Typo>
			<Button variant={"primary"} className={"irgendwas"} aria-label={"gelb"}>
				Click me
			</Button>
			<Button variant={"secondary"} className={"irgendwas"} aria-label={"gelb"}>
				Click me
			</Button>
			<Checky></Checky>
			<List>Apple pie</List>
		</div>
	);
};

export default Exercise;
