const ShowFrame = ({ searchHistory, setShowFrame, showFrame }) => {
	return searchHistory?.map((videoId) => {
		return (
			<img
				key={videoId}
				src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
				alt="youtube thumbnail"
				className="w-full h-[174px] object-cover rounded-md cursor-pointer hover:scale-105 shadow-sm hover:shadow-gray-700"
				onClick={() => setShowFrame(!showFrame)}
			/>
		);
	});
};

export default ShowFrame;
