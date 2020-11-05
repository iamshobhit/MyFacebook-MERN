const express = require('express');
const bodyParser = require('body-parser');
const Signin = require('../models/signin');

const signinRouter = express.Router({mergeParams:true});

signinRouter.use(bodyParser.json());
signinRouter.route('/')
.get((req,res,next) => {
    Signin.find({})
    .then((credentials) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(credentials);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.post((req, res, next) => {
    Signin.create(req.body)
    .then((info) => {
        console.log('Credentials Created ', info);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(info);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = signinRouter;