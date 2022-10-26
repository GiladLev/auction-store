const mongoose = require("mongoose");
const QuestionAndAnswerSchema = new mongoose.Schema(
{
    question: {
        type: String,
        required: true,
        unique: true,
      },
      answer: {
        type: String,
        required: true,
        unique: true,
      },
},

);

module.exports = mongoose.model("QuestionAndAnswer", QuestionAndAnswerSchema)