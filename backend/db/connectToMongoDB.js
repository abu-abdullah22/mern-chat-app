import mongoose from "mongoose";

const connectToMongoDB = async () => {
   try {
    await mongoose.connect(process.env.DB_URI) ;
    console.log('connected to mongodb');
    
   } catch (error) {
    console.log('error connectiong to mongodb', error.message);
   }
};

export default connectToMongoDB;