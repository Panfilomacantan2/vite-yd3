import React from 'react';
import { Skeleton } from './ui/skeleton';

const ApiStats = ({ apiLimit }) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 p-4">
			<div className="p-4 rounded-lg flex flex-col items-center justify-center text-center min-w-72">
				<div className="shadow-none border border-border/80 rounded-md relative w-full">
					<div className="w-full">
						<div className="flex justify-center -translate-y-[1px]">
							<div className="w-full">
								<div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent`}></div>
							</div>
						</div>

						<div className="px-10 py-6">
							{!apiLimit.rateLimit ? (
								<div className="flex flex-col justify-center items-center">
									<Skeleton className="h-10 w-20 shrink-0 my-2" />
									<Skeleton className="h-4 w-3/4" />
								</div>
							) : (
								<>
									<p className="text-4xl font-bold text-sky-700 mt-2">{apiLimit.rateLimit}</p>
									<p className="text-base font-medium text-muted-foreground">Rate Limit</p>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="p-4 rounded-lg  flex flex-col items-center justify-center text-center">
				<div className="shadow-none border border-border/80 rounded-md relative min-w-60">
					<div className="w-full">
						<div className="flex justify-center -translate-y-[1px]">
							<div className="w-full">
								<div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent`}></div>
							</div>
						</div>

						<div className="px-10 py-6">
							{!apiLimit.rateLimitRemaining ? (
								<div className="flex flex-col justify-center items-center">
									<Skeleton className="h-10 w-20 shrink-0 my-2" />
									<Skeleton className="h-4 w-3/4" />
								</div>
							) : (
								<>
									<p className="text-4xl font-bold text-sky-700 mt-2">{apiLimit.rateLimitRemaining}</p>
									<p className="text-base font-medium text-muted-foreground">Downloads Remaining</p>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApiStats;
