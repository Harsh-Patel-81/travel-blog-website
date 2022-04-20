import mongoose from "mongoose";
import Blog from "../models/Blog";
import User from "../models/User";

export const getAllBlog = async (req, res, next) => {

    let blogs
    try {
        blogs = await Blog.find()
    } catch (err) {
        return console.log(err)
    }
    if (!blogs) {
        return res.status(404).json({ message: "No blogs found" })
    }

    //200 for success
    return res.status(200).json({ blogs })

}

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body

    let existingUser
    try {
        existingUser = await User.findById(user)
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({ message: "unable to find user by this ID" })
    }

    const blog = new Blog({
        title,
        description,
        image,
        user
    })
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await blog.save({ session }) //saving blogs from that session
        existingUser.blogs.push(blog) //pushing blog into user array
        await existingUser.save({ session }) // save user from session
        await session.commitTransaction()
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err })
    }
    return res.status(200).json({ blog })
}
//update the blog
export const updateBlog = async (req, res, next) => {
    const BLogId = req.params.id
    const { title, description } = req.body
    let blog

    try {
        blog = await Blog.findByIdAndUpdate(BLogId, {
            title,
            description
        })
    } catch (err) {
        return console.log(err);

    }
    if (!blog) {
        return res.status(500).json({ message: "unable to update blog" })
    }
    return res.status(200).json({ blog })
}

export const getById = async (req, res, next) => {
    const id = req.params.id
    let blog

    try {
        blog = await Blog.findById(id)
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(404).json({ message: "blog not found" })
    }
    return res.status(200).json({ blog })
}

//delete the blog
export const deleteBlog = async (req, res, next) => {
    const id = req.params.id
    let blog

    try {
        blog = await Blog.findByIdAndRemove(id).populate('user')  //populate to user
        await blog.user.blogs.pull(blog)                          //deleting blog from user
        await blog.user.save()                                    //save user state 
    } catch (err) {
        console.log(err);
    }
    if (!blog) {
        return res.status(500).json({ message: "no blogs found" })
    }
    return res.status(200).json({ message: "deleted successfully" })
}

export const getByUserId = async (req, res, next) => {

    const userId = req.params.id
    let userBlogs

    try {
        userBlogs = await User.findById(userId).populate('blogs')

    } catch (err) {
        return console.log(err)
    }
    if (!userBlogs) {
        return res.status(404).json({ message: "blogs not found" })
    }
    return res.status(200).json({ blogs: userBlogs })

}