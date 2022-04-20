import mongoose from 'mongoose'

const Schema = mongoose.Schema

//creating user schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [{ //array bcs one user = multiple blogs
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        required: true
    }]
})

//storing user collection to mongoDB

export default mongoose.model("User", userSchema)