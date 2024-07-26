import { ImDownload } from 'react-icons/im';
import { MdOutlineHistory } from 'react-icons/md';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();

	const path = {
		'/': '/history',
		'/history': '/',
		'/search': '/',
	};

	const pathname = path[location.pathname];

	console.log(pathname);

	return (
		<nav className=" z-10 flex justify-between items-center w-full bg-slate-700 fixed top-0 left-0 px-5 md:px-20 py-5 shadow-lg">
			<Link to="/" className="flex items-center justify-start gap-x-2">
				<span className="bg-slate-100 p-2 rounded-md">
					<ImDownload className="text-gray-800 text-xl" />
				</span>
				<p className="text-white">Shesh.</p>
			</Link>

			<ul>
				<li className="inline-block">
					<Link to={pathname} className="flex items-center justify-center text-white hover:bg-sky-600 bg-sky-500 px-4 py-[6px] gap-1 rounded-md text-[14px]">
						<IoIosArrowRoundBack size={18} /> {''} <span>Back</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
