const express = require('express');
const User = require('../models/User');
const jwtDecode = require('jwt-decode');
const signInRouter = express.Router({mergeParams:true});
const bodyParser = require('body-parser');
signInRouter.use(bodyParser.urlencoded({ extended: false }));
signInRouter.use(bodyParser.json());
const {
    createToken,
    verifyPassword
  } = require('../util');

signInRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200 ;
    res.setHeader('Content-Type','application/json');
    next();
})
.post( async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({
        email
      }).lean();
  
      if (!user) {
        return res.status(403).json({
          message: 'Wrong email or password.'
        });
      }
  
      const passwordValid = await verifyPassword(
        password,
        user.password
      );
  
      if (passwordValid) {
        const { password, bio, ...rest } = user;
        const userInfo = Object.assign({}, { ...rest });
  
        const token = createToken(userInfo);
  
        const decodedToken = jwtDecode(token);
        const expiresAt = decodedToken.exp;
  
        res.json({
          message: 'Authentication successful!',
          token,
          userInfo,
          expiresAt
        });
      } else {
        res.status(403).json({
          message: 'Wrong email or password.'
        });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(400)
        .json({ message: 'Something went wrong.' });
    }
  });

module.exports = signInRouter;