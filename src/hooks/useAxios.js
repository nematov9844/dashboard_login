/** @format */

import axios from "axios";

export const useAxios = () => {
	const response = ({ url, method = "GET", body, params, headers }) => {
		return axios({
			url: `${import.meta.env.VITE_API_URL}${url}`,
			method,
			data: body,
			params: { ...params },
			headers: { ...headers },
		});
	};
    return response
};
