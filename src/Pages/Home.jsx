/** @format */

import { useNavigate, Routes, Route } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import ProfilePage from "./Profile";
import EditProfilePage from "./EditProfilePage";
import HomePage from "./HomePae";

const { Header, Sider, Content } = Layout;

export default function Home() {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		navigate("/login");
	};

	const menuItems = [
		{ label: "Dashboard", key: "1", path: "/" },
		{ label: "Profile", key: "2", path: "/profile" },
		{ label: "Edit Profile", key: "3", path: "/profile/edit" },
    	];

	const handleMenuClick = (e) => {
		const item = menuItems.find((menuItem) => menuItem.key === e.key);
		if (item && item.path) {
			navigate(item.path);
		}
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Header className='bg-gray-800 text-white flex items-center justify-between'>
				<div className='text-xl font-bold'>Dashboard</div>
				<Button
					onClick={handleLogout}
					className='text-white py-1 px-3 bg-red-500 hover:bg-red-400 rounded-md'>
					Logout
				</Button>
			</Header>

			<Layout>
				<Sider
					width={250}
					className='bg-gray-800 text-white'>
					<Menu
						mode='inline'
						defaultSelectedKeys={["1"]}
						className='text-white'
						theme='dark'
						onClick={handleMenuClick}
						items={menuItems}
					/>
				</Sider>

				<Layout style={{ padding: "0 24px 24px" }}>
					<Content
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
							backgroundColor: "#fff",
							borderRadius: "8px",
						}}>
						<Routes>
							<Route
								path='/'
								element={<HomePage />}
							/>
							<Route
								path='/profile'
								element={<ProfilePage />}
							/>
							<Route
								path='/profile/edit'
								element={<EditProfilePage />}
							/>
							<Route
								path='*'
								element={<h1>Not Found</h1>}
							/>
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
}
