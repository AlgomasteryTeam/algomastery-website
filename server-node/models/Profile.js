const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  linkedin: {
    type: String,
  }
})

module.exports = mongoose.Model('Profile', profileSchema)