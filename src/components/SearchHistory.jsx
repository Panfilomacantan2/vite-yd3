import React, { useState, useEffect } from 'react';
import { useStorage } from '../context/addToStorageContext';
import { PlayVideo } from './';

const SearchHistory = () => {
	const { searchHistory, setSearchHistory } = useStorage();
	const [showFrame, setShowFrame] = useState(false);

	return (
		<div className={`  w-full px-6 py-6 `}>
			<h1 className="text-right text-white text-2xl">
				Length: <span className=" text-red-600">{searchHistory.length}</span>
			</h1>
			<h1 className="text-gray-200 text-3xl my-5 font-medium text-center">
				<span className="text-red-500 mb-2 block">History</span>

				<p className="text-lg text-gray-300">You can watch video from your search history</p>
			</h1>
			<div>
				<ShowFrame setShowFrame={setShowFrame} showFrame={showFrame} searchHistory={searchHistory} />
			</div>

			{showFrame && (
				// position in the center of the screen

				<div class="w-full min-h-screen absolute bg-slate-800/3 grid place-items-center z-10">
					<PlayVideo />
				</div>
			)}
		</div>
	);
};

export default SearchHistory;
