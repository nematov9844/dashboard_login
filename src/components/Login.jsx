/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/Login.png";
import { useLogin } from "../hooks/useLogin";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { mutate, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userDetails = {
			email,
			password,
		};
		try {
			await mutate(userDetails);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className=' flex items-center justify-between w-full h-screen bg-cover bg-center px-4 md:px-[5%] max-w-[1440px] mx-auto'
			style={{ backgroundImage: `url(${LoginImg})` }}>
			<div className='w-3/5 flex flex-col gap-4'>
				<h1 className='text-white font-bold text-[2.5rem] md:text-[5rem]'>Welcome Back .!</h1>
				<button className='text-white border border-white w-60 h-16 text-lg hover:border-opacity-80'>
					Skip the lag ?
				</button>
			</div>

			{/* Right section */}
			<div className='w-2/5 h-full flex items-center justify-center'>
				<div className='w-4/5 max-w-[400px] p-8 rounded-[20px] bg-black bg-opacity-20 backdrop-blur-md border border-gray-500 shadow-md'>
					<h4 className='text-white font-bold text-2xl mb-2'>Login</h4>
					<p className='text-white text-opacity-70 mb-6'>Glad you’re back.!</p>

					{/* Username */}
					<input
						type='text'
						placeholder='Enter your username'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full p-3 mb-4 rounded bg-transparent border border-white border-opacity-20 placeholder:text-white placeholder:text-opacity-70 text-white focus:border-blue-500 focus:outline-none'
					/>

					{/* Password */}
					<input
						type='password'
						placeholder='Enter your password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full p-3 mb-4 rounded bg-transparent border border-white border-opacity-20 placeholder:text-white placeholder:text-opacity-70 text-white focus:border-blue-500 focus:outline-none'
					/>

					{/* Remember Me */}
					<label className='flex items-center text-white mb-6'>
						<input
							type='checkbox'
							className='mr-2 text-blue-500'
						/>{" "}
						Remember me
					</label>

					{/* Login Button */}
					<button
						onClick={handleSubmit}
						disabled={isLoading}
						className='w-full py-3 mb-4 text-white font-bold text-lg bg-gradient-to-r rounded-md from-blue-500 to-blue-700 hover:opacity-90 disabled:opacity-50'>
						{isLoading ? "Loading..." : "Login"}
					</button>

					{/* Forgot Password */}
					<p className='text-center text-white text-opacity-70 hover:text-blue-500 cursor-pointer mb-6'>
						Forgot password ?
					</p>

					{/* Divider */}
					<div className='relative flex items-center justify-center my-4'>
						<hr className='border-t border-white border-opacity-20 w-full' />
						<span className='absolute bg-black px-2 text-white text-opacity-70'>Or</span>
					</div>

					{/* Social Icons */}
					<div className='flex justify-center gap-4 mb-6'>
						<button className='text-red-500 text-xl'>
							<FaGoogle />
						</button>
						<button className='text-blue-600 text-xl'>
							<FaFacebook />
						</button>
						<button className='text-gray-800 text-xl'>
							<FaGithub />
						</button>
					</div>

					{/* Footer */}
					<p className='text-center text-white'>
						Don’t have an account?{" "}
						<span
							onClick={() => navigate("/register")}
							className='text-blue-500 hover:underline cursor-pointer'>
							Signup
						</span>
					</p>

					{/* Footer Links */}
					<div className='flex justify-between mt-8 text-white text-opacity-70'>
						<span className='cursor-pointer hover:text-blue-500'>Terms & Conditions</span>
						<span className='cursor-pointer hover:text-blue-500'>Support</span>
						<span className='cursor-pointer hover:text-blue-500'>Customer Care</span>
					</div>
				</div>
			</div>
		</div>
	);
}
