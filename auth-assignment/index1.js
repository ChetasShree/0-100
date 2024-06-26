const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())
mongoose.connect("mongodb+srv://admin:5SlQPq865V8kKOss@cluster0.wxirfuk.mongodb.net/user_app?retryWrites=true&w=majority&appName=Cluster0")

const User = mongoose.model('Users',{name:String,email:String,password:String});

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const existingUser = await User.findOne({email:username});
    if(existingUser) {
        return res.status(400).send("Username already exist");
    }
    const user = new User({name:'vyshu',email:'vyshu123@gmail.com',password:'1234'});
    user.save();
    res.json({
        "msg":"User created successfully"
    })
});

app.listen(3000);