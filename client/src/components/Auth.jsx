import React, { useState } from 'react'
import axios from 'axios'

import singinImage from '../assets/signup.jpg'
const Auth = () => {
const [isSignup,setIsSignup] =useState(false);
const handleChange=()=>{}
const switchMode = () => {
	setIsSignup((prevIsSignup)=>!prevIsSignup)
}
return (
  <div className="auth__form-container">
	<div className="auth__form-container_fields">
	   <div className=" auth__form-container_fields-content">
                 <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>  
		   <form onSubmit={()=> {}}>
			  {isSignup &&(
				  <div className=" auth__form-container_fields-content_input">
                                         <label htmlFor="fullname">Full Name</label>
					 <input
					 name="fullname"
				         type="text"
					 placeholder="Full Name"
					 onChange={handleChange}
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
					 onChange={handleChange}
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
					 onChange={handleChange}
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
					 onChange={handleChange}
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
					 onChange={handleChange}
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
					 onChange={handleChange}
					required
					 />

					</div>
					    )}


					

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

export default Auth
