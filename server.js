require('dotenv').config();
//imported modules
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const signUpRouter = require('./routes/signUpRouter')
const signInRouter = require('./routes/signInRouter');
const User = require('./models/User')

//express app
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 4000)

app.use(morgan('dev'));

//Express Router Endpoint

app.use('/api/signup',signUpRouter);
app.use('/api/authenticate',signInRouter);


app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find()
        .lean()
        .select('_id firstName lastName avatar bio');
  
      res.json({
        users
      });
    } catch (err) {
      return res.status(400).json({
        message: 'There was a problem getting the users'
      });
    }
  });
  
  app.get('/api/bio', async (req, res) => {
    try {
      const { sub } = req.user;
      const user = await User.findOne({
        _id: sub
      })
        .lean()
        .select('bio');
  
      res.json({
        bio: user.bio
      });
    } catch (err) {
      return res.status(400).json({
        message: 'There was a problem updating your bio'
      });
    }
  });
  
  app.patch('/api/bio', async (req, res) => {
    try {
      const { sub } = req.user;
      const { bio } = req.body;
      const updatedUser = await User.findOneAndUpdate(
        {
          _id: sub
        },
        {
          bio
        },
        {
          new: true
        }
      );
  
      res.json({
        message: 'Bio updated!',
        bio: updatedUser.bio
      });
    } catch (err) {
      return res.status(400).json({
        message: 'There was a problem updating your bio'
      });
    }
  });

//MongoDB local connection

// const url = 'mongodb://localhost:27017/local';
// const connect = mongoose.connect(url,{ useFindAndModify: false ,useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex: true});

// connect.then((db) => {
//     console.log('connected correctly to the server');
// },(err)=> console.log(err));


//MongoDB Atlas connection
async function connect() {
    try {
      mongoose.Promise = global.Promise;
      await mongoose.connect(process.env.ATLAS_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    } catch (err) {
      console.log('Mongoose error', err);
    }
    app.listen(PORT);
    console.log('API listening on localhost:'+PORT);
  }
  
  connect(); //call