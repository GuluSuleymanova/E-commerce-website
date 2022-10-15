import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link,useNavigate } from 'react-router-dom';
import '../Signup/signup.css'
import img2 from '../Login/signup.jpg'



const Schema = yup.object().shape({
  Email:yup.string().required("Email is required please !"),
  Password:yup.string().min(8).max(32).required("Password is required please !"),
});

function LoginForm() {
  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(Schema),
  });
  const navigate =useNavigate();

  const snemail= localStorage.getItem('signemail');
  const snpassword=localStorage.getItem('signpassword');

  const onSubmit=data=>{
    if (data.Email===snemail && data.Password===snpassword ) {
      localStorage.setItem('loginmail', data.Email);
      localStorage.setItem('loginpassword', data.Password);
      navigate('/');
      
    }
  };

  return (
    <div className='signup login'>
       <div className="bg2" style=
        {{backgroundImage:`url(${(img2)})`
      }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className="form-parts">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group1 ">
                <input type="text" 
                name='ml'
                 id='text'
                  className="form-control1"
                   placeholder="Your Email" 
                   {...register("Email")} />
                   <p>{errors.Email?.message}</p>
                 </div>
                 <div className="form-group1 ">
                <input type="password"
                 name='psw'
                  id='password'
                   className="form-control1"
                    placeholder="Your Password" 
                    {...register("Password")} />
                <p>{errors.Password?.message}</p>
                 </div>
                 <div className="submit-form1">
                  <button className="button" type="submit" value="Send" name="send">
                      <span>Login</span>
                  </button>

              </div>
              </form>
              <div className="links">
                  <span>Not a Member?</span>
                  <Link className='link2' to='/signup'>Signup now</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoginForm