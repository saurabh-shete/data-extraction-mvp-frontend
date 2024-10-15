import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useAuthStore } from './store/authStore'; // Import the auth store
import { useSidebarStore } from './store/sidebarStore'; // Import the sidebar store

const App = () => {
  const token = useAuthStore((state) => state.token); // Check if the user is logged in
  const sidebarOpen = useSidebarStore((state) => state.sidebarOpen); // Sidebar state

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route: Only accessible if logged in */}
        {token ? (
          <Route
            path="/"
            element={
              <div className="flex">
                {/* <Sidebar /> */}
                <div
                  className={`flex-1 flex flex-col transition-transform duration-300 ${
                    sidebarOpen ? 'transform translate-x-64' : ''
                  }`}
                >
                  <Header />
                  <main className="flex-grow p-4">
                    <Home />
                  </main>
                </div>
              </div>
            }
          />
        ) : (
          // Redirect to login if not authenticated
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;