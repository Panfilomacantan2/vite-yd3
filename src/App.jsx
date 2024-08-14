import { Home, About } from './pages';
import { Header, Hero, Footer, SearchHistory, MyLocation } from './components';
import { ToastContainer } from 'react-toastify';
import ScrollButton from './components/ScrollButton';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Home />
			<Footer />
			<MyLocation />
			<ToastContainer limit={1} />
			<ScrollButton />
		</>
	);
};

export default App;
