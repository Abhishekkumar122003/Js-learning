// password - A49GeWjqD1MZkHHX
const mongoose = require("mongoose");
// connect to main MongoDB database 
mongoose.connect("")

// design mongoose Schema and model object

const UserSchema = new mongoose.Schema({
    username:String,
    password:String
});

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId:mongoose.Types.ObjectId
});

const userModel = mongoose.model( "Users" , UserSchema );
const todoModel = mongoose.model (  "todos" , TodoSchema );
module.exports = {
    userModel:userModel,
    todoModel: todoModel 
}