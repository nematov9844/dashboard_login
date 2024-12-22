/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProfilePage = () => {
	const navigate = useNavigate();

	const {
		data: userProfile,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["userProfile"],
		queryFn: async () => {
			const response = await axios.get("https://auth-backend-7w3u.onrender.com/user/profile", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			return response.data;
		},
	});

	const token = localStorage.getItem("token");
	if (!token) {
		navigate("/login");
		return;
	}

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="max-w-3xl mx-auto p-8 bg-gray-800 text-white rounded-lg shadow-xl">
			<h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">User Profile</h1>
			<div className="space-y-4">
				{userProfile.profileImage && (
					<div className="w-32 h-32 mx-auto mb-4">
						<img
							src={`https://auth-backend-7w3u.onrender.com${userProfile.profileImage}`}
							alt="Profile"
							className="w-full h-full object-cover rounded-full border-2 border-indigo-500"
						/>
					</div>
				)}
				<p className="text-lg">
					<strong>First Name:</strong> {userProfile.firstName}
				</p>
				<p className="text-lg">
					<strong>Last Name:</strong> {userProfile.lastName}
				</p>
				<p className="text-lg">
					<strong>Age:</strong> {userProfile.age}
				</p>
				<p className="text-lg">
					<strong>Bio:</strong> {userProfile.bio}
				</p>
				<p className="text-lg">
					<strong>Email:</strong> {userProfile.email}
				</p>
			</div>
			<div className="mt-6 flex gap-4">
				<button
					onClick={() => navigate("/profile/edit")}
					className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Edit Profile
				</button>
			</div>
		</div>
	);
};

export default CreateProfilePage;
