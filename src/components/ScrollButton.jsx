import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollButton = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		showButton && (
			<span className="w-10 h-10 cursor-pointer rounded-full fixed text-lg bottom-4 right-4 z-[200]  bg-blue-700 text-white flex justify-center items-center" onClick={goToTop}>
				<FaAngleUp />
			</span>
		)
	);
};

export default ScrollButton;
