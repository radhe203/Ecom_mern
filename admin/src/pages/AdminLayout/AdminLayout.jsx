import React from 'react'
import './AdminLayout.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct'
import ListProduct from '../../components/ListProduct/ListProduct'
function AdminLayout() {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/productlist' element={<ListProduct/>} />
        </Routes>
    </div>
  )
}

export default AdminLayout