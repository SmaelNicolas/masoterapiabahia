// import { Navbar } from "./components/Navbar/Navbar";
import { NavbarResponsive } from "./components/NavbarResponsive/NavbarResponsive";
import { Navigation } from "./navigation/Navigation";

function App() {
	return (
		<div className='app--container '>
			{/* <Navbar /> */}
			<NavbarResponsive />
			<Navigation />
		</div>
	);
}

export default App;
