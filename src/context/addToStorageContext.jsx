import React, { useContext, createContext, useState, useEffect } from 'react';

const StorageContext = createContext();

const StorageProvider = ({ children }) => {
	const [searchHistory, setSearchHistory] = useState([]);

	useEffect(() => {
		let storage = JSON.parse(localStorage.getItem('items'))

		if (storage) {
			setSearchHistory(storage);
		}
	}, []);

	return <StorageContext.Provider value={{ searchHistory, setSearchHistory }}>{children}</StorageContext.Provider>;
};
const useStorage = () => {
	const context = useContext(StorageContext);

	if (!context) {
		throw new Error('useStorage must be used within a addToStorageProvider');
	}

	return context;
};

export { StorageProvider, useStorage };
