import mongoose from 'mongoose'
export const dbconnection = ()=>{mongoose.connect('mongodb://localhost:27017/newsApi').then(()=>{
    console.log('Database connected');
})}
