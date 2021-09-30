const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const certificateRoute = require('./routes/certificate')
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/certificate', certificateRoute)

app.listen(port, () => {
  console.log(`Server is listening at Port: ${port}`)
})