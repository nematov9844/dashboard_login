/** @format */

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoutes";

export const useRegister = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: async (userDetails) => {
			const response = await axios
				.post("https://auth-backend-7w3u.onrender.com/register", userDetails);

			if (response.data.token) {
				localStorage.setItem("token", response.data.token);
			navigate("/create-profile")
			PrivateRoute()

			}

			return response.data;
		},
	});
};
