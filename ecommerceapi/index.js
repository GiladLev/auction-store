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

const QuestionAndAnswer = require('./models/QuestionAndAnswer')

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // socket.on("join_room", (data) => {
  //   socket.join(data);
  // });

  socket.on("send_message", (data) => {
    try {
      console.log(data);
      const allQuestionAndAnswer = QuestionAndAnswer.find({})
      const result = allQuestionAndAnswer.find((QA)=>QA.question.include(data))
      console.log(result);
      result ? 
      socket.emit("receive_message", result.ans)
      :
      socket.emit("receive_message", "look another word")
      
    } catch (error) {
      console.log(error);
    }
  });

  socket.on("add_ans", (data) => {
    try {
      const saveNewAns = async()=>{
        const newAns = new QuestionAndAnswer({
          question : data.question,
          answer: answer
        })
        socket.emit("receive_AddAns", `add to data base ${await newAns.save()}`)
      }

    } catch (error) {
      console.log(error);
    }
  });
});

server.listen(3001, () => {
  console.log("socket IS RUNNING");
});


});
