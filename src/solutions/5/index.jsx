import React, { useState } from "react";

/**
 * ## Contact form
 * 1. Create a form
 * - The form has a field for the email address
 * - The form has a field for the message
 * 2. Handle the form action
 *    When the form is sent
 *    Then the user sees "Message sent!"
 *    And the user sees their email address
 *    And the user sees their message
 *    And the form is not visible
 *
 */
const Exercise = () => {
	const [data, setData] = useState(null);
	return (
		<div>
			{data ? (
				<div>
					<p>Message sent!</p>
					<p>{data.email}</p>
					<p>{data.message}</p>
				</div>
			) : (
				<form
					onSubmit={(event_) => {
						event_.preventDefault();
						const formData = new FormData(event_.target);
						const values = Object.fromEntries(formData);
						setData(values);
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
				</form>
			)}
		</div>
	);
};

export default Exercise;
