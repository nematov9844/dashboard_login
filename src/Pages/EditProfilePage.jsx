/** @format */

import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
	const navigate = useNavigate();
	const { data: userProfile, isLoading } = useQuery({
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

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState("");
	const [bio, setBio] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		if (userProfile) {
			setFirstName(userProfile.firstName);
			setLastName(userProfile.lastName);
			setAge(userProfile.age);
			setBio(userProfile.bio);
			setEmail(userProfile.email);
		}
	}, [userProfile]);

	const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
		mutationFn: async (profileData) => {
			const response = await axios.patch(
				"https://auth-backend-7w3u.onrender.com/user/profile",
				profileData,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);
			return response.data;
		},
		onSuccess: () => {
			navigate("/profile");
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		updateProfile({ firstName, lastName, age, bio, email });
	};

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="max-w-3xl mx-auto p-8 bg-gray-800 text-white rounded-lg shadow-xl">
			<h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">Edit Profile</h1>
			<form onSubmit={handleSubmit} className="space-y-5">
				<div>
					<input
						type="text"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<input
						type="number"
						placeholder="Age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
				<div>
					<textarea
						placeholder="Bio"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
						className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					></textarea>
				</div>
				<div>
					<button
						type="submit"
						disabled={isUpdating}
						className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-500"
					>
						{isUpdating ? "Updating..." : "Update Profile"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditProfilePage;
