import React, { useEffect, useState } from 'react';
const MyLocation = () => {
	const [locationInfo, setLocationInfo] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		// console.log({ loading });
		getUserLocation();
		// console.log({ loading });
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
					setLoading(false);
				});
		});
	};

	const location = (
		<div className="px-6 py-6 ">
			<div className="rounded-md flex justify-center items-center font-thin  gap-2  py-4 px-2">
				<span className="flex h-3 w-3 relative">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
				</span>
				{loading && 'Loading...'}
				<p className="text-sm text-muted-foreground">
					{locationInfo && locationInfo.city}
					&nbsp;
					{locationInfo && locationInfo.countryCode}
					&nbsp;
					{locationInfo && locationInfo.principalSubdivision}
				</p>
			</div>
		</div>
	);

	return location;
};

export default MyLocation;
