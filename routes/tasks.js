const express= require('express')
const router = express.Router()

const {getAllTask,createTask,getTask,updateTask,deleteTask}=require('../controller/tasks')
const { getAllTasks } = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router