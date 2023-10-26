import React, { useState, useEffect } from 'react';
import { ShowFrame } from '.';
import { useStorage } from '../context/addToStorageContext';
import { useDarkMode } from '../context/darkMode';

const SearchHistory = () => {
	const { searchHistory, setSearchHistory } = useStorage();
	const { darkMode } = useDarkMode();

	const [showFrame, setShowFrame] = useState(false);

	return (
		<div className={` ${darkMode ? 'dark-mode' : 'light-mode'} w-full px-6 py-6 `}>
			<h1 className="text-right text-white text-2xl">
				Length: <span className=" text-red-600">{searchHistory.length}</span>
			</h1>
			<h1 className="text-gray-200 text-3xl my-5 font-medium text-center">
				<span className="text-red-500 mb-2 block">History</span>

				<p className="text-sm  text-gray-300">You can watch video from your search history</p>
			</h1>
			<div
				className="grid grid-cols-1 sm:grid-cols-2
			 md:grid-cols-4 lg:grid-cols-6 gap-4"
			>
				<ShowFrame setShowFrame={setShowFrame} showFrame={showFrame} searchHistory={searchHistory} />

				{showFrame && (
					<div className="flex items-center justify-center h-screen fixed top-0 left-0 w-full bg-slate-100" onClick={() => setShowFrame(!showFrame)}>
						<YoutubeViewer searchHistory={searchHistory} />
					</div>
				)}
			</div>
		</div>
	);
};

const YoutubeViewer = ({ searchHistory }) => {
	const firstVideo = searchHistory[0];
	console.log(searchHistory[0]);

	// <iframe
	// 	key={index}
	// 	src={`https://www.youtube.com/embed/${firstVideo}`}
	// 	title="YouTube video player"
	// 	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	// 	allowFullScreen
	// 	className="w-full md:w-5/6 md:h-5/6"
	// ></iframe>;

	return (
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/AO8i0IuM0G4?si=p6FV9zPgDil9rR8B"
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	);
};

export default SearchHistory;
