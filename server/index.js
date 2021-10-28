const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({path:'./config.env'});
require('./server')
const app=express();
const http = require("http");
const { Server } = require("socket.io");

app.use(cors());
app.use(bodyParser());
app.use(express.json());
const authRouter = require('./routes/auth');
app.use('/api/auth',authRouter)
const port=process.env.port
app.listen(port,()=>console.log(`listening on port ${port}`));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});