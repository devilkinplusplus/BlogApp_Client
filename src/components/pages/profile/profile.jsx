import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileSidebar from './profileSidebar';

function Profile() {
  return (
    <div className="flex h-screen">
      <aside className="bg-cyan-800 text-white h-auto w-1/5 p-4">
        <h1 className="text-2xl font-bold font-gemunu px-6">Sidebar</h1>
        <ProfileSidebar />
      </aside>
      <div className="w-4/5">
        <div className="bg-gray-100 h-full">
          <Outlet />
        </div>
      </div>
  </div>
  )
}

export default Profile