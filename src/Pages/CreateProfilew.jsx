/** @format */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePro = () => {
	const [profileData, setProfileData] = useState({
		firstName: "",
		lastName: "",
		age: "",
		bio: "",
	});
	const navigate = useNavigate();

	const handleCreateProfile = async (e) => {
		e.preventDefault();
		try {
			await axios.post(
				"https://auth-backend-7w3u.onrender.com/user/profile",
				profileData,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);
			navigate("/profile"); // Asosiy sahifaga yo‘naltirish
		} catch (error) {
			console.error("Profile creation failed:", error);
		}
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
			<h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">Create Profile</h1>
			<form onSubmit={handleCreateProfile} className="space-y-4">
				<div>
					<input
						type="text"
						placeholder="First Name"
						value={profileData.firstName}
						onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
						className="w-full p-3 text-gray-800 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Last Name"
						value={profileData.lastName}
						onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
						className="w-full p-3 text-gray-800 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<input
						type="number"
						placeholder="Age"
						value={profileData.age}
						onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
						className="w-full p-3 text-gray-800 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<textarea
						placeholder="Bio"
						value={profileData.bio}
						onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
						className="w-full p-3 text-gray-800 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<button
						type="submit"
						className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Save Profile  dfa
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePro;
