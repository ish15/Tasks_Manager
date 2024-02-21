const express=require('express')

const app=express()
const routes=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not_found')
const errorHandlerMiddleware=require('./middleware/error_handler')

//middleware
app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks',routes)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port=3000

const start=async() =>{
    try{
        await connectDB(process.env.MONGO_URI) 
        app  .listen(port,()=>
            console.log('Server is listening on port...')
        )
    }
    catch(error){
        console.log(error)
    }
}

start()