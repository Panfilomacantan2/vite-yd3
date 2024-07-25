import { Home, About } from './pages';
// Components
import { Header, Hero, Footer, SearchHistory, MyLocation } from './components';
import { ToastContainer } from 'react-toastify';
import ScrollButton from './components/ScrollButton';

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
