const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is must!'],
        trim:true,
        maxLength:[20,'must be less than 20 chars!']
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports=mongoose.model('Task',TaskSchema)