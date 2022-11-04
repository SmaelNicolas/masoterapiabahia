import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home/Home"));
const Benefits = lazy(() => import("../pages/Benefits/Benefits"));
const Treatment = lazy(() => import("../pages/Treatment/Treatment"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

export const Navigation = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/beneficios' element={<Benefits />} />
				<Route exact path='/tratamientos' element={<Treatment />} />
				<Route exact path='/contacto' element={<Contact />} />
			</Routes>
		</Suspense>
	);
};
