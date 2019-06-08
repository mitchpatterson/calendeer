import React from "react";

import "../styles/components/button.css";

export const Button = ({children, ...props}) => {
	return (
		<button className="component_button" {...props}>{children}</button>
	);
};