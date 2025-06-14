import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectionDB.js";
import authRoutes from "./routes/Authroutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);


app.get("/", (req, res) => res.send("Hello world"));

app.use('/api/auth', authRoutes);

// . Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));