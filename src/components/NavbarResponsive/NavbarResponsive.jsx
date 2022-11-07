import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarResponsive.css";

const sections = [
	{ name: "inicio", path: "/" },
	{ name: "beneficios", path: "/beneficios" },
	{ name: "tratamiento", path: "/tratamientos" },
	{ name: "contacto", path: "/contacto" },
];

export const NavbarResponsive = () => {
	const [click, setClick] = useState(false);

	const closeMenu = () => {
		setClick(false);
	};

	const renderLinks = () => {
		return sections.map((section) => (
			<Link
				key={section.name}
				to={section.path}
				onClick={closeMenu}
				className='menuResponsiveLink'>
				{section.name}
			</Link>
		));
	};

	return (
		<nav className='navbar--responsive'>
			<div>Fabio Girolami</div>
			<div
				onClick={() => setClick(!click)}
				className={`menuResponsive ${click ? "active" : ""}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div
				className={`menuResponsiveList ${
					click ? "showResponsiveList" : ""
				}`}>
				{renderLinks()}
			</div>
		</nav>
	);
};
