const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const path = require('path');
require("dotenv").config({ path: "./config.env" });


// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());


// app.use() middleware here ^ ///////////////////

// const dbo = require("./db/conn");

app.use('/api', routes);

app.use(express.static('public'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
 });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))