import React, { Component } from "react";
import { ContentContainer } from "./containers";

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      collections: []
    };
  }

  componentWillMount() {
    // this.loadImages();
    // this.loadCollections();
  }

     //  loadCollections = () => {
    //   Axios({
    //     method: 'get',
    //     url: 'https://api.unsplash.com/search/collections',
    //     params: {
    //       client_id: '4fcdcea7848dffa0b9e459501dd20f7f9bef5e3af825aad7087a2d2e9caa8159',
    //       per_page: 3,
    //       page: 1,
    //       query: "Animals"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response);
    //     this.setState({collections: response.results});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // }

    // loadImages = () => {
    //   Axios({
    //     method: 'get',
    //     url: 'https://api.unsplash.com/search/photos',
    //     params: {
    //       client_id: '4fcdcea7848dffa0b9e459501dd20f7f9bef5e3af825aad7087a2d2e9caa8159',
    //       collections: this.state.collections,
    //       query: "tiger",
    //       per_page: 1,
    //       page: 1,
    //     }
    //   })
    //   .then(reponse => {
    //     console.log(reponse);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // }

  render () {
    return (
      <div className="App">
        <ContentContainer />
      </div>
    );
  }
}

