const express = require('express');
const apiRouter = express.Router({mergeParams:true});

apiRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200 ;
    res.setHeader('Content-Type','application/json');
    next();
})
.get((req,res) => {
    const users = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
      ];

      res.json(users);
})

module.exports = apiRouter;