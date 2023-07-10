import mongoose from 'mongoose';


const DBConnection = async() =>{
    const MONGODB_URI = 'mongodb+srv://AradhyaDixit18:Aradhu08@file-share.u3p3toy.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser : true});
        console.log("MongoDB successfully connected.")
    } catch (error) {
        console.log(error); 
    }
}

export default DBConnection;