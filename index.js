const express = require('express');
const { connectDB } = require('./config/connection');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const port = 8000;


connectDB();
app.use(express.json());

app.listen(8000, ()=>{
    console.log("Running");
})