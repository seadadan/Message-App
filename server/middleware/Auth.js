const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
	const token=req.query.token;

	if(!token){
		return res.status(403).json({
			message: 'No token provided'
		});
	}

	try{
		const decoded = jwt.verify(token, 'HunterxHunter');
		if(decoded.username !== req.params.username) throw error("you must be an user to access this")
		
	} catch(e){
               return res.status(403).json({ message: e.message });
	}

	return next();
};
