const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const maps = require('./maps');
const port = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/maps',maps);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
