/** @format */

import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister"; // Import the hook
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import SignUpImg from '../assets/Signup.png'
export const Register = () => {
	const navigate = useNavigate();
	const { mutate, isLoading } = useRegister(); // Use the mutate function

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userDetails = {
			username: e.target.username.value,
			email: e.target.emailOrPhone.value,
			password: e.target.password.value,
		};
		try {
			await mutate(userDetails);
		} catch (error) {
			console.error("Registration error:", error);
		}
	};

	return (
		<div
			className='flex items-center justify-between w-full h-screen bg-cover bg-center px-4 md:px-[5%] max-w-[1440px] mx-auto'
			style={{ backgroundImage: `url(${SignUpImg})` }}>
				
			{/* Left section */}
			<div className='w-[60%] flex flex-col gap-6'>
				<h1 className='text-white font-bold text-4xl md:text-6xl'>Roll the Carpet.!</h1>
				<button className='text-white border border-white w-60 h-16 text-lg hover:border-opacity-80'>
					Skip the lag ?
				</button>
			</div>

			{/* Right section */}
			<div className='w-[40%] h-full flex items-center justify-center'>
				<div className='w-[70%] p-6 bg-black bg-opacity-20 rounded-2xl text-white mx-auto text-center backdrop-blur-md border-2 border-gray-400 shadow-md'>
					<h4 className='font-bold text-2xl mb-4'>Signup</h4>
					<p className='text-sm mb-6'>Just some details to get you in.!</p>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col gap-4'>
						<input
							type='text'
							name='username'
							placeholder='Username'
							className='p-3 rounded-md bg-transparent border border-gray-300 text-white placeholder-white focus:outline-none focus:border-indigo-500'
							required
						/>
						<input
							type='email'
							name='emailOrPhone'
							placeholder='Email / Phone'
							className='p-3 rounded-md bg-transparent border border-gray-300 text-white placeholder-white focus:outline-none focus:border-indigo-500'
							required
						/>
						<input
							type='password'
							name='password'
							placeholder='Password'
							className='p-3 rounded-md bg-transparent border border-gray-300 text-white placeholder-white focus:outline-none focus:border-indigo-500'
							required
						/>
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							className='p-3 rounded-md bg-transparent border border-gray-300 text-white placeholder-white focus:outline-none focus:border-indigo-500'
							required
						/>
						<button
							type='submit'
							disabled={isLoading}
							className='py-3 w-full bg-gradient-to-r from-blue-600 to-indigo-800 rounded-md text-white font-bold hover:from-indigo-800 hover:to-blue-600 disabled:opacity-50'>
							{isLoading ? "Signing up..." : "Signup"}
						</button>
					</form>
					<div className='my-4 text-gray-400'>Or</div>
					<div className='flex justify-center gap-4'>
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
					<p className='mt-6 text-sm'>
						Already Registered?{" "}
						<button
							onClick={() => navigate("/login")}
							className='text-indigo-500 hover:underline'>
							Login
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};
