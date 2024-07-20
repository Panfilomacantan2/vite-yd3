import * as React from 'react';
import clsx from 'clsx';
import { Blurhash } from 'react-blurhash';
import { Image } from '@mantine/core';

function BlurImage({ img, video }) {
	const [visible, setVisible] = React.useState(false);
	const imgRef = React.useRef(null);
	const { src, srcSet, sizes } = img.props;

	React.useLayoutEffect(() => {
		if (imgRef.current?.complete) setVisible(true);
	}, []);

	React.useEffect(() => {
		if (!imgRef.current) return;
		if (imgRef.current.complete) return;

		let current = true;
		imgRef.current.addEventListener('load', () => {
			if (!imgRef.current || !current) return;
			setTimeout(() => {
				setVisible(true);
			}, 950);
		});

		return () => {
			current = false;
		};
	}, [src, srcSet, sizes]);

	console.log(video);

	return (
		// todo! return the image to history and return the img prop to be able to use it for inspecting the current of image
		<>
			<Image ref={imgRef} src={video?.snippet?.thumbnails?.maxres?.url || `https://img.youtube.com/vi/${video?.id}/maxresdefault.jpg`} className="h-full grayscale group-hover:grayscale-0" loading="lazy" />

			{!visible && (
				<div className="absolute inset-0 flex items-center justify-center">
					<Blurhash hash="L5H2EC=PM+yV0g-mq.wG9c010J}I" width="100%" height="100%" resolutionX={32} resolutionY={32} />
				</div>
			)}
		</>
	);
}

export { BlurImage };
