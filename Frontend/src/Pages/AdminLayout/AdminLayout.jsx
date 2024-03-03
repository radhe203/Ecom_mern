import React from 'react'
import './AdminLayout.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (
    <div className='admin'>
        <Sidebar/>
        <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout