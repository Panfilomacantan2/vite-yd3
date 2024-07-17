import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { youtube_parser } from '../utils';
import { CgArrowRight } from 'react-icons/cg';
import { HiDownload } from 'react-icons/hi';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStorage } from '../context/addToStorageContext';
import { useDarkMode } from '../context/darkMode';
import { useUserStore } from '../store/userStore';

const Home = () => {
	const inputRef = useRef(null);
	const [urlSearch, setUrlSearch] = useState(null);
	const [videoId, setVideoId] = useState('');

	const { setSearchHistory } = useStorage();
	const { darkMode } = useDarkMode();

	const { count, incrementCount } = useUserStore();

	// console.log({ count });
	console.log(videoId);

	function handleSearch(e) {
		e.preventDefault();

		if (!inputRef.current.value) {
			toast.error('Please provide a youtube link.', {
				position: 'top-right',
				autoClose: 2000,
				ProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: false,
			});
			console.log(inputRef.current.value);
			return;
		}
		setUrlSearch(inputRef.current.value);

		console.log(inputRef.current.value);

		const youtubeID = youtube_parser(inputRef.current.value);

		setVideoId(youtubeID);

		//  add to localStorage
		const items = JSON.parse(localStorage.getItem('items')) || [];

		if (items.includes(youtubeID)) {
			toast.error(`${youtubeID} already exists`);
			return;
		}

		const options = {
			method: 'GET',
			url: 'https://youtube-mp36.p.rapidapi.com/dl',
			params: { id: youtubeID },
			headers: {
				'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
				'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setUrlSearch(response.data.link);

				toast.success('Download link generated successfully', {
					position: 'top-right',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

				items.push(youtubeID);
				localStorage.setItem('items', JSON.stringify(items));

				setSearchHistory((prevSearch) => [...prevSearch, youtubeID]);
			})
			.catch(function (error) {
				console.error(error);
			});

		inputRef.current.value = '';
	}

	return (
		<div className={` min-h-screen w-full  py-10 px-6 rounded-md mt-5`}>
			<form onSubmit={handleSearch} className="group w-full md:w-[600px] mx-auto flex">
				<input className=" border-sky-800  border-4 border-r-0 px-5 py-4 outline-none w-full" type="text" placeholder="Paste the URL here..." name="urlSearch" ref={inputRef} />
				<button className=" bg-sky-700 hover:bg-sky-800 text-slate-50 border-none py-2 px-6 flex justify-center items-center " type="submit">
					<CgArrowRight className="text-white text-2xl group-hover:translate-x-1 duration-300" />
				</button>
			</form>
			<p className="text-center mt-5 text-slate-700 text-[14px]">
				Please Choose your favorite song. <span className="text-sky-500">Download here.</span>
			</p>

			<div className="space-y-5 mt-12 w-full flex justify-center items-center flex-col">
				{!videoId ? (
					<div className="w-full md:w-[520px] h-60 bg-gray-100 rounded-md flex justify-center items-center border-dashed border-2 border-slate-400">
						<p className="text-slate-400 text-[14px]">Video Preview Goes Here!</p>
					</div>
				) : (
					<img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="youtube thumbnail" className="w-full max-w-md rounded-md border-dashed mx-auto" loading="lazy" />
				)}

				<a
					rel="noreferrer"
					target="_blank"
					href={urlSearch}
					className={`w-full px-7 py-3 bg-sky-700 text-white rounded-md  text-center font-semibold hover:bg-sky-800  flex justify-center items-center gap-2 lg:max-w-md mx-auto ${!videoId && 'cursor-not-allowed'}`}
				>
					Download
				</a>
			</div>
		</div>
	);
};

export default Home;
