import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
 
const useAuth =()=>{
    const mail = localStorage.getItem('loginmail');
    const passwrd = localStorage.getItem('loginpassword');

    if (mail && passwrd) {
        return true;
    }
    return false;
}

function LoginProtected() {
    const isAuth =useAuth();

  return (
    isAuth ? <Outlet/>: <Navigate  to='/login'/>
  )
}

export default LoginProtected