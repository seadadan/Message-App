import React from 'react'
import { ChannelListContainer,ChannelContainer,AuthsignUp,Login} from './components';
import  './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const token =JSON.parse(localStorage.getItem('token'));		
const App = () => {
	if (!token) return <Login />;
	return (
		<div className="app__wrapper">
			
				<ChannelListContainer/>


				
			 <ChannelContainer/>
				<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 
		</div>
		
	)
}

export default App


