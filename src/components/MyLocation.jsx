import React, { useEffect, useState } from 'react';

const MyLocation = () => {
	const [locationInfo, setLocationInfo] = useState(null);

	useEffect(() => {
		getUserLocation();
	}, []);

	const getUserLocation = () => {
		// get longitude and latitude coordinates
		navigator.geolocation?.getCurrentPosition((position) => {
			const { longitude, latitude } = position.coords;

			// get city name from coordinates
			fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
				.then((res) => res.json())
				.then((data) => {
					setLocationInfo(data);
				});
		});
	};

	const location = (
		<div className="px-6 py-6">
			<div className="text-gray-300 flex justify-center items-center font-medium">
				<span className="flex h-3 w-3 relative mr-2">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
				</span>
				<p>{locationInfo && locationInfo.city}</p>
				&nbsp;
				<p>({locationInfo && locationInfo.countryCode})</p>
				&nbsp;
				<p>{locationInfo && locationInfo.principalSubdivision}</p>
			</div>
		</div>
	);

	return location;
};

export default MyLocation;
