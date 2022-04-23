import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blog-routes'
import router from './routes/user-routes'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())  //tell saerver that recieved file is json file
app.use('/api/users', router)
app.use('/api/blogs', blogRouter)

// app.use('/api', (req, res, next) => {
//     res.send("hello world")
// })

mongoose.connect('mongodb+srv://admin:BhavyaDoshi@cluster0.wheuz.mongodb.net/TravelLog?retryWrites=true&w=majority')
    .then(() => app.listen(2000))
    .then(() => console.log("connected to database and listen localhost 2000"))
    .catch((err) => console.log(err))