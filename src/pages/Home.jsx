import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { youtube_parser } from '../utils';
import { CgArrowRight } from 'react-icons/cg';
import { HiDownload } from 'react-icons/hi';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStorage } from '../context/addToStorageContext';
import { useDarkMode } from '../context/darkMode';

const Home = () => {
	const inputRef = useRef(null);
	const [urlSearch, setUrlSearch] = useState(null);
	const [videoId, setVideoId] = useState('');

	const { setSearchHistory } = useStorage();
	const { darkMode } = useDarkMode();

	console.log({ darkMode });

	function handleSearch(e) {
		e.preventDefault();

		if (!inputRef.current.value) {
			toast.error('Please provide a youtube link.', {
				position: 'top-right',
				autoClose: 5000,
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
					autoClose: 5000,
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
		<div className={`${darkMode ? 'dark:bg-slate-800' : null} min-h-screen w-full  py-10 px-8 rounded-md mt-20`}>
			<form onSubmit={handleSearch} className="w-full md:w-[600px] mx-auto flex">
				<input className=" border-red-800  border-4 border-r-0 px-5 py-4 outline-none w-full" type="text" placeholder="Paste the URL here..." name="urlSearch" ref={inputRef} />
				<button className=" bg-red-700 hover:bg-red-800 text-slate-50 border-none py-2 px-6 flex justify-center items-center " type="submit">
					<CgArrowRight className="text-white text-2xl hover:translate-x-1 duration-300" />
				</button>
			</form>
			<p className="text-center mt-5 text-white text-lg">
				Please Choose your favorite song. <span className="text-red-500">Download here.</span>
			</p>

			{urlSearch && (
				<div className="space-y-12 mt-12 w-full">
					{videoId && <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="youtube thumbnail" className="w-full max-w-md rounded-md border-dashed mx-auto" />}

					<a
						rel="noreferrer"
						target="_blank"
						href={urlSearch}
						className="w-full px-7 py-3 bg-red-700 text-white rounded-md  text-center font-semibold hover:bg-red-800 cursor-pointer flex justify-center items-center gap-2 lg:max-w-md mx-auto"
					>
						<HiDownload className="text-xl" /> Download
					</a>
				</div>
			)}
		</div>
	);
};

export default Home;
