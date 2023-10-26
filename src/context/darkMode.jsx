import { createContext, useContext, useState, useEffect } from 'react';
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(null);

	// check for the media preference
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		// check for localstorage
		if (localStorage.getItem('dark-mode')) {
			setDarkMode(JSON.parse(localStorage.getItem('dark-mode')));
		}

		// add to localstorage
		if (mediaQuery.matches) {
			localStorage.setItem('dark-mode', true);
		}

		mediaQuery.addEventListener('change', (e) => {
			if (e.matches) {
				localStorage.setItem('dark-mode', true);
				setDarkMode(true);
			} else {
				localStorage.setItem('dark-mode', false);
				setDarkMode(false);
			}
		});
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);

		if (darkMode) {
			localStorage.setItem('dark-mode', false);
		} else {
			localStorage.setItem('dark-mode', true);
		}

		console.log({ darkMode });
	};

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

export function useDarkMode() {
	return useContext(DarkModeContext);
}
