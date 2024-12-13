import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';  // Use Outlet for nested routing
import '../styles/student.css';

const StudentLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        {/* The Outlet renders the matched child route */}
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
