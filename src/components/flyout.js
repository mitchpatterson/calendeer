import React, { Component } from 'react';

import { Button, Input } from "./index";
import "../styles/components/flyout.css";

export class Flyout extends Component {
	constructor() {
		super();

		this.state = {
			searchQuery: "",
            collectionsQuery: ""
		};
	}

    render() {
    	const { active, onFlyoutChange, onSubmitQuery } = this.props;
    	const { searchQuery, collectionsQuery } = this.state;

        return (
            <aside className={`component_flyout${active ? " active" : ""}`}>
            	<div className="flyout_content">
            		<Button onClick={() => onFlyoutChange(false)}>Close</Button>
            		<div className="search_criteria">
                        <h6>Search for your favourite {collectionsQuery ? "whatever.." : "animal"}</h6>
            			<Input
            				type="search"
            				value={searchQuery}
            				placeholder="Enter your keywords here..."
            				onChange={(e) => this.setState({searchQuery: e.target.value})} />
                        <h6>Search another category if you want</h6>
                        <h6>(This is Optional: Animals is default)</h6>
                        <Input
                            type="search"
                            value={collectionsQuery}
                            placeholder="Enter your keywords here..."
                            onChange={(e) => this.setState({collectionsQuery: e.target.value})} />
            		</div>
            		<Button
                        disabled={!searchQuery}
                        onClick={() => onSubmitQuery({searchQuery, collectionsQuery})}>SUBMIT</Button>
            	</div>
            </aside>
        );
    }
}
