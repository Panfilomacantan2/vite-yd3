import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { featuredText } from '@/constant';
import { cn } from '@/lib/utils';
import { Download, AudioLines, Check, Infinity } from 'lucide-react';

const Hero = () => {
	const icons = [
		<Download className="w-8 h-8 text-foreground" />,
		<AudioLines className="w-8 h-8 text-foreground" />,
		<Check className="w-8 h-8 text-foreground" />,
		<Infinity className="w-8 h-8 text-foreground" />,
	];

	return (
		<div className="w-full px-5 sm:px-10 md:px-20 py-20">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 text-center py-20">
				{featuredText?.map((featured, idx) => {
					return (
						<div key={idx} className={cn(`shadow-none border border-border/80 rounded-md relative shrink-0 flex-1`, {})}>
							<div className="flex justify-center -translate-y-[1px]">
								<div className="w-full">
									<div
										className={cn(`h-[1px] bg-gradient-to-r from-transparent to-transparent  w-full`, {
											'bg-gradient-to-r from-transparent via-pink-600 to-transparent': featured.color === 'pink',
											'bg-gradient-to-r from-transparent via-teal-600 to-transparent': featured.color === 'teal',
											'bg-gradient-to-r from-transparent via-purple-600 to-transparent': featured.color === 'purple',
											'bg-gradient-to-r from-transparent via-yellow-600 to-transparent': featured.color === 'yellow',
										})}
									></div>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center text-center p-8">
								<div className="flex justify-center items-center w-16 h-16">{icons[idx]}</div>

								<p
									className={cn(`font-bold mb-2 text-green-600 text-xl via-md:text-3xl lg:text-2xl`, {
										'text-pink-500': featured.color === 'pink',
										'text-teal-500': featured.color === 'teal',
										'text-purple-500': featured.color === 'purple',
										'text-yellow-500': featured.color === 'yellow',
									})}
								>
									{featured.title}
								</p>
								<p className="mb-0 text-base leading-5 text-foreground/70">{featured.description}</p>
							</div>
						</div>
					);
				})}
			</div>

			<h1 className=" text-foreground text-3xl mt-20 font-medium text-center">
				Download Audio from
				<span className="text-red-500 ml-2">
					YouTube <BsYoutube className="inline" />
				</span>
			</h1>
			<p className="text-muted-foreground text-base leading-5 text-center mt-3">Paste a YouTube link or type in the search box above, then hit download.</p>
		</div>
	);
};

export default Hero;
