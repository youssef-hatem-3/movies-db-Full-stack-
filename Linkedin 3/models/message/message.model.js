import mongoose from "mongoose"
const messageSchema = mongoose.Schema(
    {
        message: String ,
        userId:{
            type :  mongoose.SchemaTypes.ObjectId ,
            ref : 'user'
        }
    }
)
export const messageModel = mongoose.model('message', messageSchema)