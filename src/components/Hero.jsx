import React from 'react';
import { BsYoutube, BsFilm } from 'react-icons/bs';
import { AiOutlineGift, AiOutlineCheck } from 'react-icons/ai';
import { useDarkMode } from '../context/darkMode';

const Hero = () => {
	const { darkMode } = useDarkMode();
	return (
		<div className="w-full px-5 sm:px-10 md:px-20 ">
			{/* Featured */}
			<div className={`mt-32`}>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
					<div className="flex flex-col justify-center items-center bg-orange-400 rounded-md p-5 hover:scale-105">
						<div className="flex justify-center items-center">
							<AiOutlineGift className="feature-icon" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<h1 className="feature-text">Free Download</h1>

							<p className="text-gray-300 text-center mt-2">No ads, no interruptions</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center bg-blue-400 rounded-md p-5 hover:scale-105">
						<div className="flex justify-center items-center">
							<BsFilm className="feature-icon" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<h1 className="feature-text">Audio</h1>

							<p className="text-gray-300 text-center mt-2">Directly Download Music.</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center bg-green-400 rounded-md p-5 hover:scale-105">
						<div className="flex justify-center items-center">
							<AiOutlineCheck className="feature-icon" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<h1 className="feature-text">Easy Download</h1>

							<p className="text-gray-300 text-center mt-2">Fully compatible with all browsers.</p>
						</div>
					</div>
				</div>
			</div>

			<h1 className=" text-gray-200 text-3xl mt-20 font-medium text-center">
				Download Audio from
				<span className="text-red-500 ml-2">
					YouTube <BsYoutube className="inline" />
				</span>
			</h1>
			<p className="text-gray-300 text-center mt-5">Paste a YouTube link or type in the search box above, select the format you want to convert to, then hit download.</p>
		</div>
	);
};

export default Hero;
