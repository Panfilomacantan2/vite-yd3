import { Home } from './pages';
import { Header, Hero, Footer, MyLocation } from './components';
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
