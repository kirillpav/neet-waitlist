import React from "react";
import { useState } from "react";
import styles from "../public/styles/Form.module.css";

const Form = () => {
	const [email, setEmail] = useState("");
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			let response = await fetch("api/waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email }),
			});

			if (response.ok) {
				setHasSubmitted(true);
				setError(null);
			} else {
				const errorText = await response.json();
				setError(errorText);
				console.error("Error submitting form:", errorText);
			}
		} catch (error: any) {
			setError("An error occurred while sending data.");
			console.error("Fetch error:", error.message);
		}

		// TODO Add call to backend
	};

	if (hasSubmitted) {
		return (
			<div>
				<p>Great things come to those who wait</p>
			</div>
		);
	}
	return (
		<form className={styles.email__form} onSubmit={submit}>
			<div className={styles.email__container}>
				<input
					type="email"
					required
					className={styles.email__input}
					placeholder="your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<button type="submit" className={styles.email__btn}>
					JOIN WAITLIST
				</button>
			</div>
			{error ? <div>{error}</div> : null}
		</form>
	);
};

export default Form;
