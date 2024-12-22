/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
import Home from "./Pages/Home";
import HomePage from "./Pages/HomePae";
import Profile from "./Pages/Profile";
import EditProfilePage from "./Pages/EditProfilePage";
import CreateProfilePage from "./Pages/GetProfile";
import { Register } from "./components/Register";
import CreatePro from "./Pages/CreateProfilew";

const App = () => {
	return (
    <Routes>
    {/* Public routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Protected routes */}
        <Route path="/create-profile" element={<CreatePro />} />
    <Route element={<PrivateRoute />}>
      <Route path="*" element={<Home />}>
        {/* Home sahifasi ichidagi sub-routelar */}
        <Route index element={<HomePage />} /> {/* Asosiy Dashboard */}
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<EditProfilePage />} />
      </Route>
    </Route>
  </Routes>
	);
};

export default App;
