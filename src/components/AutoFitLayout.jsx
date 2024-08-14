import React from 'react';

const AutoFitLayout = ({ children, className }) => {
	return <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 px-5 py-10 md:px-20 ${className}`}>{children}</div>;
};

export default AutoFitLayout;
