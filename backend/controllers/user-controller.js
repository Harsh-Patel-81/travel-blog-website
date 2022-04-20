import User from "../models/User";
import bcrypt from 'bcryptjs'

export const getAllUser = async (req, res, next) => {

    let users
    try {
        users = await User.find()
    } catch (err) {
        return console.log(err)
    }
    if (!users) {
        return res.status(404).json({ message: "No user found" })
    }

    //200 for success
    return res.status(200).json({ users })

}

export const signUp = async (req, res, next) => {

    const { name, email, password } = req.body
    let existingUser

    try {
        existingUser = await User.findOne({ email }) //fetch record using email
    } catch (err) {
        return console.log(err);
    }

    if (existingUser) {
        res.status(400).json({ message: "User already exist Login instead!" })
    }

    const hashedPassword = bcrypt.hashSync(password) //for save password in encrypt mode

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: []
    })



    try {
        await user.save()   //save user in mongoose and await is for it takes some time
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user })

}

export const login = async (req, res, next) => {
    const { email, password } = req.body
    let existingUser

    try {
        existingUser = await User.findOne({ email }) //fetch record using email
    } catch (err) {
        return console.log(err);
    }

    if (!existingUser) {
        res.status(404).json({ message: "Couldn't find the user by this email" })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'incorrect password' })  //unauthorised
    }
    return res.status(200).json({ message: "login successful" }) //correct
}