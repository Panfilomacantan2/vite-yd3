import Clipboard from '@/utils/CopyToClipboard';
import { useEffect, useState } from 'react';

const PopularSongs = () => {
	const [songs, setSongs] = useState([]);
	const [loading, setLoading] = useState(true);

	const API_KEY = 'YOUR_API_KEY_HERE'; // ⚠️ Keep safe on backend if possible

	useEffect(() => {
		const fetchPopularSongs = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=PH&videoCategoryId=10&maxResults=5&key=${import.meta.env.VITE_YOUTUBE_DATA_API}`,
				);
				const data = await response.json();
				setSongs(data.items || []);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching songs:', error);
				setLoading(false);
			}
		};

		fetchPopularSongs();
	}, []);

	if (loading) return <p className="text-center">Loading popular songs...</p>;

	return (
		<div className="max-w-md mx-auto p-4 mt-10">
			<h2 className="text-xl font-bold mb-4">🔥 Most Popular Songs</h2>
			<ul className="space-y-4">
				{songs.map((song) => (
					<li key={song.id} className="flex items-center gap-4 p-3 rounded-md shadow border ">
						<img src={song.snippet.thumbnails.medium.url} alt={song.snippet.title} className="w-24 h-20 rounded-md object-cover" />
						<div className="w-full">
							<h3 className="font-semibold text-xs">{song.snippet.title}</h3>
							<p className="text-xs text-gray-500 mt-1">Channel: {song.snippet.channelTitle}</p>

							<div className="relative">
								<a href={`https://www.youtube.com/watch?v=${song.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">
									Watch on YouTube
								</a>
								<div className="absolute bottom-0 right-0">
									<Clipboard videoId={song.id} />
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularSongs;
