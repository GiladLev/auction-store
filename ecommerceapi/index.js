const express = require("express");
const app = express();
const moongoose = require("mongoose");
const dotnev = require("dotenv");
var cors = require('cors')
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const prouductRoute= require("./routes/prouduct")

// server
dotnev.config();

moongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull"))
  .catch((err) => console.log(err));

  app.use(cors())
  app.use(express.json())
  app.use("/api/auth", authRoute)
  app.use("/api/users", userRoute)
  app.use("/api/products", prouductRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running`);


  
// socket for chat bot
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


const admin = io.of("/admin");

admin.use((socket, next) => {
  // ensure the user has sufficient rights
  console.log("you are admin");
  next();
});

admin.on("connection", socket => {
  console.log(`admin Connected: ${socket.id}`);

  socket.on("send_question", (data) => {
    console.log(data);
    socket.emit("send_answer", { admin: true ,message: 'you are admin, lets learn the bot: what do you whant to ask' });
  });
  socket.on("add_question", (data) => {
    console.log("save data", data);
    socket.emit("add_answer", { admin: true ,message: 'I got the question what is your answer' });
  });

});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // socket.on("join_room", (data) => {
  //   socket.join(data);
  // });

  socket.on("send_question", (data) => {
    console.log(data);
    const ans = {message: 'ans'}
    socket.emit("send_answer", ans);
  });
});

server.listen(3001, () => {
  console.log("socket IS RUNNING");
});


});
