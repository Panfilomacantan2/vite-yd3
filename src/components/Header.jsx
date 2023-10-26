import React from 'react';
import { ImDownload } from 'react-icons/im';
import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';
import { useDarkMode } from '../context/darkMode';

const Header = () => {
	const { darkMode: isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<nav className="flex justify-between w-full bg-slate-800 fixed top-0 left-0 px-6 py-6 shadow-lg">
			<div className="flex items-center justify-start">
				<ImDownload className="text-white text-3xl" />
				<span className="inline-block font-normal ml-2 text-2xl text-slate-100">ReacTube</span>
			</div>

			<div className="bg-gray-700 p-1 rounded-md flex items-center justify-end cursor-pointer space-x-3">
				{isDarkMode ? <BiSun className="text-slate-300 text-2xl" onClick={toggleDarkMode} /> : <BiMoon className="text-slate-300 text-2xl" onClick={toggleDarkMode} />}
			</div>
		</nav>
	);
};

export default Header;
