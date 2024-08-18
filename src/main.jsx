import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { History } from './pages';
import { StorageProvider } from './context/addToStorageContext';
import { SearchProvider } from './context/searchContext';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<StorageProvider>
					<SearchProvider>
						<Toaster />
						<Routes>
							<Route path="/" element={<App />} />
							<Route path="/history" element={<History />} />
						</Routes>
					</SearchProvider>
				</StorageProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
