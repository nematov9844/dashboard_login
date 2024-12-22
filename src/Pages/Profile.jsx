/** @format */

import { Avatar, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useGet } from "../hooks/useGet";

const Profile = () => {
	const navigate = useNavigate();
	const { data } = useGet("user/profile");
	let date = new Date();

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		navigate("/login");
	};

	if (!data) return <div>Loading...</div>;

	return (
		<div className='flex justify-center mt-10'>
			<Card
				className='w-full sm:w-1/2 md:w-full'
				bordered>
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<Avatar
							src={data.profilePicture || "/default-avatar.png"} // Rasmni backenddan yoki defaultdan olish
							size={100}
							className='mr-4'
						/>
						<div>
							<h2 className='text-xl font-bold'>
								{data.firstName} {data.lastName}
							</h2>
							<p className='text-gray-600'>Tug'ilgan sana: {date.getFullYear() - data.age}</p>
							<p className='text-gray-600'>Yoshi: {data.age}</p>
							<p className='text-gray-600'>Email: {data.email}</p>
						</div>
					</div>
					<Button
						type='link'
						icon={<MdOutlineModeEditOutline />}
						className='text-blue-500 hover:text-blue-700'
						onClick={() => navigate("/profile/edit")} // Tahrirlash uchun navigatsiya
					>
						Tahrirlash
					</Button>
				</div>

				<div className='mt-6'>
					<Button
						type='primary'
						onClick={handleLogout}
						className='w-full bg-red-500 hover:bg-red-700'>
						Chiqish
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default Profile;
