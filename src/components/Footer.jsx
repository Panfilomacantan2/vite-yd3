import React from 'react';

const Footer = () => {
	return (
		<footer className=" w-full px-6 pt-10 text-sm">
			<div className="text-muted-foreground justify-center">
				<div className="flex space-x-2 items-center justify-center">
					<p>
						<span>Made with ❤️ by </span>
						<a href="https://www.facebook.com/panfilo.macantan/" target="_blank">
							{' '}
							panfilo.dev
						</a>
					</p>
					<p className="text-sky-500">&copy;{new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
