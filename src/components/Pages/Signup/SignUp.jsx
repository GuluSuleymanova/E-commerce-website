import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link,useNavigate } from 'react-router-dom';
import '../Signup/signup.css'
import img from '../Login/loginform.jpg'
//import imgg from "../"

const Schema = yup.object().shape({
  Name: yup.string().min(4).max(15).required('Name is required please !'),
  Surname: yup.string().min(4).max(15).required('Surname is required please !'),
  Email:yup.string().required("Email is required please !"),
  Password:yup.string().min(8).max(32).required("Password is required please !"),
  ConfirmPassword:yup.string().oneOf([yup.ref("Password"),null]).required("Confirm Password is required please !"),
});

function SignUp() {
  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(Schema),
  });
  const navigate =useNavigate();

   const onSubmit =data=>{
    localStorage.setItem('signemail', data.Email);
    localStorage.setItem('signpassword', data.Password);
     navigate('/login');
   }

  return (
    <div className='signup'>
      <div className="bg2" style=
        {{backgroundImage:`url(${(img)})`
      }}>
        <div className="container">
          <div className="row d-flex justify-content-end align-items-center">
            
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className="head-title text-center">
              <h1> Welcome Sign Up</h1>
            </div>
              <div className="form-parts">
                <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group1 ">
                <input 
                type="text" 
                name='name' 
                id='ntext' 
                className="form-control1" 
                placeholder="Your Name"
                 {...register("Name")} />
                <p>{errors.Name?.message}</p>
                
                 </div>
                 <div className="form-group1 ">
                <input type="text"
                 name='srname'
                  id='stext'
                   className="form-control1" 
                   placeholder="Your Surname" 
                   {...register("Surname")} />
                   <p>{errors.Surname?.message}</p>
                 </div>
                 <div className="form-group1 ">
                <input type="text" 
                name='ml'
                 id='email'
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
                 <div className="form-group1 ">
                <input type="password"
                 name='conpsw' 
                 id='cpassword'
                  className="form-control1"
                   placeholder="Your Confirm Password"
                   {...register("ConfirmPassword")} />
                   <p>{errors.ConfirmPassword?.message}</p>
                 </div>
                 <div className="submit-form1">
                  <button className="button" type="submit" value="Send" name="send">
                      <span>Sign Up</span>
                  </button>

              </div>

                </form>
                <div className="links">
                  <span>Already have an account?</span>
                  <Link className='link' to='/login'>SignIn</Link>
                </div>
                <Link className='link' to='/'>Back to Home</Link>

              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp