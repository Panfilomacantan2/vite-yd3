import { Home, About } from './pages';
// Components
import { Header, Hero, Footer, SearchHistory, MyLocation } from './components';
import { ToastContainer } from 'react-toastify';

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Home />
			<SearchHistory />
			<Footer />
			<MyLocation />
			<ToastContainer />
		</>
	);
};

export default App;
