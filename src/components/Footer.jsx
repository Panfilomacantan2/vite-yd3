import React from 'react';

const Footer = () => {
	return (
		<footer className=" w-full px-6 pt-10 text-sm">
			<div className="flex flex-col md:text-center text-muted-foreground justify-center py-6">
				<div className="flex flex-col">
					<p>
						<span>Made with ❤️ by </span>
						<a href="https://www.facebook.com/panfilo.macantan/" target="_blank">
							{' '}
							Panfilo P. Macantan
						</a>
					</p>
				</div>
				<div>
					<p>
						<span>Powered by </span>
						<a href="https://www.youtube.com/" target="_blank">
							Youtube
						</a>
					</p>
				</div>

				<div>
					<p>
						<span>API by </span>
						<a href="https://rapidapi.com/" target="_blank">
							RapidAPI
						</a>
					</p>
				</div>

				<div>
					<p>
						<span>Hosted by </span>
						<a href="https://www.netlify.com/" target="_blank">
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
