const mongoose = require("mongoose");
const QuestionAndAnswerSchema = new mongoose.Schema(
{
    question: {
        type: String,
      },
    answer: {
        type: String,
      },
},
);

module.exports = mongoose.model("QuestionAndAnswer", QuestionAndAnswerSchema)