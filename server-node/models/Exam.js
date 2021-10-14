const mongoose = require('mongoose')

const examSchema = mongoose.Schema({
  question: {
    type: String,
  },
  options: {
    type: Array,
  },
  correctOption: {
    type: Number,
  },
  hint: {
    type: String,
  }
})

module.exports = mongoose.Model('Exam', examSchema)