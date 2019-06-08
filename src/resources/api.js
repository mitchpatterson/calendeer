import Axios from "axios";

const url = "https://api.unsplash.com";
const callAxios = (method, url, params, success, error) => {
	Axios({
	  method,
	  url,
	  params: {
	  	...params,
	    client_id: '4fcdcea7848dffa0b9e459501dd20f7f9bef5e3af825aad7087a2d2e9caa8159'
	  }
	})
	.then(response => {
	  success(response);
	})
	.catch(err => {
	  error(err);
	})
};

export const loadCollections = ({query, success, error}) => {
	const params = {
		per_page: 5,
		page: 1,
		query: query ? query : "animals"
	};

	callAxios("get", `${url}/search/collections`, params, success, error);
};

export const loadImages = ({query, collections, page, success, error}) => {
	const params = {
		collections,
	    query,
	    per_page: 1,
	    page
	};

	callAxios("get", `${url}/search/photos`, params, success, error);
};