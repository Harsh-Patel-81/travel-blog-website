import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blog-routes'
import router from './routes/user-routes'


const app = express()
app.use(express.json())  //tell saerver that recieved file is json file
app.use('/api/users', router)
app.use('/api/blogs', blogRouter)

// app.use('/api', (req, res, next) => {
//     res.send("hello world")
// })

mongoose.connect('mongodb+srv://admin:BhavyaDoshi@cluster0.wheuz.mongodb.net/TravelLog?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() => console.log("connected to database and listen localhost 5000"))
    .catch((err) => console.log("error"))