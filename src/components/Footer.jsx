import React from 'react';

const Footer = () => {
	return (
		<footer className=" w-full px-6 pt-10 text-sm">
			<div className="flex flex-col md:text-center  justify-center py-6">
				<div className="flex flex-col">
					<p className="text-gray-200">
						<span className="text-sky-500 mb-10">Made with ❤️ by </span>
						<a href="https://www.facebook.com/panfilo.macantan/" target="_blank" className="text-slate-800">
							{' '}
							Panfilo P. Macantan
						</a>
					</p>
				</div>
				<div>
					<p className="text-gray-200">
						<span className="text-sky-500 mb-10">Powered by </span>
						<a href="https://www.youtube.com/" target="_blank" className="text-slate-800">
							Youtube
						</a>
					</p>
				</div>

				<div>
					<p className="text-gray-200">
						<span className="text-sky-500 mb-10">API by </span>
						<a href="https://rapidapi.com/" target="_blank" className="text-slate-800">
							RapidAPI
						</a>
					</p>
				</div>

				<div>
					<p className="text-gray-200">
						<span className="text-sky-500 mb-10">Hosted by </span>
						<a href="https://www.netlify.com/" target="_blank" className="text-slate-800">
							Vercel
						</a>
					</p>
				</div>

				<p className="text-sky-500">&copy;{new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;
