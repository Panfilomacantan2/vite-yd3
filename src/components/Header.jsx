import { ImDownload } from 'react-icons/im';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

const Header = () => {
	const location = useLocation();

	const path = {
		'/': '/history',
		'/history': '/',
	};

	const pathname = path[location.pathname];
	// console.log(pathname);

	return (
		<nav className=" z-10 flex justify-between backdrop-blur-sm items-center w-full fixed top-0 left-0 px-5 md:px-20 py-5 shadow-sm">
			<Link to="/" className="flex items-center justify-start gap-x-2">
				<span className=" p-2 rounded-md dark:bg-white bg-foreground">
					<ImDownload className="text-xl dark:text-slate-900 text-white" />
				</span>
				<p className="text-foreground">Shesh.</p>
			</Link>

			<ul className="flex justify-center items-center gap-2">
				<li>
					<ModeToggle />
				</li>
				<li className="inline-block">
					<Link to={pathname} className="flex items-center justify-center text-white hover:bg-sky-600 bg-sky-500 px-4 py-[9px] gap-1 rounded-md text-[14px] group">
						<IoIosArrowRoundBack size={18} className="group-hover:-translate-x-1" /> {''} <span>{location.pathname === '/' ? 'View History' : 'Back'}</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
