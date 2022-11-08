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


const QuestionAndAnswer = require('./models/QuestionAndAnswer')

const admin = io.of("/admin");

admin.use((socket, next) => {
  // ensure the user has sufficient rights
  console.log("you are admin");
  next();
});
let question = '';
admin.on("connection", socket => {
  console.log(`admin Connected: ${socket.id}`);

  socket.on("send_question", (data) => {
    socket.emit("send_answer", { status: 'askQuestion', message: 'you are admin, Come teach the bot, write one word that will be the key word for the answers the bot will give' });
    
  })
  socket.on("askQuestion", (data) => {
    question = data.message

   socket.emit("send_answer", { status: "gotQuestionAskAns", message: 'i got the question, add the option answer' });
  })
  socket.on("repatAns",  async(data) => {
    console.log(data);
    try {
     QandA= {
        title: question,
        desc: data.message
      }
      //save mongoDB
      const newQandA =await QuestionAndAnswer.create(QandA)
      // const newQandA = await new QuestionAndAnswer(QandA)
      console.log(newQandA);
    //   newQandA.save(function(err,result){
    //     if (err){
    //         console.log(err);

    //     }
    //     else{
    //         console.log(result)
    //     }
    // })
  
      socket.emit("send_answer", { status: "finsh", message: 'your question and answer are update' });
    } catch (error) {
      console.log(error);
    }
  })


});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // socket.on("join_room", (data) => {
  //   socket.join(data);
  // });

  socket.on("send_question", (data) => {
    console.log(data);
    try {
      const getAllAns =async()=>{
        const res = await QuestionAndAnswer.findOne({ "question" : { $regex: data.message.toLowerCase() } })
        console.log(res)
        const ans = res ? {message: res.answer} : {message: "try another word"}
        socket.emit("send_answer", ans);
      }
      getAllAns()
    } catch (error) {
      console.log(error);
    }
    
  });
});

server.listen(3001, () => {
  console.log("socket IS RUNNING");
});


});
