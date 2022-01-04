export const VOWELS = ["a", "e", "i", "o", "u"];

export const random = (max, min = 0) => Math.round(Math.random() * (max - min)) + min;

export const randomWord = () => {
	const characters = random(10, 3);
	let word = "";
	for (let counter = 0; counter < characters; counter++) {
		const fizzBuzz = counter % 5 === 4 || counter % 3 === 2;
		let character = "";
		if (fizzBuzz) {
			character = VOWELS[random(VOWELS.length - 1)];
		} else {
			character = String.fromCharCode(random(90, 65)).toLowerCase();
		}

		if (counter === 0) {
			character = character.toUpperCase();
		}
		word += character;
	}
	return word;
};
