import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Topbar from './components/admin/Topbar'; // Admin navbar
import Upbaar from './components/user/Upbaar'; // User navbar
import Navbaar from './components/home/Navbaar'; // Welcome page navbar

import Welcome from './components/home/Welcome';
import Login from './components/home/Login';
import AdminLog from './components/home/AdminLog';
import Signup from './components/home/Signup';

import Manage from './components/admin/Manage';
import View from './components/admin/View';
import Home from './components/admin/Home';
import User from './components/admin/User';

import Veed from './components/user/Veed';
import Profile from './components/user/Profile';
import Appliedjob from './components/user/Appliedjob';

function App() {
  const location = useLocation();

  // Define route groups for each navbar type
  const isAdminPage = ["/m", "/view", "/h", "/u"].includes(location.pathname);
  const isUserPage = ["/v", "/Profile", "/Applied_Job"].includes(location.pathname);
  const isWelcomePage = ["/", "/Login", "/AdminLog", "/SignUp"].includes(location.pathname);

  return (
    <>
      {/* Conditionally render the appropriate navbar */}
      {isAdminPage && <Topbar />}
      {isUserPage && <Upbaar />}
      {isWelcomePage && <Navbaar />}

      <Routes>
        {/* Admin routes */}
        <Route path="/m" element={<Manage />} />
        <Route path="/view" element={<View />} />
        <Route path="/h" element={<Home />} />
        <Route path="/u" element={<User />} />

        {/* User routes */}
        <Route path="/v" element={<Veed />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Applied_Job" element={<Appliedjob />} />

        {/* Welcome page routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminLog" element={<AdminLog />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
