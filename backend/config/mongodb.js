import mongoose from "mongoose";

// Your MongoDB connection code here


const connectDB = async () => {
   mongoose.connection.on('connected', () => console.log("Database Connected"));

    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
    console.log('Database URI:',process.env.MONGODB_URI);
};


    

export default connectDB;