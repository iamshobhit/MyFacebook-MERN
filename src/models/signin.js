const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signinSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

let Signin = mongoose.model('Login',signinSchema);

module.exports = Signin;