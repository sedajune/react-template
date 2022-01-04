import React, { useState } from "react";
import Form from "../components/form/index.jsx";

/**
 * ## Form component
 * 1. Make a reusable form
 * 2. Show two forms
 *   - Form 1: Contact form
 *     - Email address
 *     - Message
 *     - Success Message: "Message sent!"
 *   - Form 2: Newsletter form
 *     - Email address
 *     - Success Message: "You are subscribed!"
 *
 *  - Log the form data in the web console
 */
const Exercise = () => {
	const [newsletter, setNewsletter] = useState(null);
	const [contact, setContact] = useState(null);
	return (
		<div>
			{contact ? (
				<div>Message Sent!</div>
			) : (
				<Form
					onSubmit={(data) => {
						console.log(data);
						setContact(data);
					}}
				>
					<div>
						<label>
							Email:
							<br />
							<input type="email" name="email" />
						</label>
					</div>
					<div>
						<label>
							Message:
							<br />
							<textarea name="message" />
						</label>
					</div>
					<button type="submit">Send</button>
				</Form>
			)}
			{newsletter ? (
				<div>You are subscribed!</div>
			) : (
				<Form
					onSubmit={(data) => {
						console.log(data);
						setNewsletter(data);
					}}
				>
					<label>
						Email:
						<br />
						<input type="email" name="email" />
					</label>
					<button type="submit">Subscribe</button>
				</Form>
			)}
		</div>
	);
};

export default Exercise;
