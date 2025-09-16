import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';
import cors from 'cors';
import chatRoutes from './routes/chat.js'
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", chatRoutes);


const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
    connectToDB();
})
