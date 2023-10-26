import React, { useEffect, useState } from 'react';

const About = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log('page rendered');
		console.log({ counter });
		if (counter % 2 === 0) {
			alert("Counter is divisible by 2")
		}
	}, []);

	const myName = 'Jerome larua';
	return (
		<button id="counter" className="text-white w-52 bg-slate-900" onClick={() => setCounter((prev) => prev + 1)}>
			{counter}
		</button>
	);
};

export default About;
