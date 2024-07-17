import React, { useEffect } from 'react';
import { BsYoutube, BsFilm } from 'react-icons/bs';
import { AiOutlineGift, AiOutlineCheck } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { useDarkMode } from '../context/darkMode';

const Hero = () => {
	const { darkMode } = useDarkMode();
	return (
		<div className="w-full px-5 sm:px-10 md:px-20 ">
			{/* Featured */}
			<div className={`mt-32`}>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-5 text-center">
					<div className=" p-6 border border-lightBorderColor flex flex-col justify-center items-center rounded-md">
						<div className="flex justify-center items-center">
							<AiOutlineGift className="feature-icon" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<h1 className="text-lg font-bold text-lightTextColor">Free Download</h1>

							<p className=" text-lightTextColor">No ads, no interruptions</p>
						</div>
					</div>

					<div className=" p-6 border border-lightBorderColor  flex flex-col justify-center items-center  rounded-md">
						<div className="flex justify-center items-center">
							<BsFilm className="feature-icon" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<h1 className="text-lg font-bold text-lightTextColor mt-5">Audio</h1>

							<p className="text-lightTextColor">Directly Download Music.</p>
						</div>
					</div>

					<div className="p-6 border border-lightBorderColor  flex flex-col justify-center items-center  rounded-md">
						<div className="flex justify-center items-center">
							<AiOutlineCheck className="feature-icon" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<h1 className="text-lg font-bold text-lightTextColor">Easy Download</h1>

							<p className="text-lightTextColor">Fully compatible with all browsers.</p>
						</div>
					</div>

					<div className="p-6 border border-lightBorderColor  flex flex-col justify-center items-center  rounded-md">
						<div className="flex justify-center items-center">
							<FiDownload className="feature-icon" />
						</div>
						<div className="flex flex-col justify-center items-center">
							<h1 className="text-lg font-bold text-lightTextColor">Limits</h1>

							<p className="text-lightTextColor">50 Downloads per day.</p>
						</div>
					</div>
				</div>
			</div>

			<h1 className=" text-slate-800 text-3xl mt-20 font-medium text-center">
				Download Audio from
				<span className="text-red-500 ml-2">
					YouTube <BsYoutube className="inline" />
				</span>
			</h1>
			<p className="text-slate-700 text-center mt-5">Paste a YouTube link or type in the search box above, select the format you want to convert to, then hit download.</p>
		</div>
	);
};

export default Hero;
