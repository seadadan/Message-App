const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({path:'./config.env'});
require('./server')
const app=express();

app.use(cors());
app.use(bodyParser());
app.use(express.json());
const authRouter = require('./routes/auth');
app.use('/api/auth',authRouter)
const port=process.env.port
app.listen(port,()=>console.log(`listening on port ${port}`));

