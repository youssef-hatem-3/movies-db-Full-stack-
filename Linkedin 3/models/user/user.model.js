import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
    {
        Name: String ,
        email: String ,
        password: String ,
        age: Number ,
        Phone: Number ,
        emailConfirm : {
            type : Boolean , default : false 
        } ,
        gender :{
            type : String ,
            default : 'Male' ,
            enum : ['Male','Female']
        } ,
        profilePic : String ,
        coverPic : Array ,
        online : {
            type : Boolean ,
            default : false
        } ,
        lastSeen : Date,  
    }, { timestamps:true }
)
export const userModel = mongoose.model( 'user' , userSchema )