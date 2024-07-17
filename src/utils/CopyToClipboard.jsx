import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';

const Clipboard = ({ videoId, children }) => {
	const [textToCopy, setTextToCopy] = useState(`https://www.youtube.com/watch?v=${videoId}`);

	const [copyStatus, setCopyStatus] = useState('');

	const handleCopy = () => {
		setCopyStatus('Copied!');
		setTimeout(() => {
			setCopyStatus('');
		}, 2000); // Reset status after 2 seconds
	};

	const copiedLink = () => {
		return (
			<div className="flex items-center gap-2">
				<MdOutlineContentCopy />
				<span>Copied!</span>
			</div>
		);
	};

	return (
		<div className="mt-4">
			<CopyToClipboard text={textToCopy} onCopy={handleCopy}>
				<button className={`flex items-center justify-center gap-x-1 text-[16px] ${copyStatus ? 'bg-teal-600' : 'bg-sky-600'} text-white px-2 py-1 rounded-md`}>
					{copyStatus ? <FaCheck /> : <MdOutlineContentCopy />}
					{copyStatus ? 'copied' : 'copy'}
				</button>
			</CopyToClipboard>
		</div>
	);
};

export default Clipboard;
