import React from "react";

import "../styles/components/input.css";

export const Input = ({...props}) => {
	return <input className="component_input" {...props} />;
};