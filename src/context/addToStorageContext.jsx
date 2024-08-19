import React, { useContext, createContext, useState, useEffect } from 'react';

const StorageContext = createContext();

const StorageProvider = ({ children }) => {
	const [searchHistory, setSearchHistory] = useState([]);

	useEffect(() => {
		// Safely retrieve items from localStorage
		let storedItems = [];
		try {
			const storage = localStorage.getItem('items');
			storedItems = storage ? JSON.parse(storage) : [];
		} catch (error) {
			console.error('Failed to parse localStorage items:', error);
		}

		// Update state if the stored items differ from the current state
		if (JSON.stringify(storedItems) !== JSON.stringify(searchHistory)) {
			setSearchHistory(storedItems);
		}
	}, []);

	const addSearchItem = (item) => {
		setSearchHistory((prevSearchHistory) => {
			const updatedSearchHistory = [...prevSearchHistory, item];
			localStorage.setItem('items', JSON.stringify(updatedSearchHistory));
			return updatedSearchHistory;
		});
	};

	return (
		<StorageContext.Provider value={{ searchHistory, setSearchHistory: addSearchItem }}>
			{children}
		</StorageContext.Provider>
	);
};

const useStorage = () => {
	const context = useContext(StorageContext);

	if (!context) {
		throw new Error('useStorage must be used within a StorageProvider');
	}

	return context;
};

export { StorageProvider, useStorage };
