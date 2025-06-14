import mongoose from 'mongoose';

const connectDB = async (DatabaseURL) => {
    try {
        
        const dbOption = {
            dbName : "microcodeauth",
        }

        await mongoose.connect(DatabaseURL, dbOption)
        console.log("DB Connected successfullly");

    } catch (error) {
        console.log(error);
    }
}

export default connectDB