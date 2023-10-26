import React from 'react';

const Footer = () => {
	return (
		<footer className=" w-full px-4 py-10 text-lg">
			<div className="flex flex-col  justify-start py-6">
				<div className="flex flex-col  justify-start">
					<p className="text-gray-200">
						<span className="text-red-500 mb-10">Made with ❤️ by </span>
						<a href="https://www.facebook.com/panfilo.macantan/">Panfilo P. Macantan</a>
					</p>
				</div>
				<div>
					<p className="text-gray-200">
						<span className="text-red-500 mb-10">Powered by </span>
						<a href="https://www.youtube.com/">Youtube</a>
					</p>
				</div>

				<div>
					<p className="text-gray-200">
						<span className="text-red-500 mb-10">API by </span>
						<a href="https://rapidapi.com/">RapidAPI</a>
					</p>
				</div>

				<div>
					<p className="text-gray-200">
						<span className="text-red-500 mb-10">Hosted by </span>
						<a href="https://www.netlify.com/">Netlify</a>
					</p>
				</div>

				<p className="text-red-500 mb-10">@{new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;
