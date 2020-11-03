const http = require('http');
const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(express.static(__dirname +'./public'));

const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 5000)

app.get('/api', (req,res) => {
    const users = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
        {id: 4, firstName: 'John', lastName: 'Doe'},
        {id: 5, firstName: 'Brad', lastName: 'Traversy'},
        {id: 6, firstName: 'Mary', lastName: 'Swanson'},
        {id: 7, firstName: 'John', lastName: 'Doe'},
        {id: 8, firstName: 'Brad', lastName: 'Traversy'},
        {id: 9, firstName: 'Mary', lastName: 'Swanson'},
      ];

      res.json(users);
})

app.use(morgan('dev'))


const server = http.createServer(app);

server.listen(PORT,(err) => {
    if(err){
        throw err;
    }
    console.log("Server is Started.");
})