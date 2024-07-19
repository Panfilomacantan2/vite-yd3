import React from 'react';
import { AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai';

const ApiStats = ({ apiLimit }) => {
	return (
		<div className="stats stats-vertical md:stats-horizontal">
			<div className="stat place-items-center">
				<div className="stat-title">Rate Limit</div>
				<div className="stat-value">{apiLimit.rateLimit}</div>
				<div className="stat-desc flex items-center">
					<AiOutlineFieldTime className="inline-block mr-1" />
					{apiLimit.rateLimit} requests per minute
				</div>
			</div>

			<div className="stat place-items-center">
				<div className="stat-title">Rate Limit Remaining</div>
				<div className="stat-value text-sky-700">{apiLimit.rateLimitRemaining}</div>
				<div className="stat-desc flex items-center">
					<AiOutlineLike className="inline-block mr-1" />
					{apiLimit.rateLimitRemaining} downloads remaining
				</div>
			</div>
		</div>
	);
};

export default ApiStats;
