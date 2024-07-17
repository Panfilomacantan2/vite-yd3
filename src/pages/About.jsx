import React, { useEffect, useState } from 'react';
import { useUserStore } from '../store/userStore';
import axios from 'axios';

const About = () => {
	const { count, incrementCount, decrementCount, fetchAPI } = useUserStore((state) => state);

	const url = 'https://api.consumet.org/movies/flixhq/servers';
	const results = async () => {
		try {
			const { data } = await axios.get(url, { params: { episodeId: '10766', mediaId: 'tv/watch-rick-and-morty-39480' } });
			return data;
		} catch (err) {
			throw new Error(err.message);
		}
	};

	console.log(results);

	return (
		<>
			<h1 className="text-center text-7xl mb-20">{count}</h1>
			<div className="gap-2 flex items-center justify-center">
				<button id="counter" className="text-white px-8 py-2 bg-red-900" onClick={() => count > 0 && decrementCount()}>
					-
				</button>

				<button id="counter" className="text-white px-8 py-2 bg-teal-900" onClick={() => incrementCount()}>
					+
				</button>
			</div>
		</>
	);
};

export default About;
