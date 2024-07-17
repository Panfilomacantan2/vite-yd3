import React from 'react';

const AutoFitLayout = ({ children, className }) => {
	return <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-10 md:px-20 ${className}`}>{children}</div>;
};

export default AutoFitLayout;
