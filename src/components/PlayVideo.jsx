import React from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSearchVideoUrl } from '../context/searchContext';

const PlayVideo = () => {
	const { searchUrl } = useSearchVideoUrl();

	console.log({ searchUrl });

	return <ReactPlayer url={`https://www.youtube.com/watch?v=${searchUrl}`} controls volume autoplay />;
};

export default PlayVideo;
