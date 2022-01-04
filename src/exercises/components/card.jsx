import React from "react";
import styles from "../components/styles.module.css";

const Card = ({ headline, description, image }) => {
	const [visible, setVisible] = React.useState(true); // [Boolean, function]
	return (
		<div className={styles.CardWrapper}>
			<div className={styles.Card}>
				<img src={image} alt="tree" className={styles.CardImage} />
				<div className={styles.CardHeadline}>
					<h3>{headline}</h3>
				</div>
				{visible ? <div className={styles.CardDescription}>{description}</div> : null}
				<div className={styles.CardActions}>
					<button
						onClick={() => {
							setVisible(!visible);
						}}
						className={styles.CardButton}
					>
						{visible ? "Hide" : "Show"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
