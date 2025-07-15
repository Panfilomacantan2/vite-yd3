import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { History } from './pages';
import { StorageProvider } from './context/addToStorageContext';
import { SearchProvider } from './context/searchContext';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';
import { ClerkProvider } from '@clerk/clerk-react';
import Login from './pages/Login';
import Signup from './pages/Signup';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE;

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
			<BrowserRouter>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<StorageProvider>
						<SearchProvider>
							<Toaster />
							<Routes>
								<Route path="/" element={<App />} />
								<Route path="/history" element={<History />} />
								<Route path="/sign-in" element={<Login />} />
								<Route path="/sign-up" element={<Signup />} />
							</Routes>
						</SearchProvider>
					</StorageProvider>
				</ThemeProvider>
			</BrowserRouter>
		</ClerkProvider>
	</React.StrictMode>,
);
