import React, { Component } from 'react';

import { Header, Flyout, Calendar, Button } from "../components";
import { loadImages, loadCollections } from "../resources";
import '../styles/containers/content.css';

export class ContentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	searchQuery: "",
        	collectionsQuery: "",
        	collections: [],
        	results: null,
            flyout: false,
            initialized: false,
            loading: false
        };

        this.page = 1;
    }

    _updateFlyout = update => {
        this.setState({flyout: update})
    };

    _submitQuery = ({searchQuery, collectionsQuery}) => {
        this.setState({loading: true});
        loadCollections({
            query: collectionsQuery,
            success: res => this.onSuccessfulCollectionsSearch(res, searchQuery, collectionsQuery),
            error: err => console.error(err)
        });
    };

    onSuccessfulCollectionsSearch = (response, query, collectionsQuery) => {
        let collections = "";
        response.data.results.forEach((result, i) => {
            if (i === 0) collections += result.id.toString();
            else collections += `,${result.id}`;
        });
        loadImages({
            query,
            collections,
            page: this.page,
            success: res => this.onSuccessfulSearch(res, response.data.results, query, collectionsQuery),
            error: err => console.log(err)
        });
    };

    onSuccessfulSearch = (response, collections, query, collectionsQuery) => {
        this.setState({
            initialized: true,
            results: response.data.results[0],
            collections,
            flyout: false,
            searchQuery: query,
            collectionsQuery
        });
    };

    updatePageAndSubmitQuery = (up) => {
        const { searchQuery, collectionsQuery } = this.state;
        this.page = up ? this.page + 1 : this.page - 1;
        this._submitQuery({searchQuery, collectionsQuery});
    };

    render() {

        return (
            <div className="container_content">
            	<Header
                    initialized={this.state.initialized}
                    onFlyoutChange={ () => this._updateFlyout(true) } />
                <Flyout
                    active={this.state.flyout}
                    onFlyoutChange={ update => this._updateFlyout(update) }
                    onSubmitQuery={ (q) => {this.page = 1; this._submitQuery(q);} } />
                {this.state.initialized && <Calendar result={this.state.results} />}
                {this.state.initialized && <div className="pagination">
                    {this.page > 1 && <Button onClick={() => this.updatePageAndSubmitQuery(false)}>Oops, I DID like that one</Button>}
                    <Button onClick={() => this.updatePageAndSubmitQuery(true)}>Not feeling it? Try another</Button>
                </div>}
            </div>
        );
    }
}
