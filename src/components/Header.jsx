import { ImDownload } from 'react-icons/im';
import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';
import { useDarkMode } from '../context/darkMode';
import { MdOutlineHistory } from 'react-icons/md';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);

	const location = useLocation();

	const { darkMode: isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<nav className=" z-10 flex justify-between items-center w-full bg-slate-700 fixed top-0 left-0 px-5 md:px-20 py-5 shadow-lg">
			<a href="/" className="flex items-center justify-start gap-x-2">
				<span className="bg-slate-100 p-2 rounded-md">
					<ImDownload className="text-gray-800 text-xl" />
				</span>
				<p className="text-white">Shesh.</p>
			</a>

			<ul>
				<li className="inline-block">
					{location.pathname === '/history' ? (
						<a href="/" className="flex items-center justify-center text-white bg-sky-500 px-4 py-[6px] gap-1 rounded-md text-[14px]">
							<IoIosArrowRoundBack size={18} /> {''} <span>Back</span>
						</a>
					) : (
						<a href="/history" className="flex items-center justify-center text-white bg-sky-500 px-4 py-[6px] gap-1 rounded-md text-[14px]">
							<MdOutlineHistory size={18} /> {''} <span>View History</span>
						</a>
					)}
				</li>
			</ul>

			{/* <label className="cursor-pointer grid place-items-center">
				<button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>
				<input type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
				<svg
					className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="5" />
					<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
				</svg>
				<svg
					className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			</label> */}
		</nav>
	);
};

export default Header;
