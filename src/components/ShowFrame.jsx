import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ShowFrame = ({ searchHistory, setShowFrame, showFrame }) => {
	const options = {
		type: 'loop',
		perPage: 5,
		autoplay: true,
		snap: true,
		gap: "1rem"
	};

	return (
		<Splide options={options}>
			{searchHistory?.map((videoId) => (
				<SplideSlide key={videoId}>
					<img
						src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
						alt="youtube thumbnail"
						className="w-full h-[174px] object-cover rounded-md cursor-pointer hover:scale-105 shadow-sm hover:shadow-gray-700"
						onClick={() => setShowFrame(!showFrame)}
					/>
				</SplideSlide>
			))}
		</Splide>
	);
};

export default ShowFrame;
