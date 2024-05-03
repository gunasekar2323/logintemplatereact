import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import {TbTable, TbLogout2,TbBrandBitbucket } from "react-icons/tb";
const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen">

    {/* Small Left Menu */}
    <aside className="bg-gray-800 text-white w-16 p-4">
      {/* Left Menu Content */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold"><FaUser /></h1>
      </div>
      <nav>
        <ul>
          <li className="mb-2 text-2xl font-semibold">
            <Link className="hover:underline" to={'/dashboard/timesheet'}>
              <TbTable/>
            </Link>
          </li>
          <li className="mb-2 text-2xl font-semibold">
            <Link className="hover:underline" to={'/dashboard/buckets'}>
              <TbBrandBitbucket/>
            </Link>
          </li>
          <li className="mb-2 text-2xl font-semibold cursor-pointer">
          <Link className="hover:underline" to={'/dashboard/timesheet'}>
              <TbLogout2/>
              </Link>
          </li>
          {/* Add more menu items */}
        </ul>
      </nav>
    </aside>
  
    {/* Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-semibold">Welcome to EasySnap</h1>
      </header>
  
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="mt-4">
          <Outlet />
        </div>
      </main>
    </div>
  
  </div>
  
  );
};

export default DashboardPage;
