import React from 'react'



import { ChannelListContainer,ChannelContainer,Auth} from './components';
import  './App.css';


const authToken=false;
const App = () => {
	if (!authToken) return <Auth/>
	return (
		<div className="app__wrapper">
			
				<ChannelListContainer/>


				<ChannelContainer/>
			
		    
		</div>
	)
}

export default App


