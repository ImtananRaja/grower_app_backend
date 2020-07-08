const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())


app.get('/', (req, res, next) => {
  res.json("At the home route")
});



app.listen(4000, () => {
  console.log("Launching")
})