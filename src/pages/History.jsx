import React, { useEffect, useState } from 'react';
import AutoFitLayout from '../components/AutoFitLayout';
import { Image } from '@mantine/core';
import { useStorage } from '../context/addToStorageContext';
import dayjs from 'dayjs';
import millify from 'millify';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Header from '../components/Header';
import Clipboard from '../utils/CopyToClipboard';
import { BlurImage } from '../components/BlurImage';
import { Blurhash } from 'react-blurhash';
import ScrollButton from '../components/ScrollButton';

const History = () => {
	const { searchHistory } = useStorage();
	// const searchHistory = [];
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
				// setVideoData([]);
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

	useEffect(() => {
		const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=sining&type=video&key=${import.meta.env.VITE_YOUTUBE_DATA_API_KEY}`;

		const searchVideo = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();

				console.log(data);
			} catch (error) {
				console.error('Error fetching video data:', error);
			} finally {
				setLoading(false);
			}
		};

		searchVideo();
	}, []);

	return (
		<>
			<ScrollButton />
			<Header />

			{loading ? (
				<div className="h-screen flex flex-col items-center justify-center gap-4">
					<p className="text-gray-400">Loading...</p>
				</div>
			) : videoData.length > 0 ? (
				<div>
					<div className="text-2xl font-bold mt-28 space-y-2 px-5 md:px-20">
						<h1>Search History</h1>
						<p className="text-sm font-normal">
							{searchHistory.length} {searchHistory.length > 1 ? 'videos' : 'video'} found in search history
						</p>
					</div>

					<AutoFitLayout className="">
						{videoData?.map((video, idx) => (
							<div className="relative group bg-gray-200 rounded-lg overflow-hidden" key={idx}>
								<div className="min-h-40">
									<BlurImage img={<img src={video?.snippet?.thumbnails?.maxres?.url || `https://img.youtube.com/vi/${video?.id}/maxresdefault.jpg`} alt="Placeholder" />} video={video} />
								</div>
								{/* <Image src={video?.snippet?.thumbnails?.maxres?.url || `https://img.youtube.com/vi/${video?.id}/maxresdefault.jpg`} className="grayscale group-hover:grayscale-0" loading="lazy" /> */}

								<div className="px-4 py-4">
									<div>
										<h2 className="text-[14px] font-semibold">{video?.snippet?.title}</h2>
										{/* <p className="text-sm">{video.snippet.description}</p> */}
									</div>

									<div>
										<div className="flex gap-x-2 mt-2">
											<p className="flex items-center justify-center text-[12px] text-gray-600 font-bold">
												<AiOutlineLike className="text-lg" /> {millify(parseInt(!video?.statistics?.likeCount ? 0 : video?.statistics?.likeCount))}{' '}
												{parseInt(!video?.statistics?.likeCount ? 0 : video?.statistics?.likeCount) > 1 ? 'Likes' : 'Like'}
											</p>
											<p className="flex items-center justify-center text-[12px] text-gray-600 font-bold">
												<AiOutlineFieldTime className="text-lg" />
												{dayjs(video.snippet.publishedAt).fromNow()}
												{/* {console.log(video?.snippet?.publishedAt)} */}
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
					<p className="text-gray-400">No search history found!</p>
				</div>
			)}
		</>
	);
};

export default History;
