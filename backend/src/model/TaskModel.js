import mongoose from "mongoose";


const taskSchema = mongoose.Schema({

    userid: { type: String, required: true },

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    CreatedOn: {
        type: Date,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    }
    ,
    CompleatedOn: { type: Date }
    ,
    IsCompleated: { type: Boolean, required: true, default: false }
})


export const TaskModel = mongoose.model('Task', taskSchema);