const express = require('express');
const app = express()

// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//cors
const cors = require('cors');
app.use(cors())

//.env
require('dotenv/config')

// Database
const db  = require('./helpers/db.js')

//routes 
const author = require('./routes/author');
const category = require('./routes/category');
const article = require('./routes/article');


app.use('/api/author',author)
app.use('/api/category',category)
app.use('/api/article',article)

app.listen(process.env.PORT,()=>{console.log('Listening');})