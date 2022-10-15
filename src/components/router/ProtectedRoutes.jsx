import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
 
const useAuth =()=>{
    const mail = localStorage.getItem('signemail');
    const passwrd = localStorage.getItem('signpassword');

    if (mail && passwrd) {
        return true;
    }
    return false;
}

function ProtectedRoutes() {
    const isAuth =useAuth();

  return (
    isAuth ? <Outlet/>: <Navigate  to='/signup'/>
  )
}

export default ProtectedRoutes