//core modules
const http = require('http');

//third party modules
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');

const app = express();


const signinRouter = require('./src/routes/signinRouter')
const url = 'mongodb://localhost:27017/local';
const connect = mongoose.connect(url,{ useFindAndModify: false ,useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex: true});

connect.then((db) => {
    console.log('connected correctly to the server');
},(err)=> console.log(err));


const apiRouter =require('./src/routes/apiRouter');

app.use(express.static(__dirname +'./public'));

const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 5000)

app.use('/api',apiRouter);
app.use('/sign',signinRouter);

app.use(morgan('dev'))


const server = http.createServer(app);

server.listen(PORT,(err) => {
    if(err){
        throw err;
    }
    console.log("Server is Started.");

})