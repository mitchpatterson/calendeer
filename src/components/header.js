import React from "react";

import { Button } from "./index";
import Logo from "../resources/logo.svg";
import "../styles/components/header.css";

export const Header = ({initialized, onFlyoutChange}) => {
	const buttonText = initialized ? "Return to search" : "Begin your search";

	return (
		<header className={`component_header${initialized ? " initialized" : ""}`}>
			<h1>Calendeer</h1>
			{!initialized && <h6>The sealiest way to stay organized by your <span role="img">🖤</span>of animals</h6>}
			<Button onClick={onFlyoutChange}>{buttonText}</Button>
			{!initialized && <div className="credits">
				<h3>Powered by</h3>
				<a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
			</div>}
			{!initialized && <div className="logo">
				<img src={Logo} alt="deer logo" />
			</div>}
		</header>
	);
};
