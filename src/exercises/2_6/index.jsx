import React, { useEffect, useRef, useState } from "react";

/**
 * ## Destructuring
 *
 * 1. Use the prepared Components to output the props
 * - play with ComponentA to understand how it works
 * - play with ComponentB to understand how it works
 * - play with ComponentC to understand how it works
 * - play with ComponentD to understand how it works
 * 2. Build your own Components
 * - ComponentE should add "background" and "color" to the "style" attribute
 * - ComponentF should add "src" and "alt" to an "img" and "title" to an "h3"
 */

const Code = ({ code }) => (
	<pre>
		<code>{JSON.stringify(code, null, 4)}</code>
	</pre>
);

const HTMLOutput = ({ outerRef }) => {
	const [html, setHTML] = useState(null);

	useEffect(() => {
		if (outerRef.current) {
			const { outerHTML } = outerRef.current;
			setHTML(outerHTML);
		}
	}, [outerRef]);

	return (
		<div>
			<pre>
				<code>{html}</code>
			</pre>
		</div>
	);
};

/**
 * This Component outputs all props that can be stringified (i.e. functions are ignored)
 */
const ComponentA = (props) => {
	return <Code code={props} />;
};

/**
 * This Component uses object destructuring. It only outputs the "rest"
 */
const ComponentB = ({ foo, animal, age, ...rest }) => {
	return <Code code={rest} />;
};

/**
 * This Component passes all props to the dom-element
 */
const ComponentC = (props) => {
	const ref = useRef(null);

	return (
		<div>
			<div ref={ref} {...props} />
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

/**
 * This Component picks "color" and adds it to the style attribute
 */
const ComponentD = ({ color, style = {}, ...rest }) => {
	const ref = useRef(null);
	return (
		<div>
			<div ref={ref} {...rest} style={{ ...style, color }} />
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

/**
 * This Component picks "color" and "background" and adds it to the style attribute
 * The output only shows the "style" attribute
 */
const ComponentE = ({ color, background, style, ...rest }) => {
	const ref = useRef(null);
	return (
		<div>
			<div ref={ref} {...rest} style={{ ...style, color, background }}>
				I should be {color} with a {background} background. This {color} is really pretty on
				this {background}.
			</div>
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

/**
 * This Component picks "src" and "alt" and adds it to an "img"
 * This Component picks "title" and adds it to an "h3"
 * The output does not have any attributes
 */
const ComponentF = ({ alt, src, title, paragraph, ...rest }) => {
	const ref = useRef(null);
	return (
		<div>
			<div ref={ref} {...rest}>
				<img src={src} alt={alt} />
				<h3>{title}</h3>
				<p>{paragraph}</p>
			</div>
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

const Exercise = () => {
	return (
		<div>
			<h1>Exercise 2.6</h1>
			<h2>ComponentA</h2>
			<p>All properties are passed on</p>
			<ComponentA foo="foo" bar={`BA${"r".toUpperCase()}`} />
			<ComponentA age={26} name={{ first: "Max", last: "Harrington" }} />
			<ComponentA talent="singing" songlist={38} />
			<ComponentA drink={`${"SUMMERWINE".toLowerCase()}`} />
			<h2>ComponentB</h2>
			<p>
				Some properties were removed by{" "}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring"
					target="_blank"
				>
					Object destructuring
				</a>{" "}
				and{" "}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"
					target="_blank"
				>
					rest parameters
				</a>
				.
			</p>
			<ComponentB animal="cat" age={20} name="Francis" />
			<ComponentB foo="foo" bar={`BA${"r".toUpperCase()}`} />
			<ComponentB age={26} name={{ first: "Max", last: "Harrington" }} />
			<h2>ComponentC</h2>
			<p>All properties are passed on</p>
			<ComponentC color="red" foo="foo" bar="bar" />
			<ComponentC color="hotpink" activity="movie club" day="Thursday evening" />
			<h2>ComponentD</h2>
			<p>Color is removed and added to style</p>
			<ComponentD color="green" foo="foo" bar="bar" />
			<ComponentD color="red" style={{ fontSize: "20px" }} />
			<h2>ComponentE</h2>
			<ComponentE color="blue" background="purple" />
			<ComponentE color="green" background="black" />
			<ComponentE color="white" background="hotpink" />
			<h2>ComponentF</h2>
			<ComponentF
				src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300"
				alt="A colorful passage with wooden arches"
				title="A colorful journey"
				paragraph="Life is like a box of crayons. Most people are the 8 color boxes, but what you’re really looking for are the 64 color boxes with the sharpeners on the back. I fancy myself to be a 64 color box, though I’ve got a few missing. It’s okay though, because I’ve got some more vibrant colors like periwinkle at my disposal. I have a bit of a problem though in that I can only meet the 8 color boxes. Does anyone else have that problem? I mean there are so many different colors of life, of feeling, of articulation. So when I meet someone who’s an 8 color type… I’m like, hey girl, Magenta! and she’s like, oh, you mean purple! and she goes off on her purple thing, and I’m like, no I want Magenta! ~John Mayer"
			/>
			<ComponentF
				src="https://images.unsplash.com/photo-1533984649377-c20fc524425b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
				alt="Rainbow on the beach"
				title="Sea Rainbow"
				paragraph="The rainbow is one of the most beautiful, naturally occurring phenomenons in nature. Scientifically speaking, rainbows appear in the sky when sunlight enters raindrops, causing dispersion and refraction of the light. But rainbows symbolize so much more than just a scientific anomaly.

				Rainbows hold deep meaning and significance to the individuals who discover them. People who have suffered a great personal loss, for example, are often deeply and profoundly impacted when they spot a rainbow, especially on an important day or at the time when they need to know they haven’t been forgotten."
			/>
		</div>
	);
};

export default Exercise;
