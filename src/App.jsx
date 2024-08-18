import { Home } from './pages';
import { Header, Hero, Footer, MyLocation } from './components';
import ScrollButton from './components/ScrollButton';

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Home />
			<Footer />
			<MyLocation />
			<ScrollButton />
		</>
	);
};

export default App;
