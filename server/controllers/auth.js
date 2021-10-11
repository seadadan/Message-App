const bcrypt = require('bcrypt')
const crypto = require('crypto')
const signup=(req, res)=>{
  try{
	  const {fullName,username,password,phoneNumber}=req.body;
	  
  } catch(error){
	  console.log(error);
	  res.status(500).json({message:error.message});
  }	
};
const login=(req, res)=>{
	try{

	} catch(error) {
		console.log(error);
		res.status(500).json({message:error.message});
	}
};


module.exports ={signup,login}

