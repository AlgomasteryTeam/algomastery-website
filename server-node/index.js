const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const chatRoute = require('./routes/Chat')
const examQuizRoute = require('./routes/examQuiz')
const certificateRoute = require('./routes/certificate')
const app = express()
const port = 5000
app.use(cors())
app.use(bodyParser.json())
app.use('/api/chat', chatRoute)
app.use('/api/exam', examQuizRoute)
app.use('/certificate', certificateRoute)

app.listen(port, () => {
  console.log(`Server is listening at Port: ${port}`)
})