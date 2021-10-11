const express = require('express');
const cors =require('cors');
const authRouter = require('./routes/auth.js')
const app=express();
const port=process.env.PORT || 7999;
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); 

app.get('/', (req, res) => {
	res.send('hello world');
});

app.use('/auth',authRouter)

app.listen(port,()=>console.log(`listening on port ${port}`));

