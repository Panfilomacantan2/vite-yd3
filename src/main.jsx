import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StorageProvider } from './context/addToStorageContext';
import { About } from './pages';
import { DarkModeProvider } from './context/darkMode';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<DarkModeProvider>
				<StorageProvider>
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</StorageProvider>
			</DarkModeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
