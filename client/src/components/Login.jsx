
   
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import singinImage from '../assets/signup.jpg'
import {AuthsignUp} from "../components"


function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function login() {
    //code
    axios
      .post("http://localhost:7999/api/auth/signin", user)
      .then((res)=>{
       localStorage.setItem("user", JSON.stringify(res.data.user))
       localStorage.setItem("token",JSON.stringify(res.data.token));
       toast.success("User logged in");
       
      })
      .catch((e) => toast.error(e.response.data.message));
  }
  const handleSubmit=(e)=>{
	e.preventDefault();
	console.log(user)
}
  
  return (
	<div className="auth__form-container">
	<div className="auth__form-container_fields">
	   <div className=" auth__form-container_fields-content">
                 <p> Login </p>  
		   <form onSubmit={handleSubmit}>
			  
				  
					    

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
					   
					
				  
					    

                                             <div className=" auth__form-container_fields-content_button">
						     <button onClick={()=> login()}> Login </button>
					     </div>
					
                                
				
				    </form>
				    </div>
				    </div>
				    <div className=" auth__form-container_image">
				<img src={singinImage} alt="sign in"/>
			            </div>
				    </div>
				    
  );
}

export default Login;
