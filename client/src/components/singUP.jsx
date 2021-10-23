import  { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

import singinImage from '../assets/signup.jpg'


function AuthsignUp() {

	const [user,setUser]=useState({
		fullname:"",
		username:"",
		password:"",
		confirmPassword:"",
		phoneNumber:"",
		avatarURl:"",
	});

	function signUp(){
		axios
		.post("http://localhost:7999/api/auth",user)
		.then((res)=>console.log(res));

	}

	function login() {
		//code
		axios
		  .post("http://localhost:7999/api/auth/signin", user)
		  .then((res) => toast.success("User logged in"))
		  .catch((e) => toast.error(e.response.data.message));
	      }
const [isSignup,setIsSignup] =useState(false);

const handleSubmit=(e)=>{
	e.preventDefault();
	console.log(user)
}
const switchMode = () => {
	setIsSignup((prevIsSignup)=>!prevIsSignup)
}
return (
  <div className="auth__form-container">
	<div className="auth__form-container_fields">
	   <div className=" auth__form-container_fields-content">
                 <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>  
		   <form onSubmit={handleSubmit}>
			  {isSignup &&(
				  <div className=" auth__form-container_fields-content_input">
                                         <label htmlFor="fullname">Full Name</label>
					 <input
					 name="fullname"
				         type="text"
					 placeholder="Full Name"
					 onChange={(e) =>setUser({...user, fullname: e.target.value})}
					required
					 />

					</div>
					    )}

			          <div className=" auth__form-container_fields-content_input">
                                        <label htmlFor="username">username</label>
					<input
					 name="username"
					 type="text"
					 placeholder="username"
					 onChange={(e) =>setUser({...user, username: e.target.value})}
					 required
					 />

					</div>
					{isSignup &&(
				  <div className=" auth__form-container_fields-content_input">
                                         <label htmlFor="phoneNumber">phone Number</label>
					 <input
					 name="phoneNumber"
				         type="text"
					 placeholder="phone Number"
					 onChange={(e) =>setUser({...user, phoneNumber: e.target.value})}
					required
					 />

					</div>
					    )}
					     {isSignup &&(
				  <div className=" auth__form-container_fields-content_input">
                                         <label htmlFor="avatarURl">Avatar URL</label>
					 <input
					 name="avatarURl"
				         type="text"
					 placeholder="avatar URl"
					 onChange={(e) =>setUser({...user, avatarURl: e.target.value})}
					required
					 />

					</div>
					    )}
					   
				  <div className=" auth__form-container_fields-content_input">
                                         <label htmlFor="password">Password</label>
					 <input
					 name="password"
				         type="password"
					 placeholder="password"
					 onChange={(e) =>setUser({...user, password: e.target.value})}
					required
					 />

					</div>
					   
					{isSignup &&(
				  <div className=" auth__form-container_fields-content_input">
                                         <label htmlFor="confirmPassword">Confirm Password</label>
					 <input
					 name="confirmPassword"
				         type="password"
					 placeholder="Confirm Password"
					 onChange={(e) =>setUser({...user, password: e.target.value})}
					required
					 />

					</div>
					    )}

                                             <div className=" auth__form-container_fields-content_button">
						     <button onClick={()=>{isSignup ? signUp():login()}}>{isSignup ? "sing Up":"sing In" }</button>
					     </div>
					

				    </form>

				    <div className=" auth__form-container_fields-account">
					    <p>
						    {isSignup
						    ?"Already have an account?"
						    :"Don't have an account?"
						    }
						    <span onClick={switchMode}>
                                                        {isSignup? 'Sign In' : 'sign Up'}
						    </span>
					    </p>
				    </div>
				</div>

			</div>

			<div className=" auth__form-container_image">
				<img src={singinImage} alt="sign in"/>
			</div>
		</div>
	)
}

export default AuthsignUp
