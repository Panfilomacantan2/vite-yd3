import React, { useContext, createContext, useState, useEffect } from 'react';

const StorageContext = createContext();

const StorageProvider = ({ children }) => {
	const [searchHistory, setSearchHistory] = useState([]);

	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('items')) || [];

		if (storage.length !== searchHistory.length) {
			setSearchHistory(storage);
		}
	}, [searchHistory.length]);

	const addSearchItem = (item) => {
		setSearchHistory((prevSearchHistory) => {
			const updatedSearchHistory = [...prevSearchHistory, item];
			localStorage.setItem('items', JSON.stringify(updatedSearchHistory));
			return updatedSearchHistory;
		});
	};

	return <StorageContext.Provider value={{ searchHistory, setSearchHistory: addSearchItem }}>{children}</StorageContext.Provider>;
};

const useStorage = () => {
	const context = useContext(StorageContext);

	if (!context) {
		throw new Error('useStorage must be used within a StorageProvider');
	}

	return context;
};

export { StorageProvider, useStorage };
