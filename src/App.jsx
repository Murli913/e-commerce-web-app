import React  from 'react'

import * as reactRouterDom from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import NoPage from './pages/nopage/NoPage';
import MyState from "./context/data/myState";
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';
function App() {
  return (
    <MyState>
    <reactRouterDom.BrowserRouter>
      <reactRouterDom.Routes>
        <reactRouterDom.Route path="/" element={<Home/>} />
        <reactRouterDom.Route path="/allproducts" element={<Allproducts />} />
        <reactRouterDom.Route path="/order" element={
          <ProtectedRoute><Order/></ProtectedRoute>
        } />
        <reactRouterDom.Route path="/cart" element={<Cart/>} />
        <reactRouterDom.Route path="/dashboard" element={
        <ProtectedRouteForAdmin>    <Dashboard/> </ProtectedRouteForAdmin>
       } />
        <reactRouterDom.Route path='/login' element={<Login/>}/>
        <reactRouterDom.Route path='/signup' element={<Signup/>}/>
        <reactRouterDom.Route path='/productinfo/:id' element={<ProductInfo/>}/>
        <reactRouterDom.Route path='/cart' element={<Cart/>}/>
        <reactRouterDom.Route path='/addproduct' element={
        <ProtectedRouteForAdmin> <AddProduct/> </ProtectedRouteForAdmin>
       }/>
        <reactRouterDom.Route path='/updateproduct' element={
             <ProtectedRouteForAdmin> <UpdateProduct/> </ProtectedRouteForAdmin> 
        }/>
        <reactRouterDom.Route path="/*" element={<NoPage/>} />
      </reactRouterDom.Routes>
      <ToastContainer/>
    </reactRouterDom.BrowserRouter>
    </MyState>
  )
}

export default App
//user
export const ProtectedRoute=({children}) => {
  const user =localStorage.getItem('user')
  if(user){
    return children
  }
  else {
    return <Navigate to={'/login'}/>
  }
}
//admin
export const ProtectedRouteForAdmin = ({children}) => {
  const admin =JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'manan@gmail.com'){
    return children
  }
  else{
    return <Navigator to={'/login'}/>
  }
}
