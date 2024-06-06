import mongoose from "mongoose";

const connectToDB = async () => {
  const connection = {};
  // const url = process.env.MONGO_URI;
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    console.log(`mongo database is connected!!! ${db.connection.host} `);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};

export default connectToDB;

// "mongodb+srv://kmaadcode:mBCpJ2kNtDTnKSVO@cluster0.cvuvwn9.mongodb.net/self-mecanomania?retryWrites=true&w=majority&appName=Cluster0"
