import React from "react";
import Button from "../components/Button";
import Typo from "../components/Typography";
import Checky from "../components/Checkbox";
import List from "../components/List";
import ListItem from "../components/ListItem";
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
			<Typo variant="h5" component="h3">
				Welcome to the new age!
			</Typo>
			<Typo variant="h4" component="h1">
				Welcome to the new age!
			</Typo>
			<Typo variant="h1" component="h3">
				Welcome to the new age!
			</Typo>
			<br />
			<Button variant={"primary"} className={"push"} aria-label={"gelb"}>
				Click me
			</Button>
			<br />
			<br />
			<Button variant={"secondary"} className={"pull"} aria-label={"gelb"}>
				Don´t click me
			</Button>
			<br />
			<br />

			<Checky label="I agree"></Checky>
			<br />
			<br />
			<List>
				<ListItem>Time</ListItem>
				<ListItem>Money</ListItem>
				<ListItem>Goals</ListItem>
				<ListItem>Allies</ListItem>
			</List>
			<br />
			<br />
			<Typo variant="caption">See you soon my friend!</Typo>
		</div>
	);
};

export default Exercise;
