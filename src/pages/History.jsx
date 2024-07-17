import React, { useEffect, useState } from 'react';
import AutoFitLayout from '../components/AutoFitLayout';
import { Image } from '@mantine/core';
import { useStorage } from '../context/addToStorageContext';
import { IoMdLink } from 'react-icons/io';

import * as dayjs from 'dayjs';
import millify from 'millify';

import relativeTime from 'dayjs/plugin/relativeTime';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Header from '../components/Header';
import Clipboard from '../utils/CopyToClipboard';

const History = () => {
	const { searchHistory } = useStorage();
	const [videoData, setVideoData] = useState([]);

	dayjs.extend(relativeTime);

	useEffect(() => {
		const fetchData = async () => {
			const videoIds = searchHistory.join(',');
			const URL = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&key=${import.meta.env.VITE_YOUTUBE_DATA_API_KEY}&part=snippet,contentDetails,statistics,status`;

			try {
				const res = await fetch(URL);
				const data = await res.json();
				setVideoData(data.items || []);
			} catch (error) {
				console.error('Error fetching video data:', error);
			}
		};

		if (searchHistory.length > 0) {
			fetchData();
		}
	}, [searchHistory]);

	console.log({ videoData });

	return (
		<>
			<Header />
			<AutoFitLayout className="mt-20">
				{videoData.map((video, idx) => (
					<div className="group bg-gray-200 rounded-lg overflow-hidden" key={idx}>
						<Image src={video.snippet.thumbnails.maxres?.url || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} className="grayscale group-hover:grayscale-0" loading="eager" />

						<div className="px-4 py-4">
							<div>
								<h2 className="text-[14px] font-semibold">{video.snippet.title}</h2>
								{/* <p className="text-sm">{video.snippet.description}</p> */}
							</div>

							<div>
								<div className="flex gap-x-2 mt-2">
									<p className="flex items-center justify-center text-[12px] text-gray-600 font-bold">
										<AiOutlineLike className="text-lg" /> {millify(video.statistics.likeCount)} likes
									</p>
									<p className="flex items-center justify-center text-[12px] text-gray-600 font-bold">
										<AiOutlineFieldTime className="text-lg" />
										{dayjs(video.snippet.publishedAt).fromNow()}
									</p>
								</div>

								<Clipboard videoId={video.id} />
							</div>
						</div>
					</div>
				))}
			</AutoFitLayout>
		</>
	);
};

export default History;
