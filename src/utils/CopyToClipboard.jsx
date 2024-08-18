import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { useToast } from '@/components/ui/use-toast';

const Clipboard = ({ videoId, children }) => {
	const [textToCopy, setTextToCopy] = useState(`https://www.youtube.com/watch?v=${videoId}`);

	const [copyStatus, setCopyStatus] = useState('');
	const { toast } = useToast();

	const handleCopy = () => {
		setCopyStatus('Copied!');

		toast({
			title: 'Copied to clipboard',
			description: 'The link has been copied to your clipboard.',
		});

		setTimeout(() => {
			setCopyStatus('');
		}, 2000); // Reset status after 2 seconds
	};

	return (
		<div className="absolute bottom-2 right-2">
			<CopyToClipboard text={textToCopy} onCopy={handleCopy}>
				<button className={`flex items-center justify-center gap-x-1 text-[16px] ${copyStatus ? 'bg-teal-600' : 'bg-sky-600'} text-white px-2 py-1 rounded-md`}>
					{copyStatus ? <FaCheck /> : <MdOutlineContentCopy />}
					{/* {copyStatus ? 'copied' : 'copy'} */}
				</button>
			</CopyToClipboard>
		</div>
	);
};

export default Clipboard;
