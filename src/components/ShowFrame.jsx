import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useSearchVideoUrl } from '../context/searchContext';

import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const ShowFrame = ({ searchHistory, setShowFrame, showFrame }) => {
	const { searchUrl, setSearchUrl } = useSearchVideoUrl();

	const slides = searchHistory?.map((videoId) => (
		<Carousel.Slide key={videoId}>
			<Image src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} onClick={() => setSearchUrl(videoId)} />
		</Carousel.Slide>
	));

	return <Carousel withIndicators>{slides}</Carousel>;
};

export default ShowFrame;
