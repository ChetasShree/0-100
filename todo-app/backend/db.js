const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:5SlQPq865V8kKOss@cluster0.wxirfuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todos');

const todoScheme = mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean
})
const todo = mongoose.model('todos',todoScheme);
module.exports={
    todo
}