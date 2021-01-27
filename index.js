const express = require('express')
const app = express()
const cors = require('cors');
const maps = require('./maps');
const port = 3000

app.use(cors());
app.use('/maps',maps);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
