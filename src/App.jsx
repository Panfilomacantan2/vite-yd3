import { Home } from './pages';
import { Header, Hero, Footer, MyLocation } from './components';
import ScrollButton from './components/ScrollButton';
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import Loading from './components/Loading';

const App = () => {
	const { isSignedIn, user, isLoaded } = useUser();

	if (!isLoaded) {
		return <Loading />;
	}

	// check if not logged in, redirect to login page
	if (!user && !isSignedIn) {
		return <Navigate to="/sign-in" />;
	}

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
