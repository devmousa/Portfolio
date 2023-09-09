import Header from "./components/Header";
import Intro from "./components/Intro";
import MouseFollower from "./components/MouseFollower";
import Separator from "./components/Separator";
import TechStack from "./components/TechStack";

const App = () => {
	return (
		<>
			<MouseFollower />
			<Header />
			<Separator />
			<Intro />
			<Separator flipped />
			<TechStack />
		</>
	);
};

export default App;
