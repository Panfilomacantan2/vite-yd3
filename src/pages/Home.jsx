import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { youtube_parser, isValidYouTubeLink } from '../utils';
import { CgArrowRight } from 'react-icons/cg';
import 'react-toastify/dist/ReactToastify.css';
import { useStorage } from '../context/addToStorageContext';
import { ApiStats } from '../components';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
	const inputRef = useRef();
	const [urlSearch, setUrlSearch] = useState(null);
	const [videoId, setVideoId] = useState('');
	const { setSearchHistory } = useStorage();
	const [apiLimit, setApiLimit] = useState({
		rateLimit: null,
		rateLimitRemaining: null,
		rateLimitReset: null,
		freePlanResetTime: null,
	});

	const { toast } = useToast();

	const handleSearch = async (e) => {
		e.preventDefault();
		const inputValue = inputRef.current?.value.trim();

		if (!inputValue || !isValidYouTubeLink(inputValue)) {
			toast({
				title: 'Failed',
				description: 'Please enter a valid YouTube URL!',
			});
			return;
		}

		const youtubeID = youtube_parser(inputValue);

		if (!youtubeID) {
			toast({
				title: 'Failed',
				description: 'Failed to extract video ID from the URL.',
			});
			return;
		}

		setVideoId(youtubeID);

		// Safely retrieve items from localStorage
		let items = [];
		try {
			const storedItems = localStorage.getItem('items');
			items = storedItems ? JSON.parse(storedItems) : [];
		} catch (error) {
			console.error('Failed to parse localStorage items:', error);
			items = [];
		}

		if (items.includes(youtubeID)) {
			toast({
				title: 'Warning',
				description: 'This video has been downloaded already!',
			});
		} else {
			// Add the video ID to the items array
			items.push(youtubeID);
			// Save the updated items array to localStorage
			localStorage.setItem('items', JSON.stringify(items));
		}

		setSearchHistory(youtubeID);

		// API call to get the download link
		const options = {
			method: 'GET',
			url: 'https://youtube-mp36.p.rapidapi.com/dl',
			params: { id: youtubeID },
			headers: {
				'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
				'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com',
			},
		};

		try {
			const response = await axios.request(options);
			setUrlSearch(response.data.link);

			toast({
				title: 'Success',
				description: 'Video found! Click the download button to start downloading.',
			});

			checkRateLimit();
		} catch (error) {
			console.error(error);
			toast({
				title: 'Failed',
				description: 'Failed to fetch the download link. Please try again later.',
			});
		}

		inputRef.current.value = '';
	};

	const checkRateLimit = async () => {
		const options = {
			method: 'GET',
			url: 'https://youtube-mp36.p.rapidapi.com/dl',
			params: { id: '' },
			headers: {
				'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
				'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com',
			},
		};

		try {
			const response = await axios.request(options);

            if(!response.data) return

			
			const rateLimit = response.headers['x-ratelimit-request-limit'];
			const rateLimitRemaining = response.headers['x-ratelimit-request-remaining'];
			const rateLimitReset = response.headers['x-ratelimit-request-reset'];
			const freePlanResetTime = response.headers['x-ratelimit-rapid-free-plans-hard-limit-reset'];

			const rateLimitResetTime = new Date(Date.now() + freePlanResetTime * 1000).toLocaleString();

			setApiLimit({
				rateLimit,
				rateLimitRemaining,
				rateLimitReset,
				freePlanResetTime: rateLimitResetTime,
			});
		} catch (error) {
			console.error('Error fetching rate limit data:', error);
            if (error.response.status === 429) {
				toast({
					title: 'Rate Limit Exceeded',
					description: 'You have exceeded the rate limit. Please try again later.',
				});
			}
		}
	};

	useEffect(() => {
		checkRateLimit();
	}, []);

	return (
		<div className="min-h-screen w-full py-10 px-6 rounded-md mt-5">
			<div className="flex justify-center items-center text-slate-800 text-lg my-10">
				<ApiStats apiLimit={apiLimit} />
			</div>

			<form onSubmit={handleSearch} className="group w-full md:w-[600px] mx-auto flex rounded-md overflow-hidden">
				<input
					className="border-sky-800 border-4 border-r-0 px-5 py-4 outline-none w-full bg-background/80"
					type="text"
					placeholder="Paste the YouTube URL here..."
					name="urlSearch"
					ref={inputRef}
					autoComplete="off"
				/>
				<button className="bg-sky-700 hover:bg-sky-800 text-slate-50 border-none py-2 px-6 flex justify-center items-center" type="submit">
					<CgArrowRight className="text-white text-2xl group-hover:translate-x-1 duration-300" />
				</button>
			</form>

			<p className="text-center mt-5 text-muted-foreground">
				Please choose your favorite song.{' '}
				<Link to="https://www.youtube.com/" target="_blank" className="text-sky-500">
					Search here.
				</Link>
			</p>

			<div className="space-y-5 mt-12 w-full flex justify-center items-center flex-col">
				{!videoId ? (
					<div className="w-full md:w-[520px] h-60 bg-background rounded-md flex justify-center items-center border-dashed border-2 border-border">
						<p className="text-muted-foreground">Video Preview Goes Here!</p>
					</div>
				) : (
					<img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="youtube thumbnail" className="w-full md:w-[520px] rounded-md border-dashed mx-auto" loading="eager" />
				)}

				{videoId ? (
					<Link
						rel="noreferrer"
						target="_blank"
						to={urlSearch}
						className="w-full md:w-[520px] py-3 bg-sky-700 text-white rounded-md text-center font-semibold hover:bg-sky-800 flex justify-center items-center gap-2 mx-auto"
					>
						Download
					</Link>
				) : (
					<Button disabled className="w-full md:w-[520px] py-6 bg-foreground/50 text-white rounded-md text-center font-semibold cursor-not-allowed flex justify-center items-center gap-2 mx-auto">
						Download
					</Button>
				)}
			</div>
		</div>
	);
};

export default Home;
