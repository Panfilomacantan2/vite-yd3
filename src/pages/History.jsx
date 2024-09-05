import React, { useEffect, useState } from 'react';
import AutoFitLayout from '../components/AutoFitLayout';
import { useStorage } from '../context/addToStorageContext';
import dayjs from 'dayjs';
import millify from 'millify';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Header from '../components/Header';
import Clipboard from '../utils/CopyToClipboard';
import { BlurImage } from '../components/BlurImage';
import ScrollButton from '../components/ScrollButton';

const History = () => {
	const { searchHistory } = useStorage();
	const [videoData, setVideoData] = useState([]);
	const [loading, setLoading] = useState(true);

	dayjs.extend(relativeTime);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const videoIds = searchHistory.join(',');
			const URL = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&key=${import.meta.env.VITE_YOUTUBE_DATA_API_KEY}&part=snippet,contentDetails,statistics,status`;

			try {
				const res = await fetch(URL);
				const data = await res.json();
				setLoading(false);
				setVideoData(data.items || []);
			} catch (error) {
				console.error('Error fetching video data:', error);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};

		if (searchHistory.length > 0) {
			fetchData();
		} else {
			setLoading(false);
		}
	}, [searchHistory]);

	return (
		<>
			<ScrollButton />
			<Header />

			{loading ? (
				<div className="h-screen flex flex-col items-center justify-center gap-4">
					<p className="">Loading...</p>
				</div>
			) : videoData.length > 0 ? (
				<div>
					<div className="text-2xl font-bold mt-28 space-y-2 px-5 md:px-20">
						<h1>Download History</h1>
						<p className="text-sm font-normal">
							{searchHistory.length} {searchHistory.length > 1 ? 'videos' : 'video'} found in download history
						</p>
					</div>

					<AutoFitLayout className="">
						{[...videoData]?.reverse().map((video, idx) => (
							<div className="relative group rounded-lg overflow-hidden" key={idx}>
								<div className="min-h-40">
									{!video?.snippet?.thumbnails?.maxres?.url ? (
										<img src={`https://via.placeholder.com/800x450?text=Image+Not+Found`} alt="Placeholder" />
									) : (
										<BlurImage img={<img src={video?.snippet?.thumbnails?.maxres?.url} alt="Placeholder" />} video={video} />
									)}
								</div>

								<div className="px-4 py-4">
									<div>
										<h2 className="text-[14px] font-semibold">{video?.snippet?.title}</h2>
										{/* <p className="text-sm">{video.snippet.description}</p> */}
									</div>

									<div className=" text-muted-foreground">
										<div className="flex gap-x-2 mt-2">
											<p className="flex items-center justify-center text-[12px] font-bold">
												<AiOutlineLike className="text-lg" /> {millify(parseInt(!video?.statistics?.likeCount ? 0 : video?.statistics?.likeCount))}{' '}
												{parseInt(!video?.statistics?.likeCount ? 0 : video?.statistics?.likeCount) > 1 ? 'Likes' : 'Like'}
											</p>
											<p className="flex items-center justify-center text-[12px] font-bold">
												<AiOutlineFieldTime className="text-lg" />
												{dayjs(video.snippet.publishedAt).fromNow()}
											</p>
										</div>
									</div>
								</div>
								<Clipboard videoId={video?.id} />
							</div>
						))}
					</AutoFitLayout>
				</div>
			) : (
				<div className="h-screen flex flex-col items-center justify-center gap-4">
					<div className="w-[200px] h-[200px]">
						<img src="/assets/empty_download.svg" alt="empty download" className="w-full h-full" draggable="false"/>
					</div>
					<p className="text-base">No download history yet!</p>
				</div>
			)}
		</>
	);
};

export default History;
