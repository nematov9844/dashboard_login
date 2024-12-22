/** @format */

import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<Link to='/login'>Login</Link> | <Link to='/register'>Register</Link>
		</div>
	);
};

export default HomePage;
