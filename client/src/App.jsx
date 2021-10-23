import React from 'react'



import { ChannelListContainer,ChannelContainer,AuthsignUp} from './components';
import  './App.css';


const authToken=false;
const App = () => {
	if (!authToken) return <AuthsignUp />;
	return (
		<div className="app__wrapper">
			
				<ChannelListContainer/>


				<ChannelContainer/>
			
		    
		</div>
	)
}

export default App


