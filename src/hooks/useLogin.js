import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import PrivateRoute from "../PrivateRoute/PrivateRoutes";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: async (userDetails) => {
			const response = await axios.post("https://auth-backend-7w3u.onrender.com/login", userDetails).then((res) => res.data)

			if (response.token) {
				localStorage.setItem("token", response.token);
				navigate("/")
                PrivateRoute()
			}

			return response.data;
		},
	});
};
