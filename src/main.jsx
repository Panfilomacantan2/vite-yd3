import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, History, Search } from './pages';
import { StorageProvider } from './context/addToStorageContext';
import { SearchProvider } from './context/searchContext';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<StorageProvider>
				<SearchProvider>
					<MantineProvider theme={{}}>
						<Routes>
							<Route path="/" element={<App />} />
							<Route path="/about" element={<About />} />
							<Route path="/history" element={<History />} />
							<Route path="/search" element={<Search />} />
						</Routes>
					</MantineProvider>
				</SearchProvider>
			</StorageProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
