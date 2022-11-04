import { Link } from "react-router-dom";
import "./navbar.css";

const sections = [
	{ name: "inicio", path: "/" },
	{ name: "beneficios", path: "/beneficios" },
	{ name: "tratamiento", path: "/tratamientos" },
	{ name: "contacto", path: "/contacto" },
];
export const Navbar = () => {
	const renderLinks = () => {
		return sections.map((section) => (
			<Link key={section.name} to={section.path}>
				{section.name}
			</Link>
		));
	};

	return <nav>{renderLinks()}</nav>;
};
